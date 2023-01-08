import Head from 'next/head'
import Map from '../components/Map'
import { useRouter } from 'next/router'
import axios from 'axios';
import Sidebar from '../components/Sidebar/Sidebar'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { Spacer } from '../components/Spacer/Spacer'
import Button from '../components/Button/button';
import InfoGraph from '../components/Infograph/Infograph';
import SelectInput from '../components/SelectInput/input'
import styled from "styled-components";
import Input from '../components/Input/Input';
import { Typography } from '../components/Typography/Typography';
import DarkButton from '../components/DarkButton';

const InfoGraphDivs = styled.div`
display:flex;
flex-direction:column;
gap:20px;
`
const CostDiv = styled.div`
display:flex;
align-items:center;
`

export default function Home({ data }) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000000);
    const [bedrooms, setBedrooms] = useState(1)
    // testing
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div className='flex flex-row justify-between'>
            </div>
            <Button header={"See Map"} onClick={() => { }} />
            <InfoGraphDivs>
                <InfoGraph header={"$1.5 MILLION"} subhead={"AVERAGE HOME COST"} icon={"/house.svg"} />
                <InfoGraph header={"$2.2K/MONTH"} subhead={"AVERAGE RENT COST"} icon={"/apartment.svg"} />
                <label><Typography text='bedrooms' /></label>
                <SelectInput values={[1, 2, 3]} onChange={(e) => { setBedrooms(1) }} />
            </InfoGraphDivs>

            <label><Typography text='cost range' color="#7E6DE7" /></label>
            <CostDiv>
                <Input value={min} type={"number"} onChange={(e) => { setMin(e.target.value) }} />
                <Spacer axis='horizontal' size={30} />
                <Typography text='to' color="#7E6DE7" />
                <Spacer axis='horizontal' size={30} />
                <Input value={max} type={"number"} onChange={(e) => { setMax(e.target.value) }} />
            </CostDiv>
            <DarkButton btnText={"Filter"} onClick={()=>{console.log('x')}}/>
        </>
    )
}

