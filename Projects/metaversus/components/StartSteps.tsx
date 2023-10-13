import styles from '../styles';

type Props = {
  number: number;
  text: string;
};

export default function StartSteps({ number, text }: Props) {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#31426A]`}
      >
        <p className="font-bold text-[20px] text-white">{number}</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
        {text}
      </p>
    </div>
  );
}