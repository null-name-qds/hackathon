import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import { sanitizePrice, calcYears} from "../../util";
import { useRouter } from "next/router";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import Image from "next/image";
import { BsHouseFill } from "react-icons/bs";
import styled from 'styled-components'
import { Typography } from "../Typography/Typography";
import { Spacer } from "../Spacer/Spacer";
import { motion } from 'framer-motion'

export default function Map({ results }) {
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
    const router = useRouter();
    const query = router.query;
    const salary = query.salary;
    const tombstoneStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        marginTop: "1em",
    }

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
          attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWNhZmlrIiwiYSI6ImNsY25qdnIycjAwbWczc280d3BvanJxNGkifQ.vOyv9_zxKXD4jNcdu6qfgQ`}        />
          {results && results.length !== 0  ? results.map((result) => (
              <Marker
                  key={result.Id}
                  icon={sanitizePrice(result.Property.Price) >= 600000 ? expensiveHouse : houseIcon}
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
                    text={`$${salary ?? 40000}/year`}
                    textAlign="right"
                  />
                  <Spacer size='20' />
                      <Link href={`https://realtor.ca${result.RelativeURLEn}`} target="_blank"> <Typography text={"View Listing"} textAlign="right" /> </Link>
                      <Spacer size='20' />
                  <Typography
                    text="It would take you"
                    textAlign="right"
                    weight="600"
                    size="1.5rem"
                    color="black"
                  />
                      {(calcYears(sanitizePrice(result.Property.Price), salary ?? 40000) <= 80 ? (<Typography
                          text={`${calcYears(sanitizePrice(result.Property.Price), salary ?? 40000)} YEARS`}
                          textAlign="right"
                          weight="600"
                          size="1.5rem"
                      />) : (<div style={tombstoneStyle}><Image src="/tombstoneghost.svg" alt="tombstone" width={100} height={100} /> </div>))}

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
                    text="You've selected"
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
                    text="Based on your income"
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
                    size="1.45rem"
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