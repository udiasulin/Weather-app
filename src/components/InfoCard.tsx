type InfoCardProps = {
    header: string,
    number: string,
    subHeader?: string,
}

const InfoCard: React.FC<InfoCardProps> = ({ header, number, subHeader }) => {
    return (
        <div className="flex flex-col justify-between bg-white rounded-3xl text-center p-2
        h-[10rem] sm:h-full sm:w-full">
            <h1 className="text-xl text-subText">{header}</h1>             
            <h2 className="text-3xl">{number}</h2>
            <h3 className="text-2xl font-semibold">{subHeader}</h3>
        </div>
    )
}

export default InfoCard 
