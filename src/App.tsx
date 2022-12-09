import Main from "./layout/Main"
import Nav from "./layout/Nav"
import SideBar from "./layout/SideBar"

const App = () => {

    return (<>
            <Nav />
        <div className="flex flex-row h-screen">
            <SideBar />
            <Main />
        </div>
    </>
    )
}

export default App
