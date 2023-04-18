import Card from "./Card"

const WeeklyCastSection = () => {
    return (
            <section className="h-full grid grid-cols-2 place-items-center place-content-center
            gap-4 py-6 px-8  sm:flex sm:gap-3 sm:h-2/5  lg:h-2/6 lg:items-end 2xl:h-1/4 xl3:h-2/6 xl3:items-center">
                <Card icon={'./assests/icons/snowy-1-day.svg'} header={'Sun'} />
                <Card icon={'./assests/icons/snowy-1-night.svg'} header={'Sun'} />
                <Card icon={'./assests/icons/clear-day.svg'} header={'Sun'} />
                <Card icon={'./assests/icons/clear-night.svg'} header={'Sun'} />
                <Card icon={'./assests/icons/frost-day.svg'} header={'Sun'} />
                <Card icon={'./assests/icons/frost-night.svg'} header={'Sun'} />
            </section>
    )
} 
export default WeeklyCastSection