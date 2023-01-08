import SelectInput from '../SelectInput/input'
import styled from "styled-components";
import Input from '../Input/Input';
import { Typography } from '../Typography/Typography';
import DarkButton from '../DarkButton';
import { Spacer } from '../Spacer/Spacer';
import { useState } from 'react';
import BigInput from "../BigInput/BigInput";
import Radio from "../Radio/Button";
import Button from '../Button/button';
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const CostDiv = styled.div`
display:flex;
align-items:center;
`

export default function Sidebar({
    onSubmit,
}) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000000);
    const [bed, setBed] = useState("0-0");
    const [bath, setBath] = useState("0-0");
    const [type, setType] = useState(0);
    const [sidebar, setSideBar] = useState(false);
    const [button, setToggle] = useState(true);
    const [salary, setSalary] = useState(40000);

    return (
        <>
            <AnimatePresence>
                {sidebar && <motion.div className='max-h-screen bg-[#F3F3FE] max-w-prose px-6 py-6 flex flex-col gap-8 fixed z-[501] mt-5 ml-5 justify-around rounded-xl'
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ ease: "easeInOut", duration: .4 }}>
                    <div className="flex justify-between">
                        <Spacer axis={"horizontal"} size={1} />
                        <Image
                            src={"./exit.svg"}
                            width={29}
                            height={29}
                            alt={"exit icon"}
                            className="cursor-pointer mt-1 rise-up"
                            onClick={() => { setSideBar(false); setToggle(true); }}
                        />
                    </div>
                    <Spacer axis={"vertical"} size={10} />
                    <div className="flex gap-40">
                        <div className="flex flex-col">
                            <label><Typography text='Bedrooms' /></label>
                            <SelectInput values={["1", "2", "3"]} onChange={(e) => { setBed(`${e.target.value}-0`) }} />
                        </div>
                        <div className="flex flex-col">
                            <label><Typography text='Bathrooms' /></label>
                            <SelectInput values={["1", "2", "3"]} onChange={(e) => { setBath(`${e.target.value}-0`) }} />
                        </div>
                    </div>

                    <div>
                        <label><Typography text='Cost Range' color="#7E6DE7" /></label>
                        <CostDiv>
                            <Input value={min} onChange={(e) => { setMin(e.target.value.replace(/\D/, '')) }} />
                            <Spacer axis='horizontal' size={30} />
                            <Typography text='to' color="#7E6DE7" />
                            <Spacer axis='horizontal' size={30} />
                            <Input value={max} onChange={(e) => { setMax(e.target.value.replace(/\D/, '')) }} />
                        </CostDiv>
                    </div>

                    <div>
                        <label><Typography text='Building Type' color="#7E6DE7" /></label>
                        <div className="flex gap-5">
                            <Radio name="house" img="/house.svg" onClick={() => setType(1)} />
                            <Radio name="condo" img="/apartment.svg" onClick={() => setType(17)} />
                            <Radio name="townhouse" img="/townhouse.svg" onClick={() => setType(16)} />
                            <Radio name="duplex" img="/duplex.svg" onClick={() => setType(2)} />
                        </div>
                    </div>

                    <div className="flex flex-col justify-self-center gap-5 align-center">
                        <Typography text='Want to know how long it will take to afford each property? Enter your salary to see!' color="#7E6DE7" />
                        <BigInput value={salary} onChange={(e) => { setSalary(e.target.value.replace(/\D/, '')) }} />
                        <Spacer axis='vertical' size={0} />
                        <DarkButton btnText="Filter" onClick={() => onSubmit(min, max, bed, bath, type)} />
                    </div >

                </motion.div >}
            </AnimatePresence >

            <Button bx={button} transform={button} btnText={"Filters"} icon="/filters.svg" position={"fixed"} top={"5%"} left={"3.5%"} onClick={() => { setSideBar(!sidebar); setToggle(!button); }} />

        </>
    )
}