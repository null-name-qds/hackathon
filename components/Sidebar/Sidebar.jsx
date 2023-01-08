import Button from '../Button';
import SelectInput from '../SelectInput'
import styled from "styled-components";
import Input from '../Input';
import { Typography } from '../Typography/Typography';
import DarkButton from '../DarkButton';
import { Spacer } from '../Spacer/Spacer';
import { useState } from 'react';
import BigInput from "../BigInput/BigInput";
import Radio from "../Radio/Button";

const CostDiv = styled.div`
display:flex;
align-items:center;
`

export default function Sidebar({ onSubmit }) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000000);
    const [bed, setBed] = useState("0-0");
    const [bath, setBath] = useState("0-0");
    const [type, setType] = useState(0);

    return (
        <>
            <div className='h-screen bg-[#F3F3FE] px-5 py-2 flex flex-col gap-8'>
                {/* <div className="flex"> */}
                {/* <Button btnText={"Filters"}/> */}
                <Spacer axis={"horizontal"} size={30} />
                <Typography text="Filter housing" weight="semibold" size="1.5rem" />

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
                        <Radio name="house" img="/house.svg" onClick={() => setType(1)} />
                        <Radio name="condo" img="/apartment.svg" onClick={() => setType(17)}/>
                        <Radio name="townhouse" img="/townhouse.svg" onClick={() => setType(16)} />
                        <Radio name="duplex" img="/duplex.svg" onClick={() => setType(2)} />
                    </div>
                </div>

                <div className="flex flex-col justify-self-center gap-5 align-center">
                    <Typography text='Want to know how long it will take to afford each property? Enter your salary to see!' color="#7E6DE7" />
                    <BigInput />
                    <Spacer axis='vertical' size={0} />
                    <DarkButton btnText="Filter" onClick={() => onSubmit(min, max, bed, bath, type)}/>
                </div>

            </div>
        </>
    )
}