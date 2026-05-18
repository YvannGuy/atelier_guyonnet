"use client";

import L from "leaflet";
import { useMemo } from "react";
import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

/** Centre Paris — repère indicatif pour la carte (pas une adresse de rendez-vous). */
const PARIS_POSITION: [number, number] = [48.8566, 2.3522];

const ZOOM = 9;
/** Rayon métres — zone indicative autour de Paris / grande couronne. */
const ZONE_RADIUS_M = 40_000;

export function ServiceAreaMap() {
  const parisIcon = useMemo(
    () =>
      L.divIcon({
        className: "ag-paris-marker",
        html: "<span></span>",
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      }),
    [],
  );

  return (
    <MapContainer
      center={PARIS_POSITION}
      zoom={ZOOM}
      className="ag-service-map z-0 w-full"
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle
        center={PARIS_POSITION}
        radius={ZONE_RADIUS_M}
        pathOptions={{ className: "ag-map-idf-zone" }}
      />
      <Marker position={PARIS_POSITION} icon={parisIcon}>
        <Popup className="font-sans text-xs">
          Paris — point central (indicatif)
        </Popup>
      </Marker>
    </MapContainer>
  );
}
