import { Icon } from 'leaflet';
import { Dispatch, SetStateAction } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents, ZoomControl, useMap } from 'react-leaflet';
import './map.scss';

const mark = new Icon({ iconUrl: '/images/marker.svg', iconSize: [18, 30] });
type position = { lat: number; lng: number };
type setPosition = Dispatch<SetStateAction<position>>;

function LocationMarker({
  position,
  setPosition,
}: {
  position: position;
  setPosition: setPosition;
}) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : <Marker icon={mark} position={position} />;
}
function ChangeMapCenter({ center }: { center: position }) {
  const map = useMap();
  map.setView(center, 13);
  return null;
}

interface MapProps {
  center?: position;
  position: position;
  setPosition?: setPosition;
  draggable?: boolean;
}
const Map = ({ draggable, position, setPosition, center }: MapProps) => {
  return (
    <MapContainer
      center={center || position}
      dragging
      doubleClickZoom
      zoomControl={false}
      zoom={draggable ? 12 : 17}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.balad.ir/tiles/rendered/{z}/{x}/{y}.jpg?token=divarLBPfynHRGPJPG22GY2iskJNPHSQ&style=raster_divar"
      />
      {!draggable ? (
        <Marker icon={mark} position={center || position} />
      ) : (
        <LocationMarker position={position} setPosition={setPosition!} />
      )}
      <ZoomControl position="bottomleft" />
      {center && <ChangeMapCenter center={center} />}
    </MapContainer>
  );
};

export default Map;
