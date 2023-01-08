import styled from 'styled-components';
import { Typography } from '../Typography/Typography';
import { Spacer } from '../Spacer/Spacer';
import { useRouter } from 'next/router';
import { TypeAnimation } from 'react-type-animation';
import DarkButton from '../DarkButton'

const Background = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 100vw;
height: 100vh;
background-color: #F3F3FE;
`

const RainCheckLogo = styled.img`
display: flex;
height: 60px;
`
const LandingCont = styled.div`
width: 80%;
height: 60%;
padding-left: 4em;
z-index:10;`

const TitleFlex = styled.div`
display: flex;
flex-display: row;`

const LandingCTA = styled.button`
    background-color: #7E6DE7;
    padding: 1em 2em;
    border-radius:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    transition: 0.3s ease-in-out all;
    &hover:{
        background-color: #6659ba;
    }
`

const VancouverSpecialHouseOverlay = styled.img`
max-height: 800px;
min-height: 800px;
position: absolute;
right: 0;
opacity: 0.1;
z-index: 1;
`

export default function LandingPage() {

    const router = useRouter();

    return (
        <Background>
            <LandingCont>
                <TitleFlex>
                    <RainCheckLogo src='/raincheckicon.svg' />
                    <Typography
                        weight="800"
                        text="RainCheck"
                        size="40px"
                        color="#7E6DE7"
                        padding="10px" />
                </TitleFlex>
                <Spacer axis='vertical' size={50} />
                <div>
                    <span className="text-[#333] font-bold">VANCOUVER IS </span>
                    <TypeAnimation sequence={['expensive.', 1000, 'unaffordable.', 2000, 'a RainCheck.', 1000]} wrapper="div" repeat={Infinity} className="text-[#7E6DE7] font-bold text-2xl" />
                </div>
                <Spacer axis='vertical' size={50} />

                <Typography
                    display="inline"
                    weight="600"
                    size="16px"
                    color="black"
                    text="Whether you’re about to move to Vancouver, 
                are curious what’s available, or just want so see 
                if you can afford anywhere at all, RainCheck has got you covered, so you don't wonder."/>
                <Spacer axis='vertical' size={20} />

                <Typography
                    weight="600"
                    size="16px"
                    color="black"
                    text="Easily navigate currently available properties with our filters, or input your annual salary and see how many months it will take you to afford each listing." />
                <Spacer axis='vertical' size={50} />

                <LandingCTA onClick={() => router.push('/')}>
                    <Typography
                        text="Show me what's available!"
                        size="18px"
                        color="white"
                        weight="800" />
                </LandingCTA>
            </LandingCont>
            <VancouverSpecialHouseOverlay src='/vancouverspecial.svg' />
        </Background >
    )
}