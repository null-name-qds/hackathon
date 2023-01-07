import Chart from "../Chart/Chart";
import {Typography} from "../Typography/Typography";

export default function Sidebar() {
    return (
        <>
            <div className='h-screen max-w-[300px]'>
                <Typography text = 'hey'/>
                <Chart />
            </div>
        </>
    )
}