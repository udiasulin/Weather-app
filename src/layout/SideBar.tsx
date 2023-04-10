const SideBar = () => {
    return (
        <aside className="h-screen bg-white flex flex-col items-center justify-evenly px-8 gap-2
        lg:w-1/3">
            <img src="./assests/icons/snowy-1-day.svg" alt="" className="w-screen h-56 mt-24 object-contain"/>
            <div className="w-full flex flex-col justify-center gap-2 border-b-2 p-2">
                <h1 className="text-7xl">12&deg;c</h1>
                <div className="flex flex-row gap-2 items-center">
                    <h2 className="text-2xl 2xl:text-4xl">Monday,</h2>
                    <h3 className="text-2xl 2xl:text-3xl text-subText">16:00</h3>
                </div>
            </div>
            <div className="flex flex-col w-full justify-between justify-items-start">
                <div className="flex flex-row items-center">
                    <img src="./assests/icons/cloudy.svg" alt="" className="w-14"/>
                    <p className="text-xl font-semibold">Mostly cloudy</p>
                </div>
                <div className="flex flex-row items-center">
                    <img src="./assests/icons/rainy-3.svg" alt="" className="w-14"/>
                    <p className="text-xl font-semibold">Rain - 30%</p>
                </div>
            </div>
            {/* <div className="bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80')] 
            w-full h-20 rounded-3xl drop-shadow-xl flex items-center justify-center bg-cover g-origin-border m-5">
                <h1 className="text-4xl text-white">New york</h1>
            </div> */}
        </aside>
    )
}

export default SideBar