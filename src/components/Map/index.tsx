import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet";
import { useDarkModeContext } from "@/context/DarkModeContext";

const customLightIcon = new Icon({
  // <a href="https://www.flaticon.com/free-icons/maps-and-location" title="maps and location icons">Maps and location icons created by juicy_fish - Flaticon</a>
  iconUrl: '/imgs/home-marker.png',
  iconSize: [42, 42]

})

const customDarkIcon = new Icon({
  //<a href="https://www.flaticon.com/free-icons/maps-and-location" title="maps and location icons">Maps and location icons created by Iconpro86 - Flaticon</a>
  iconUrl: '/imgs/home-marker-dark.png',
  iconSize: [42, 42]

})

export default function Map() {
  const { isDarkMode } = useDarkModeContext()!
  const tileLayerUrl = !isDarkMode ? 'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png' : 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';

  return (
    <div className='[&>.leaflet-container]:h-[30rem] w-[100%] relative rounded-lg overflow-hidden z-30 col-span-1 thin:max-sm:col-span-2'>
      <MapContainer center={[51.505, -0.09]} zoom={18} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={tileLayerUrl}></TileLayer>
        <Marker position={[51.505, -0.09]} icon={isDarkMode ? customDarkIcon : customLightIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer >
    </div>
  )
}
