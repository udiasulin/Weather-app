import { TbTemperatureCelsius, TbTemperatureFahrenheit } from 'react-icons/tb'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'

const Nav = () => {
    return (
        <nav className="bg-transparent w-full absolute top-0 z-10 flex justify-between py-4 px-4 gap-2">
            <label htmlFor="search" className="relative block">
                <HiOutlineMagnifyingGlass className="pointer-events-none absolute top-3 left-4" size={22} strokeWidth={'2'}/>
                <input type="text" className="h-12 w-full focus:outline-none text-lg px-12 placeholder-black bg-transparent"
                    placeholder="Search Country" name='search'/>
            </label>
            <div className="w-32 flex justify-between px-3 h-full">
                <button className="rounded-full w-10 h-10 bg-btnBlack flex items-center px-2">
                    <TbTemperatureCelsius size={25} strokeWidth={'2.5'} color={'white'}/>
                </button>
                <button className="rounded-full w-10 h-10 bg-white flex items-center px-2">
                    <TbTemperatureFahrenheit size={25} strokeWidth={'2.5'}/>
                </button>
            </div>
        </nav>
    )
}


export default Nav