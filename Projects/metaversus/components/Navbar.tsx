'use client';
import { navVariants } from '@/utils/motion.js';
import styles from '@/styles';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true}}
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01 -z-10" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image
          src="/search.svg"
          alt="search"
          width={24}
          height={24}
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          METAVERSUS
        </h2>
        <Image
          src="/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="w-[24px] h-[24px] object-contain cursor-pointer"
        />
      </div>
    </motion.nav>
  );
}
