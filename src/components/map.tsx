import React, { useEffect, useState } from "react";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  MarkerProps,
  LeafletConsumer,
} from "react-leaflet";
// @ts-ignore
import leafletImage from "leaflet-image";

import type { FC } from "react";
import type { LatLngExpression } from "leaflet";

interface Markers extends MarkerProps {
  popup: string;
}

interface MapProps {
  location: LatLngExpression | undefined;
  markers: Markers[];
  zoom: number;
  zoomControl?: boolean;
  setBanner?: (key: string) => void;
}

const MapContainer: FC<MapProps> = ({
  location,
  markers,
  zoom,
  setBanner,
  zoomControl = false,
}) => {
  const [curmap, setcurmap] = useState<any>();

  useEffect(() => {
    if (setBanner && curmap) {
      leafletImage(curmap, function (err: any, canvas: any) {
        setBanner(canvas.toDataURL());
      });
    }
  }, [curmap, setBanner]);

  return (
    <Map center={location} zoom={zoom} zoomControl={zoomControl}>
      <LeafletConsumer>
        {({ map }) => {
          setBanner && setcurmap(map);

          return (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {markers.map(({ position, popup }, index) => (
                <Marker position={position} key={index}>
                  <Popup>{popup}</Popup>
                </Marker>
              ))}
            </>
          );
        }}
      </LeafletConsumer>
    </Map>
  );
};

export default MapContainer;
