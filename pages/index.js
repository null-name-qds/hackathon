import Head from 'next/head'
import Map from '../components/Map'
import { useRouter } from 'next/router'
import axios from 'axios';
import Sidebar from '../components/Sidebar/Sidebar'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import styled from "styled-components";
import BottomSlider from '../components/BottomSlider/BottomSlider';

const SideBarCont = styled(motion.Sidebar)`
`

export default function Home({ data }) {
  const router = useRouter();
  const submitHandler = async (min, max, bed, bath, type) => {
    await router.push({
      pathname: '/',
      query: { min, max, bed, bath, type },
    })
  }

  return (
    <>
      <Head>
        <title>RainCheck</title>
        <meta name="RainCheck" content="RainCheck is a fun and interactive web app that provide insights on the Vancouver housing market and lets you know how long it would take you to afford one.
                Created as a BCIT QDS Hackathon project by Team Null Name."/>
        <link rel="icon" href="/raincheckicon.svg" />
      </Head>
      <div className='flex flex-row justify-between'>
        {/* {sidebar && <Sidebar onExit={() => { setSideBar(false) }} onSubmit={submitHandler} />} */}
        <Sidebar onSubmit={submitHandler} />
        <Map results={data} />

      </div>
      <BottomSlider />
    </>
  )
}

export async function getServerSideProps(ctx) {
  const { min, max, bed, bath, type } = ctx.query;
  let url = "http://localhost:3000/api/price";
  if (process.env.VERCEL_URL) {
    url = `https://${process.env.VERCEL_URL}/api/price`;
  }
  const { data } = await axios({
    method: 'get',
    url: url,
    params: {
      'min': min,
      'max': max,
      'bed': bed,
      'bath': bath,
      'type': type,
    }
  })
  return {
    props: {
      data: data
    }
  }
}
