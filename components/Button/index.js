import dynamic from "next/dynamic";

const Button = dynamic(() => import('./button'), {
    ssr: false
})

export default Button;