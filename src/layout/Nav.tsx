import { TbTemperatureCelsius, TbTemperatureFahrenheit } from 'react-icons/tb';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useState, useCallback, useEffect } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';

const Nav = () => {
	const [city, setCity] = useState('');
	const [toggle, setToggle] = useState(true);
	const [temp, setTemp] = useState('f');
	const [data, setData] = useState('f');


	const handleSearch = useCallback(
		debounce((value: string) => {
			setCity(value);
		}, 3000),
		[]
	);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleSearch(event.target.value);
	};

	return (
		<nav className='bg-transparent w-full absolute top-0 z-10 flex justify-between py-4 px-4 gap-2'>
			<label htmlFor='search' className='relative block'>
				<HiOutlineMagnifyingGlass className='pointer-events-none absolute top-3 left-2' size={22} strokeWidth={'2'} />
				<input
					type='text'
					className='h-12 w-full focus:outline-none text-lg px-9 placeholder-black bg-transparent border-black border-b-2'
					placeholder='Search'
					name='search'
					onChange={handleChange}
				/>
			</label>
			<div className='w-32 flex justify-between px-3 h-full'>
				<button
					className={`rounded-full w-10 h-10 ${!toggle ? 'bg-btnBlack' : 'bg-white'} flex items-center px-2`}
					onClick={() => {
						setToggle(false);
						setTemp('c');
					}}
				>
					<TbTemperatureCelsius size={25} strokeWidth={'2.5'} color={!toggle ? 'white' : 'black'} />
				</button>
				<button
					className={`rounded-full w-10 h-10 ${toggle ? 'bg-btnBlack' : 'bg-white'} flex items-center px-2`}
					onClick={() => {
						setToggle(true);
						setTemp('f');
					}}
				>
					<TbTemperatureFahrenheit size={25} strokeWidth={'2.5'} color={toggle ? 'white' : 'black'} />
				</button>
			</div>
		</nav>
	);
};

export default Nav;
