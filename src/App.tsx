import Main from "./layout/Main"
import Nav from "./layout/Nav"
import SideBar from "./layout/SideBar"

const App = () => {

    return (<>
        <div className="flex flex-col lg:flex-row">
        <Nav />
        <SideBar />
        <Main />
        </div>
    </>)
}

export default App
