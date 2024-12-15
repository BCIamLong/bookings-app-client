import { MapContainer, Marker, TileLayer, Popup, Rectangle, Polygon, useMapEvents } from "react-leaflet";

import 'leaflet/dist/leaflet.css'
import { Icon, LatLngBoundsExpression, LatLngExpression, PopupEvent } from "leaflet";
import { useDarkModeContext } from "@/context/DarkModeContext";
import { appConfig } from "@/config";
import { useState } from "react";
import { Location } from "@/interfaces";


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

// interface Location {
//   type: string
//   coordinates: LatLngExpression
//   address: string
//   day: number
//   _id?: string
//   id?: string
// }

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

function LocationMarker({ duration, locations }: { duration?: number, locations: Location[] }) {
  // const [bounds, setBounds] = useState<LatLngBoundsExpression>([])
  // console.log(locations)
  const coordinates = locations?.map((loc) => [loc.coordinates[1], loc.coordinates[0]])
  // console.log(coordinates)
  const [bounds, setBounds] = useState<LatLngBoundsExpression>(coordinates as LatLngBoundsExpression)
  const map = useMapEvents({
    zoom() {
      if (!(bounds as unknown as number[]).length) return
      setBounds([])
    },
    // click(e) {
    //   setBounds(bounds1 as LatLngBoundsExpression)
    // },
    moveend(e) {
      if (!(bounds as unknown as number[])?.length) return
      // map.flyTo(e.latlng, map.getZoom())
      map.flyToBounds(bounds as LatLngBoundsExpression, { maxZoom: 8.5 })
    },

  })
  function openPopup(e: PopupEvent) {
    e.target.openPopup();
  }

  return (
    <>
      {locations.map((loc, ind) => {
        // console.log(loc)
        const { description } = loc || {}
        const curDay = loc?.day
        let nextDay;
        nextDay = locations[ind + 1]?.day - 1
        if (!locations[ind + 1]?.day && duration > curDay) nextDay = duration
        if (!locations[ind + 1]?.day && duration === curDay) nextDay = curDay

        const titleDay = curDay === nextDay ? `Day ${curDay}` : `Day ${curDay} - Day ${nextDay}`

        return <Marker eventHandlers={{ add: openPopup }} position={[loc.coordinates[1], loc.coordinates[0]] as LatLngExpression} icon={customLightIcon}>
          <Popup closeButton={false} autoClose={false} closeOnClick={false}>
            {/* Day {ind + 1}: {loc.address} */}
            <p className="text-center  font-semibold text-brand-700 text-xs">
              <span className="uppercase text-[0.7rem]">{titleDay}: </span>
              <span className="capitalize">{description}</span>
            </p>
          </Popup>
        </Marker >
      })
      }
    </>
  )

}



export default function ToursMap({ duration, locations }: { duration?: number, locations: Location[] }) {
  const { isDarkMode } = useDarkModeContext()!
  const tileLayerUrl = !isDarkMode ? `https://api.maptiler.com/maps/bright-v2/{z}/{x}/{y}.png?key=${MAP_API_KEY}` : `https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/{z}/{x}/{y}.png?key=${MAP_API_KEY}`;
  const coordinates = locations?.map((loc) => [loc.coordinates[1], loc.coordinates[0]])

  // function openPopup(e: PopupEvent) {
  //   e.target.openPopup();
  // }

  return (
    <div className='[&>.leaflet-container]:h-[30rem] w-[100%] relative rounded-lg overflow-hidden z-30 col-span-1 thin:max-sm:col-span-2'>
      <MapContainer center={coordinates[0] as unknown as LatLngExpression} zoom={8} scrollWheelZoom={true} style={{ height: '100vh', width: '100%' }}>
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
        <Polygon pathOptions={{ color: 'lime' }} positions={coordinates as LatLngExpression[]} />
        <LocationMarker locations={locations} duration={duration} />
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

