import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet";
import { useDarkModeContext } from "@/context/DarkModeContext";
import { appConfig } from "@/config";

const { MAP_API_KEY } = appConfig

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
  const tileLayerUrl = !isDarkMode ? `https://api.maptiler.com/maps/bright-v2/{z}/{x}/{y}.png?key=${MAP_API_KEY}` : `https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/{z}/{x}/{y}.png?key=${MAP_API_KEY}`;

  return (
    <div className='[&>.leaflet-container]:h-[30rem] w-[100%] relative rounded-lg overflow-hidden z-30 col-span-1 thin:max-sm:col-span-2'>
      <MapContainer center={[51.505, -0.09]} zoom={18} scrollWheelZoom={true} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
          url={tileLayerUrl}
        // accessToken={MAP_API_KEY}
        />
        <Marker position={[51.505, -0.09]} icon={isDarkMode ? customDarkIcon : customLightIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer >
    </div >
  )
}

// export default function Map() {
//   const mapTilerApiKey = 'IigiqXGj105kiRYHhgiW';
//   const mapTilerUrl = `https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=${mapTilerApiKey}`;

//   return (
//     <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
//         url={mapTilerUrl}
//       />
//       <Marker position={[51.505, -0.09]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

