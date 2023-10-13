'use client';

import styles from '@/styles';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion.js';
import { TitleText, TypingText } from '@/components/CustomTexts';
import { newFeatures } from '@/constants';
import Image from 'next/image';
import NewFeatures from '@/components/NewFeatures';

export default function WhatIsNew() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title="| Whats New?" />
          <TitleText title="What's new about Metaversus?" />
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            className="mt-[48px] flex flex-wrap justify-between gap-[24px]"
          >
            {newFeatures.map((feature, i) => (
              <motion.div
                variants={fadeIn('up', 'tween', 0.2, 1)}
                key={feature.title}
                initial="hidden"
                whileInView="show"
              >
                <NewFeatures {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          variants={planetVariants('right')}
          initial="hidden"
          whileInView="show"
          className="flex-1 flex justify-center items-center"
        >
          <Image
            width={500}
            height={600}
            src="/whats-new.png"
            alt="planet"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
