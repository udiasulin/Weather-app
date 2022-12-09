import Card from "../components/Card";
import InfoCard from "../components/InfoCard";

const Main = () => {
    return (
        <main className="w-3/4 h-full bg-bgGray flex flex-col pt-20 justify-evenly items-center space-y-2">
            <section className="h-38 flex gap-5 justify-center">
                <Card icon={'./assests/icons/snowy-1-day.svg'} header={'Sun'} />
                <Card icon={'./assests/icons/snowy-1-night.svg'} header={'Sun'} />
                <Card icon={'./assests/icons/clear-day.svg'} header={'Sun'} />
                <Card icon={'./assests/icons/clear-night.svg'} header={'Sun'} />
                <Card icon={'./assests/icons/frost-day.svg'} header={'Sun'} />
                <Card icon={'./assests/icons/frost-night.svg'} header={'Sun'} />
                <Card icon={'./assests/icons/hurricane.svg'} header={'Sun'} />
            </section>
            <h1 className="text-3xl self-start px-24 font-semibold">Today highlights</h1>
            <section className="w-11/12 h-3/4 grid grid-cols-3 place-items-center place-content-center gap-12 p-8">
                <InfoCard number={'12%'} header={'UV Index'} subHeader={'Normal'} />
                <InfoCard number={'7.70 kmh'} header={'Wind Status'} subHeader={'WSW'} />
                <InfoCard number={'6:40am'} header={'Sunrise & Sunset'} subHeader={'Normal'} />
                <InfoCard number={'12%'} header={'Humidity'} subHeader={'Normal'} />
                <InfoCard number={'5.2 km'} header={'Visibility'} subHeader={'Normal'} />
                <InfoCard number={'105'} header={'Air Quality'} subHeader={'Unhealthy'} />
            </section>
        </main >
    )
}

export default Main