import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import style from "../../styles/Home.module.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import {BsHouseFill} from "react-icons/bs";
import styled from 'styled-components'
import { Typography } from "../Typography/Typography";
import { Spacer } from "../Spacer/Spacer";
import {motion} from 'framer-motion'

const NewPop = styled(Popup)`
  border-radius: 0;

  .leaflet-popup-content-wrapper {
    box-shadow: 8px 8px 0px #7E6DE7;
    border-radius: 7.5px;
    background-color: #ffffff;
    min-width: 150px;
    min-height: 150px;
    border: solid 1px #7E6DE7;
    margin: 0;
    padding: 2em;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }

  .leaflet-popup-content{
    margin-right: 3em;
  }

  a.leaflet-popup-close-button{
    background-color: #7E6DE7;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    margin: 0.5em 0.5em 0.7em 5em;
    text-align: center;
    color: #ffffff;
  }

  .leaflet-popup-content p {
    margin:0;
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
                  <Typography 
                    text="How long will it take you to afford this house?"
                    textAlign="right"
                    weight="600"
                  />
                  <Spacer size='20' />
                  <Typography 
                    text="You've selected:"
                    textAlign="right"
                    color="black"
                    weight="600"
                    lineHeight="0"
                  />
                  <Typography
                    text={result.Property.Address.AddressText}
                    textAlign="right"
                    lineHeight="0"
                  />
                  <Typography 
                    text={result.Property.Price}
                    textAlign="right"
                    lineHeight="0"
                  />
                  <Spacer size='20' />
                  <Typography
                    text="Based on your income:"
                    textAlign="right"
                    weight="600"
                    color="black"
                  />
                  <Typography
                    text="$4,214/month"
                    textAlign="right"
                  />
                  <Spacer size='20' />
                  <Typography
                    text="It would take you"
                    textAlign="right"
                    weight="600"
                    size="1.5rem"
                    color="black"
                  />
                  <Typography
                    text="75 YEARS"
                    textAlign="right"
                    weight="600"
                    size="1.5rem"
                  />
                  </NewPop>
              </Marker>
          )) : 
          
          (
            <Marker position={[49.2577302,-123.1589232]}>
              <NewPop>
                  <Typography 
                    text="How long will it take you to afford this house?"
                    textAlign="right"
                    weight="600"
                  />
                  <Spacer size='20' />
                  <Typography 
                    text="You've selected:"
                    textAlign="right"
                    color="black"
                    weight="600"
                    lineHeight="0"
                  />
                  <Typography
                    text="123 Fake Street"
                    textAlign="right"
                    lineHeight="0"
                  />
                  <Typography 
                    text="$6,543,210"
                    textAlign="right"
                    lineHeight="0"
                  />
                  <Spacer size='20' />
                  <Typography
                    text="Based on your income:"
                    textAlign="right"
                    weight="600"
                    color="black"
                  />
                  <Typography
                    text="$4,214/month"
                    textAlign="right"
                  />
                  <Spacer size='20' />
                  <Typography
                    text="It would take you"
                    textAlign="right"
                    weight="600"
                    size="1.5rem"
                    color="black"
                  />
                  <Typography
                    text="75 YEARS"
                    textAlign="right"
                    weight="600"
                    size="1.5rem"
                  />
              </NewPop>

          </Marker>
          )}
      </MapContainer>
    </>
  );
}