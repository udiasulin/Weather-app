import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
	children: React.ReactNode;
}

interface IThemeContext {
	city: string;
	cityCode?: string;
	temp?: string;
	forcast?: Object[];
	loading?: boolean;
	err?: string;
	data?: Object[];
	getForcast?: () => void;
}

const defaultState = {
	city: '',
	cityCode: 'string',
	forcast: [],
	loading: false,
	err: '',
	data: [],
};

const ForcastContext = createContext<IThemeContext>(defaultState);

export const ForcastProvider: React.FC<Props> = ({ children }) => {
	const [city, setCity] = useState(defaultState.city);
	const [cityCode, setCityCode] = useState(defaultState.cityCode);
	const [loading, setLoading] = useState(defaultState.loading);
	const [err, setErr] = useState(defaultState.err);
	const [data, setData] = useState(defaultState.data);

	const getForcast = () => {
		console.log('context');
	};

	return (
		<ForcastContext.Provider
			value={{
				city,
				getForcast,
			}}
		>
			{children}
		</ForcastContext.Provider>
	);
};
