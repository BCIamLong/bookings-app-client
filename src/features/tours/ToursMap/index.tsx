import { MapContainer, Marker, TileLayer, Popup, Rectangle, Polygon, useMapEvents } from "react-leaflet";

import 'leaflet/dist/leaflet.css'
import { Icon, LatLngBoundsExpression, LatLngExpression, PopupEvent } from "leaflet";
import { useDarkModeContext } from "@/context/DarkModeContext";
import { appConfig } from "@/config";
import { useState } from "react";

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

interface Location {
  type: string
  coordinates: LatLngExpression
  address: string
  day: number
  _id?: string
  id?: string
}

const bounds1 = [
  [16.068636, 108.118572],
  [16.077081, 108.143165],
  [16.042871, 108.147265],
  [16.082871, 108.147265],

]

const rectangle = [
  [16.068636, 108.118572],
  [16.077081, 108.143165],
  [16.042871, 108.147265],
  [16.082871, 108.147265],

]

function LocationMarker({ locations }: { locations: Location[] }) {
  // const [bounds, setBounds] = useState<LatLngBoundsExpression>([])
  const [bounds, setBounds] = useState<LatLngBoundsExpression>(bounds1 as LatLngBoundsExpression)
  const map = useMapEvents({
    // click(e) {
    //   setBounds(bounds1 as LatLngBoundsExpression)
    // },
    moveend(e) {
      if (!bounds) return
      // map.flyTo(e.latlng, map.getZoom())
      map.flyToBounds(bounds as LatLngBoundsExpression)
    },
  })
  function openPopup(e: PopupEvent) {
    e.target.openPopup();
  }

  return (
    <>
      {bounds.map((el, ind) => <Marker eventHandlers={{ add: openPopup }} position={el as LatLngExpression} icon={customLightIcon}>
        <Popup closeButton={false} autoClose={false} closeOnClick={false}>
          Day {ind + 1}: Content
        </Popup>
      </Marker>)}
    </>
  )

}



export default function ToursMap({ locations }: { locations: Location[] }) {
  const { isDarkMode } = useDarkModeContext()!
  const tileLayerUrl = !isDarkMode ? `https://api.maptiler.com/maps/bright-v2/{z}/{x}/{y}.png?key=${MAP_API_KEY}` : `https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/{z}/{x}/{y}.png?key=${MAP_API_KEY}`;
  const coordinates = locations.map(loc => loc.coordinates)

  // function openPopup(e: PopupEvent) {
  //   e.target.openPopup();
  // }

  return (
    <div className='[&>.leaflet-container]:h-[30rem] w-[100%] relative rounded-lg overflow-hidden z-30 col-span-1 thin:max-sm:col-span-2'>
      <MapContainer center={[16.082871, 108.147265]} zoom={20} scrollWheelZoom={true} style={{ height: '100vh', width: '100%' }}>
        {/* <MapContainer bounds={bounds as LatLngBoundsExpression} zoom={20} scrollWheelZoom={true} style={{ height: '100vh', width: '100%' }}> */}
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
          url={tileLayerUrl}
        // accessToken={MAP_API_KEY}
        />
        {/* {bounds.map(el => <Marker eventHandlers={{ add: openPopup }} position={el as LatLngExpression} icon={isDarkMode ? customDarkIcon : customLightIcon}>
          <Popup closeButton={false} autoClose={false} closeOnClick={false}>

            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>)} */}
        {/* <Rectangle bounds={rectangle as LatLngBoundsExpression} pathOptions={{ color: 'black' }} /> */}
        <Polygon pathOptions={{ color: 'lime' }} positions={rectangle as LatLngExpression[]} />
        <LocationMarker locations={locations} />
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

