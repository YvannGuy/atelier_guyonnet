"use server";

import { Resend } from "resend";

import {
  QUOTE_BUDGETS,
  QUOTE_DELAYS,
  QUOTE_PROJECT_TYPES,
  type QuoteBudgetValue,
  type QuoteDelayValue,
  type QuoteProjectTypeValue,
} from "@/lib/constants/quote-form";
import { siteConfig } from "@/lib/constants/site";

const QUOTE_SUBJECT = "Nouvelle demande de devis — Atelier Guyonnet";

const GENERIC_ERROR_MESSAGE =
  "Une erreur est survenue. Vous pouvez réessayer ou nous écrire directement à contact@atelierguyonnet.com.";

const projectValues = new Set<string>(QUOTE_PROJECT_TYPES.map((o) => o.value));
const budgetValues = new Set<string>(QUOTE_BUDGETS.map((o) => o.value));
const delayValues = new Set<string>(QUOTE_DELAYS.map((o) => o.value));

function labelFor(list: readonly { value: string; label: string }[], value: string): string {
  return list.find((o) => o.value === value)?.label ?? value;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function quoteRecipient(): string {
  return process.env.QUOTE_FORM_RECIPIENT?.trim() || siteConfig.contactEmail;
}

export type QuoteFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const maxLens = {
  nom: 120,
  ville: 120,
  dimensions: 500,
  message: 8000,
  telephone: 40,
} as const;

export async function sendQuoteRequest(
  _prevState: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey?.trim()) {
    console.error("[send-quote-request] RESEND_API_KEY is missing");
    return { status: "error", message: GENERIC_ERROR_MESSAGE };
  }

  const nom = String(formData.get("nom") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telephone = String(formData.get("telephone") ?? "").trim();
  const ville = String(formData.get("ville") ?? "").trim();
  const typeProjet = String(formData.get("typeProjet") ?? "").trim();
  const dimensions = String(formData.get("dimensions") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const delai = String(formData.get("delai") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!nom || nom.length > maxLens.nom) {
    return { status: "error", message: "Indiquez un nom valide." };
  }
  if (!email || !isValidEmail(email)) {
    return { status: "error", message: "Indiquez une adresse e-mail valide." };
  }
  if (!telephone || telephone.length < 6 || telephone.length > maxLens.telephone) {
    return { status: "error", message: "Indiquez un numéro de téléphone valide." };
  }
  if (ville.length > maxLens.ville) {
    return { status: "error", message: "Le nom de ville est trop long." };
  }
  if (!projectValues.has(typeProjet)) {
    return { status: "error", message: "Sélectionnez un type de projet." };
  }
  if (dimensions.length > maxLens.dimensions) {
    return { status: "error", message: "Les dimensions indiquées sont trop longues." };
  }
  if (!budgetValues.has(budget)) {
    return { status: "error", message: "Sélectionnez une fourchette de budget." };
  }
  if (!delayValues.has(delai)) {
    return { status: "error", message: "Sélectionnez un délai souhaité." };
  }
  if (!message || message.length < 10) {
    return {
      status: "error",
      message: "Merci de détailler un peu plus votre message (au moins quelques lignes).",
    };
  }
  if (message.length > maxLens.message) {
    return { status: "error", message: "Le message est trop long." };
  }

  const typeLabel = labelFor(QUOTE_PROJECT_TYPES, typeProjet as QuoteProjectTypeValue);
  const budgetLabel = labelFor(QUOTE_BUDGETS, budget as QuoteBudgetValue);
  const delaiLabel = labelFor(QUOTE_DELAYS, delai as QuoteDelayValue);

  const bodyText = [
    "Nouvelle demande de devis reçue via le site Atelier Guyonnet.",
    "",
    `Nom : ${nom}`,
    `Email : ${email}`,
    `Téléphone : ${telephone}`,
    `Ville : ${ville || "—"}`,
    `Type de projet : ${typeLabel}`,
    `Dimensions approximatives : ${dimensions || "—"}`,
    `Budget estimé : ${budgetLabel}`,
    `Délai souhaité : ${delaiLabel}`,
    "",
    "Message :",
    message,
    "",
    "---",
    "Répondre à ce message pour joindre directement le client (reply-to configuré).",
  ].join("\n");

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() || `${siteConfig.name} <onboarding@resend.dev>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: quoteRecipient(),
      replyTo: email,
      subject: QUOTE_SUBJECT,
      text: bodyText,
    });

    if (error) {
      console.error("[send-quote-request] Resend error:", error);
      return { status: "error", message: GENERIC_ERROR_MESSAGE };
    }
  } catch (e) {
    console.error("[send-quote-request]", e);
    return { status: "error", message: GENERIC_ERROR_MESSAGE };
  }

  return { status: "success" };
}
