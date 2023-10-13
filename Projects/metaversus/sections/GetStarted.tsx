'use client';

import styles from '@/styles';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion.js';
import { TitleText, TypingText } from '@/components/CustomTexts';
import { startingFeatures } from '@/constants';
import Image from 'next/image';
import StartSteps from '@/components/StartSteps';

export default function GetStarted() {
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
          variants={planetVariants('left')}
          initial="hidden"
          whileInView="show"
          className="flex-1 flex justify-center items-center"
        >
          <Image
            width={500}
            height={600}
            src="/get-started.png"
            alt="planet"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="flex-[0.75] max-w-[471px] flex-col justify-start"
        >
          <TypingText title="| How Metaverus Works" />
          <TitleText title="Get started with just a few clicks" />
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            className="mt-[24px] flex gap-[24px] flex-col"
          >
            {startingFeatures.map((feature, i) => (
              <motion.div
                variants={fadeIn('up', 'tween', 0.2, 1)}
                key={i + 1}
                initial="hidden"
                whileInView="show"
              >
                <StartSteps number={i + 1} text={feature} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
