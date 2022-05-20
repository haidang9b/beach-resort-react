import React, { useContext } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";

const FeaturedRooms = () => {
    const { featuredRooms} = useContext(RoomContext);
    console.log(featuredRooms);
    return (
        <div>
            <Loading/>
        </div>
    )
}

export default FeaturedRooms;