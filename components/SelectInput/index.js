import dynamic from "next/dynamic";

const SelectInput = dynamic(() => import('./Input'), {
    ssr: false
})

export default SelectInput;