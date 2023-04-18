import GaugeChart from 'react-gauge-chart';

export type GaugeProps = {
	levels: number;
	colors: string[];
	width: number;
	formatTextValue: () => string;
};

const Gauge: React.FC<GaugeProps> = ({ levels, colors, width, formatTextValue }) => {
	return (
		<GaugeChart
			id='gauge-chart1'
			nrOfLevels={levels}
			colors={colors}
			arcWidth={width}
			arcPadding={0.02}
			cornerRadius={2}
			needleColor={'#1A1A1A'}
			needleBaseColor={'#1A1A1A'}
			textColor={'#1A1A1A'}
			percent={0.9}
			formatTextValue={formatTextValue}
		/>
	);
};

export default Gauge;
