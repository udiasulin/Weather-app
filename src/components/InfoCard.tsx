type InfoCardProps = {
    header: string,
    number: string,
    subHeader?: string,
}

const InfoCard: React.FC<InfoCardProps> = ({ header, number, subHeader }) => {
    return (
        <div className="flex flex-col justify-between bg-white rounded-3xl py-10 p-10 h-[20rem] w-[24rem]">
            <h1 className="text-2xl text-subText">{header}</h1>
            <h2 className="text-6xl">{number}</h2>
            <h3 className="text-2xl font-semibold">{subHeader}</h3>
        </div>
    )
}

export default InfoCard