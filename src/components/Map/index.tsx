import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet";

const customIcon = new Icon({
  iconUrl: '/imgs/home-marker.png',
  iconSize: [42, 42]

})

export default function Map() {
  return (
    <div className='[&>.leaflet-container]:h-[30rem] w-[100%] relative rounded-lg overflow-hidden'>
      <MapContainer center={[51.505, -0.09]} zoom={18} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"></TileLayer>
        <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer >
    </div>
  )
}
