const SideBar = () => {
    return (
        <aside className="h-full w-1/4 bg-white flex flex-col items-center justify-evenly px-8 pt-16">
            <img src="./assests/icons/snowy-1-day.svg" alt="" className="w-full h-72  object-contain" />
            <div className="w-full flex flex-col justify-center gap-2 border-b-2 py-5">
                <h1 className="text-9xl">12&deg;c</h1>
                <div className="flex flex-row gap-2 items-center">
                    <h2 className="text-4xl">Monday,</h2>
                    <h3 className="text-3xl text-subText">16:00</h3>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <span className="flex flex-row items-center">
                    <img src="./assests/icons/cloudy.svg" alt="" className="w-14" />
                    <p className="text-xl font-semibold">Mostly cloudy</p>
                </span>
                <span className="flex flex-row items-center">
                    <img src="./assests/icons/rainy-3.svg" alt="" className="w-16" />
                    <p className="text-xl font-semibold">Rain - 30%</p>
                </span>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80')] 
            w-full h-44 rounded-3xl drop-shadow-xl bg-cover flex items-center justify-center">
                <h1 className="text-5xl text-white">New york</h1>
            </div>
        </aside>
    )
}

export default SideBar