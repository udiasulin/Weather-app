import InfoCard from "./InfoCard"

const Info = () => {
    return (
        <section className="h-full bg-bgGray grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 lg:place-items-center py-6
        sm:h-3/5 2xl:h-4/6">
        <InfoCard number={'12%'} header={'UV Index'} subHeader={'Normal'} />
        <InfoCard number={'7.70 kmh'} header={'Wind Status'} subHeader={'WSW'} />
        <InfoCard number={'6:40am'} header={'Sunrise & Sunset'} subHeader={'Normal'} />
        <InfoCard number={'12%'} header={'Humidity'} subHeader={'Normal'} />
        <InfoCard number={'5.2 km'} header={'Visibility'} subHeader={'Normal'} />
        <InfoCard number={'105'} header={'Air Quality'} subHeader={'Unhealthy'} />
    </section>
    )
}

export default Info