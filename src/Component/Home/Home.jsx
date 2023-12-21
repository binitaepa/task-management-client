
import Footer from "../../Footer/Footer";
import People from "../../People/People";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
           
            <Navbar></Navbar>
            <Banner></Banner>
            <People></People>
            <Footer></Footer>
        </div>
    );
};

export default Home;