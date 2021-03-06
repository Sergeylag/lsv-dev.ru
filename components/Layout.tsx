import Header from "./Header";
import Footer from "./Footer";
import {GlobalStyle} from "../styles/global";

const Layout = ({children}) => {
    return (
        <>
            <GlobalStyle/>
            <Header/>
                {children}
            <Footer/>
        </>
    );
};

export default Layout;