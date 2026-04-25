import { anim, program } from "@/data/data";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function Program() {
  return (
    <div className="FontArmDecorativeU p-7">
      <motion.h3 {...anim} className=" relative text-[32px] mb-45">
        ժԱՄԱՆԱԿԱՑՈՒՅՑ
        <p className=" absolute -z-1 text-5xl top-3 left-1/2 -translate-x-1/2 text-[#5800001A]">
          ժԱՄԱՆԱԿԱՑՈՒՅՑ
        </p>
      </motion.h3>
      <div className="relative flex flex-col gap-30  max-[455px]:gap-25  max-[440px]:gap-22 max-[430px]:gap-20 max-[425px]:gap-17 max-[415px]:gap-16 max-[405px]:gap-13  max-[395px]:gap-11   max-[385px]:gap-8  max-[375px]:gap-6 max-[365px]:gap-3 max-[355px]:gap-0">
        {program.map((el: any, i: number) => {
          return (
            <Link
              href={`${el.address ? `https://www.google.com/maps/search/${el.address}` : "#"}`}
              key={i}
              className={`${i % 2 == 0 ? " self-end" : "self-start"} ${i == 2 ? "mt-55 max-[455px]:mt-50  " : ""}  ${i == 3 ? "mt-10   max-[445px]:mt-28  max-[405px]:mt-28 max-[385px]:mt-25" : ""}`}
            >
              <motion.p {...anim} className="w-max text-3xl relative">
                {el.title}
                <span
                  className={`${i % 2 == 0 ? " right-0" : "left-0"} absolute -z-1 text-[80px] -top-5   text-[#5800001A]`}
                >
                  {el.time}
                </span>
              </motion.p>
              <motion.h3
                {...anim}
                className={`${i % 2 == 0 ? "flex-row-reverse " : " "} flex justify-start gap-2 items-center text-[28px]`}
              >
                <span>{el.time}</span>
                <Image
                  src="/icon3.png"
                  alt="icon1"
                  width={500}
                  height={500}
                  className=" w-5 h-5 object-cover"
                />
              </motion.h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
