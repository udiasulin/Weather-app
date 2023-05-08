import axios from 'axios';

const fetchForcast = async () => {
			const cityCodd = await axios
				.get(
					`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09fOMmcAE2M7UO0UMLNPXzd4VP6EMr8UBm&q=${city}`
				)
				.then((res) => res.data[0].Key);
			const getForcast = await axios
				.get(
					`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCodd}?apikey=fOMmcAE2M7UO0UMLNPXzd4VP6EMr8UBm`
				)
				.then((res) => res.data.DailyForecasts);
			// Here we can use our transaction data
			console.log(getForcast);		
 };


	// `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09fOMmcAE2M7UO0UMLNPXzd4VP6EMr8UBm&q=${city}`
	// `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=fOMmcAE2M7UO0UMLNPXzd4VP6EMr8UBm`;
	// useEffect(() => {
	// 	const fetchForcast = async () => {
	// 		const cityCodd = await axios
	// 			.get(
	// 				`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09fOMmcAE2M7UO0UMLNPXzd4VP6EMr8UBm&q=${city}`
	// 			)
	// 			.then((res) => res.data[0].Key);
	// 		const getForcast = await axios
	// 			.get(
	// 				`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCodd}?apikey=fOMmcAE2M7UO0UMLNPXzd4VP6EMr8UBm`
	// 			)
	// 			.then((res) => res.data);
	// 		// Here we can use our transaction data
	// 		console.log(getForcast);
	// 	};

	// 	if (city) {
	// 		fetchForcast();
	// 	}
	// }, [city]);