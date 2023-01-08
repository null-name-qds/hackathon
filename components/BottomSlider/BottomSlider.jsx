import React, { use } from "react";
import Chart from "../Chart/Chart";
import { useRef, useState, useEffect } from "react";
import InfoGraph from "../Infograph/Infograph";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "../Typography/Typography";
import Image from "next/image";
import { AiOutlineBarChart, AiFillCloseCircle } from "react-icons/ai";
import { SquareBlockSet } from "../SquareBlockSet";

export default function BottomSlider() {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            exit={{ opacity: 0, y: 100 }}
            className="w-full bg-[#F3F3FE] py-4 fixed z-[999] h-screen flex flex-col justify-center items-center bottom-0 gap-[5rem]"
          >
            <AiFillCloseCircle
              className="absolute top-0 right-0 my-4 mx-4 h-[30px] w-[30px] text-[#3923C2] cursor-pointer rise-up"
              onClick={toggleShow}
            />
            <div className="max-w-[800px] flex flex-col justify-center items-center gap-3">
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0, y: 100 }}
                delay={0.2}
              >
                <Image
                  src={"./vancouverspecial.svg"}
                  width={200}
                  height={200}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0, y: 100 }}
                delay={0.4}
              >
                <Typography
                  text="Have a look at Vancouver's current housing market"
                  size="2rem"
                  weight="bold"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0, y: 100 }}
                delay={0.6}
              >
                <Typography
                  text="Owning a home in Vancouver seems like a fever dream. Explore available properties and see how long it will take you to purchase a home based on your salary and the current market."
                  size="1.3rem"
                />
              </motion.div>
            </div>
            <div className="flex flex-row gap-7">
              <div className="flex flex-col gap-5">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    exit={{ opacity: 0, y: 100 }}
                    delay={0.8}
                >
                    <InfoGraph
                        header="$1.5 Million"
                        subhead="AVERAGE HOME COST"
                        icon={"/house.svg"}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    exit={{ opacity: 0, y: 100 }}
                    delay={1.4}
                >
                    <InfoGraph
                        header="$2.2k/MONTH"
                        subhead="AVERAGE RENT COST"
                        icon={"/apartment.svg"}
                    />
                </motion.div>
                </div>
              <motion.div className="flex"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0, y: 100 }}
                delay={1.6}
              >
                <SquareBlockSet />
              </motion.div>
            </div>
            <motion.div className="flex justify-center items-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0, y: 100 }}
                delay={2}
            >
              <Chart />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="bg-[#5f5fc5] p-4 bottom-0 absolute right-0 rounded-full z-[600] m-6 cursor-pointer rise-up">
        <AiOutlineBarChart
          onClick={toggleShow}
          className="text-white w-8 h-8"
        />
      </div>
    </>
  );
}
