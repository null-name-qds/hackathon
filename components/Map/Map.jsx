import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import { sanitizePrice} from "../../util";
import style from "../../styles/Home.module.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import {BsHouseFill} from "react-icons/bs";

export default function Map({ results }) {
  const houseIcon = L.icon({
      iconUrl: "/marker.svg",
      iconSize: [50, 50],
  })
    const expensiveHouse = L.icon({
        iconUrl: "/dollarMarker.svg",
        iconSize: [50, 50],
    })
  return (
    <>
      <MapContainer center={[49.2577302,-123.1589232]} zoom={13} scrollWheelZoom={true} className='w-full h-screen'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {results ? results.map((result) => (
              <Marker
                  key={result.Id}
                  icon={sanitizePrice(result.Property.Price) >= 600000 ? expensiveHouse : houseIcon}
                  position={[result.Property.Address.Latitude, result.Property.Address.Longitude]}
              >
                  <Popup>
                      {result.Property.Address.AddressText} <br/>
                      {result.Property.Price}
                  </Popup>
              </Marker>
          )) : (<Marker icon={houseIcon} position={[49.2577302,-123.1589232]}>
              <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
          </Marker>)}
      </MapContainer>
    </>
  );
}