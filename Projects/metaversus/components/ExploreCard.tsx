import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import styles from '@/styles';

type Props = {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: Dispatch<SetStateAction<string>>;
};

export default function ExploreCard({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}: Props) {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[155px] h-[700px] transition-[flex] duration-[0.7s] ease-in-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image
        width={3000}
        height={3000}
        src={imgUrl}
        loading='lazy'
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg]">
          {title}
        </h3>
      ) : (
        <motion.div
          transition={{
            opacity: {
              duration: 0.1,
              ease: 'easeOut',
            },
            delay: 0.2,
          }}
          animate={{
            opacity: [0, 1],
          }}
          className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]"
        >
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <Image
              width={60}
              height={60}
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Enter Metaverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </motion.div>
      )}
    </motion.div>
  );
}
