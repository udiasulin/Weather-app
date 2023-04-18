import Gauge from './Gauge';
import { GaugeProps } from './Gauge';

type InfoCardProps = {
	header: string;
	number?: string;
	SecondNumber?: string;
	subHeader?: string;
	gauge?: GaugeProps;
	icon?: string[];
};

const InfoCard: React.FC<InfoCardProps> = ({ header, number, SecondNumber, subHeader, gauge, icon }) => {
	return (
		<div
			className='flex flex-col justify-evenly bg-white rounded-3xl items-center p-4
        h-[14rem] sm:h-full sm:w-full 2xl:h-[20rem] xl3:h-full xl3:w-[24rem]'
		>
			<h1 className='text-2xl text-subText'>{header}</h1>
			{SecondNumber ? (
				<>
					<span className='flex items-center justify-between w-44'>
						{icon ? <img src={icon[0]} alt='' className='w-14 h-14' /> : null}
						<h2 className='text-3xl'>{number}</h2>
					</span>
					<span className='flex items-center justify-between w-44'>
						{icon ? <img src={icon[1]} alt='' className='w-14 h-14' /> : null}
						<h2 className='text-3xl'>{SecondNumber}</h2>
					</span>
				</>
			) : (
				<h2 className='text-3xl'>{number}</h2>
			)}
			{gauge ? <Gauge {...gauge} /> : null}
			<h3 className='text-2xl font-semibold'>{subHeader}</h3>
		</div>
	);
};

export default InfoCard;
