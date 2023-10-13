import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/utils/motion.js';

type TypingTextProps = {
  title: string;
  textStyles?: string;
};

type TitleTextProps = {
  title: string | JSX.Element;
  textStyles?: string;
};

export function TypingText({ title, textStyles }: TypingTextProps) {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, i) => (
        <motion.span variants={textVariant2} key={i}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  );
}

export const TitleText = ({ title, textStyles }: TitleTextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[30px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
