import React from "react";
import { Outlet } from "react-router-dom";


// Layout possédant les composants Header/Footer et Enfants de la propriété Children du Router
// => (Home, HouseDetails, About, NotFound)
/**********************************************************************************************/
const Layout: React.FC = () => {
    return (
        <>
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
