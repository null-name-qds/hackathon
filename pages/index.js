import Head from 'next/head'
import Map from '../components/Map'
import { useRouter } from 'next/router'
import axios from 'axios';
import Sidebar from '../components/Sidebar/Sidebar'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { Spacer } from '../components/Spacer/Spacer'
import Button from '../components/Button';

export default function Home({ data }) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000000);
  const [bed, setBed] = useState("0-0");
  const [bath, setBath] = useState("0-0");
  const [type, setType] = useState(0);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className='flex flex-row justify-between'>
        <Sidebar />
        <Map results={data} />
        <Button btnText="See Overview" position={"fixed"} top={"10%"} right={"10%"} />
      </div>
    </>
  )
}

// export async function getServerSideProps(ctx) {
//     const { min, max, bed, bath, type } = ctx.query;
//     let url = "http://localhost:3000/api/price";
//     if (process.env.VERCEL_URL) {
//         url = `https://${process.env.VERCEL_URL}/api/price`;
//     }
//     const { data }= await axios({
//         method: 'get',
//         url: url,
//         params: {
//             'min': min,
//             'max': max,
//             'bed': bed,
//             'bath': bath,
//             'type': type,
//         }
//     })
//     return {
//         props: {
//             data: data
//         }
//     }
// }
