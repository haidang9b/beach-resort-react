import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import FeatureRooms from "../components/FeaturedRooms";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    },[])
    return (
        <>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services></Services>
            <FeatureRooms></FeatureRooms>
        </>
    )
}


export default Home;