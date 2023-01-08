import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import style from "../../styles/Home.module.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import {BsHouseFill} from "react-icons/bs";
import styled from 'styled-components'

const NewPop = styled(Popup)`
  border-radius: 0;
  .leaflet-popup-content-wrapper {
    box-shadow: 8px 8px 0px #7E6DE7;
    border-radius: 7.5px;
    background-color: #ffffff;
    width: 150px;
    height: 150px;
    border: solid 1px #7E6DE7;
  }
  
  .leaflet-popup-tip-container {
    visibility: hidden;
  }

  .leaflet-popup-close-button > span {
    background-color: #7E6DE7;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    line-height: 12px;
    padding-left: 4px;
    padding-right: 4px;
    text-align: center;
    display: inline-block;
  }
`

export default function Map({ 
  results
}) {
  const purpleOption = { color: "purple" };
  const redOption = { color: "red" };
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
                  position={[result.Property.Address.Latitude, result.Property.Address.Longitude]}
                  eventHandlers={{
                    click: () => {
                      console.log(result.Id)
                    }
                  }}
              >
                  <NewPop>
                      {result.Property.Address.AddressText} <br/>
                      {result.Property.Price}
                  </NewPop>
              </Marker>
          )) : (<Marker position={[49.2577302,-123.1589232]}>
              <NewPop>
                  A pretty CSS3 popup. <br /> Easily customizable.
              </NewPop>
          </Marker>)}
      </MapContainer>
    </>
  );
}