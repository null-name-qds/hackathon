import SelectInput from '../SelectInput/input'
import styled from "styled-components";
import Input from '../Input/Input';
import { Typography } from '../Typography/Typography';
import DarkButton from '../DarkButton';
import { Spacer } from '../Spacer/Spacer';
import { useState } from 'react';
import BigInput from "../BigInput/BigInput";
import Radio from "../Radio/Button";
import { motion, AnimatePresence } from "framer-motion"
const CostDiv = styled.div`
display:flex;
align-items:center;
`

export default function Sidebar({
    onSubmit,
    onExit = () => { },
}) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000000);
    const [bed, setBed] = useState("0-0");
    const [bath, setBath] = useState("0-0");
    const [type, setType] = useState(0);


    return (
        <>
            <AnimatePresence>
                <motion.div className='h-[95vh] bg-[#F3F3FE] max-w-prose px-6 py-2 flex flex-col gap-8 fixed z-[501] mt-5 ml-5 justify-around'
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
                    <div className="flex justify-between">
                        <Spacer axis={"horizontal"} />
                        {/* <Button btnText={"Filters"} icon="/filters.svg" width={"50%"} /> */}
                        <img src="/exit.svg" className="cursor-pointer mt-1" onClick={onExit} />
                    </div>
                    <div className="flex gap-40">
                        <div className="flex flex-col">
                            <label><Typography text='bedrooms' /></label>
                            <SelectInput values={["1", "2", "3"]} onChange={(e) => { setBed(`${e.target.value}-0`) }} />
                        </div>
                        <div className="flex flex-col">
                            <label><Typography text='bathrooms' /></label>
                            <SelectInput values={["1", "2", "3"]} onChange={(e) => { setBath(`${e.target.value}-0`) }} />
                        </div>
                    </div>

                    <div>
                        <label><Typography text='cost range' color="#7E6DE7" /></label>
                        <CostDiv>
                            <Input value={min} type={"number"} onChange={(e) => { setMin(e.target.value) }} />
                            <Spacer axis='horizontal' size={30} />
                            <Typography text='to' color="#7E6DE7" />
                            <Spacer axis='horizontal' size={30} />
                            <Input value={max} type={"number"} onChange={(e) => { setMax(e.target.value) }} />
                        </CostDiv>
                    </div>

                    <div>
                        <label><Typography text='building type' color="#7E6DE7" /></label>
                        <div className="flex gap-5">
                            <Radio name="house" img="/house.svg" bx={type === 1} transform={type === 1} onClick={() => setType(1)} />
                            <Radio name="condo" img="/apartment.svg" onClick={() => setType(17)} />
                            <Radio name="townhouse" img="/townhouse.svg" onClick={() => setType(16)} />
                            <Radio name="duplex" img="/duplex.svg" onClick={() => setType(2)} />
                        </div>
                    </div>

                    <div className="flex flex-col justify-self-center gap-5 align-center">
                        <Typography text='Want to know how long it will take to afford each property? Enter your salary to see!' color="#7E6DE7" />
                        <BigInput />
                        <Spacer axis='vertical' size={0} />
                        <DarkButton btnText="Filter" onClick={() => onSubmit(min, max, bed, bath, type)} />
                    </div >

                </motion.div >
            </AnimatePresence >

        </>
    )
}