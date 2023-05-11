import { Outlet } from "react-router-dom";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"


// Layout possédant les composants Header/Footer et Enfants de la propriété Children du Router
// => (Home, HouseDetails, About, NotFound)
/**********************************************************************************************/
const Layout = (): JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
