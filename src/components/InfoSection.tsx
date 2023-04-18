import InfoCard from './InfoCard';
import sunRise from '../../public/assests/icons/sunrise.svg';
import sunSet from '../../public/assests/icons/sunset.svg';

const imgArray = [sunRise, sunSet];

const Info = () => {
	return (
		<section
			className='h-full bg-bgGray grid grid-cols-2 gap-4 p-6
        sm:grid-cols-3  lg:h-4/6 lg:place-items-center 2xl:h-3/4 xl3:h-4/6'
		>
			<InfoCard
				header={'UV Index'}
				subHeader={'Normal'}
				gauge={{ levels: 3, colors: ['#ffbf5e'], width: 0.2, formatTextValue: () => '2' }}
			/>
			<InfoCard
				header={'Wind Status'}
				subHeader={'WSW'}
				gauge={{ levels: 3, colors: ['#f3f3f3'], width: 0.2, formatTextValue: () => '2Kmh' }}
			/>
			<InfoCard
				number={'6:40am'}
				SecondNumber={'8:40pm'}
				header={'Sunrise & Sunset'}
				subHeader={'Normal'}
				icon={imgArray}
			/>
			<InfoCard
				header={'Humidity'}
				subHeader={'Normal'}
				gauge={{ levels: 3, colors: ['#4050d1'], width: 0.2, formatTextValue: () => '2%' }}
			/>
			<InfoCard number={'5.2 km'} header={'Visibility'} subHeader={'Normal'} />
			<InfoCard number={'105'} header={'Air Quality'} subHeader={'Unhealthy'} />
		</section>
	);
};
export default Info;
