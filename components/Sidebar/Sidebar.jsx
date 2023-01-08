import Image from "next/image";
import Chart from "../Chart/Chart";
import {Typography} from "../Typography/Typography";

export default function Sidebar() {
    return (
        <>
            <div className='h-screen bg-[#F3F3FE] px-4 py-2 flex flex-row'>
                {/* <div className="flex"> */}
                    <Chart />
                {/* </div> */}
                {/* <div className="flex">
                    <Image src={'./filter-icon.svg'} width={40} height={40} />
                </div> */}
            <div className='h-screen max-w-[300px]'>
                <Typography text = 'hey'/>
                <Chart />
            </div>
        </>
    )
}