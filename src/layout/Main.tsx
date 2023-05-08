import Info from "../components/InfoSection";
import WeeklyCastSection from "../components/WeeklyCastSection";

const Main = () => {

    
    return (
        <main className="h-screen bg-bgGray flex flex-col text-center
        lg:w-2/3 lg:text-left">
            <WeeklyCastSection/>
            <h2 className="text-xl font-semibold px-6">Today's highlights</h2>
            <Info/>
        </main >
    )
}

export default Main