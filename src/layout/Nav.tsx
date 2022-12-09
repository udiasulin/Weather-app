import { TbTemperatureCelsius, TbTemperatureFahrenheit } from 'react-icons/tb'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'

const Nav = () => {
    return (
        <nav className="bg-transparent w-full h-20 absolute top-0 z-50 flex justify-between py-6 px-8">
            <label htmlFor="search" className="relative block">
                <HiOutlineMagnifyingGlass className="pointer-events-none absolute top-3 left-4" size={22} strokeWidth={'2'}/>
                <input type="text" className="h-12 focus:outline-none text-lg px-12 placeholder-black bg-transparent border-b-2 border-black"
                    placeholder="Search for places..." name='search' />
            </label>
            <div className="w-32 flex justify-between px-3 h-full">
                <button className="rounded-full w-10 h-10 p-1 bg-btnBlack flex items-center px-2">
                    <TbTemperatureCelsius size={25} strokeWidth={'2.5'} color={'white'}/>
                </button>
                <button className="rounded-full w-10 h-10 p-1 bg-white flex items-center px-2">
                    <TbTemperatureFahrenheit size={25} strokeWidth={'2.5'}/>
                </button>
            </div>
        </nav>
    )
}


export default Nav