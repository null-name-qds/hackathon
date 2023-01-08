import dynamic from "next/dynamic";

const InfoGraph = dynamic(() => import('./InfoGraph'), {
    ssr: false
})

export default InfoGraph;