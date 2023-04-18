type CardProps = {
    header: string,
    icon: string,
}


const Card: React.FC<CardProps> = ({ header, icon }) => {
    return (
        <div className="flex flex-col bg-white rounded-3xl items-center justify-evenly py-4 w-full gap-2
        sm:h-[9rem] sm:p-4 lg:h-4/6">
            <h1 className="text-xl font-semibold">{header}</h1>
            <img src={icon} alt={icon} className="w-[5rem]"/>
            <div className="flex items-center">
            <p className="text-xl font-semibold">12&deg;-</p>
            <p className="text-xl font-semibold text-subText">12&deg;</p>
            </div>
        </div>
    )
}

export default Card