'use client';

import styles from '@/styles';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, bouncing } from '@/utils/motion.js';
import { TypingText } from '@/components/CustomTexts';

export default function About() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <div className="gradient-03 z-0" />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col relative`}
      >
        <TypingText title="| About Metaversus" textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white relative"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it&apos;s really real, you can feel what you feel in this
          metaverse world, because this is really the{' '}
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{' '}
          of today, using only{' '}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let`&apos;s{' '}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down
        </motion.p>

        <a href="#explore" className="block cursor-pointer">
          <motion.img
            variants={bouncing('tween', 0.3, 1)}
            initial="hidden"
            whileInView="show"
            transition={{
              y: {
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeOut',
              },
              delay: 0.3,
            }}
            animate={{
              y: ['0px', '0px', '0px', '10px', '0px', '10px', '0px', '0px'],
            }}
            src="/arrow-down.svg"
            alt="arrow down"
            className="w-[18px] h-[28px] object-contain mt-[28px]"
          />
        </a>
      </motion.div>
    </section>
  );
}
