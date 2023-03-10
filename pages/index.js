import Head from 'next/head'
import Map from '../components/Map'
import { useRouter } from 'next/router'
import axios from 'axios';
import Sidebar from '../components/Sidebar/Sidebar'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import styled from "styled-components";
import BottomSlider from '../components/BottomSlider/BottomSlider';


export default function Home({ data }) {
  const router = useRouter();
  const submitHandler = async (min, max, bed, bath, type, salary) => {
    await router.push({
      pathname: '/',
      query: { min, max, bed, bath, type, salary },
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
        <Sidebar onSubmit={submitHandler} />
        <Map results={data} />
      </div>
      <BottomSlider />
    </>
  )
}

export async function getServerSideProps(ctx) {
    const { min, max, bed, bath, type, salary } = ctx.query;
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
            'salary': salary,
        }
    })
    return {
        props: {
            data: data
        }
  }
}
