import Head from 'next/head'
import LandingPage from '../components/LandingPage'

export default function Landing() {
    return (
        <>
            <Head>
                <title>RainCheck</title>
                <meta name="RainCheck" content="RainCheck is a fun and interactive web app that provide insights on the Vancouver housing market and lets you know how long it would take you to afford one.
                Created as a BCIT QDS Hackathon project by Team Null Name." />
                <link rel="icon" href="/raincheckicon.svg" />
            </Head>
            <LandingPage />
        </>
    )
}
