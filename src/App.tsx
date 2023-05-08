import Main from './layout/Main';
import Nav from './layout/Nav';
import SideBar from './layout/SideBar';
         import { ForcastProvider } from './contexts/forcastContext';

const App = () => {
	//const { dark, toggleDark } = React.useContext(ThemeContext);
	return (
		<>
			<div className='flex flex-col lg:flex-row'>
				<ForcastProvider>
					<Nav />
					<SideBar />
					<Main />
				</ForcastProvider>
			</div>
		</>
	);
};

export default App;
