import dynamic from "next/dynamic";

const Input = dynamic(() => import('./Input'), {
    ssr: false
})

export default Input;