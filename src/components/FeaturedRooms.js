import React, { useContext } from "react";
import { RoomContext } from "../context";
const FeaturedRooms = () => {
    const { featuredRooms} = useContext(RoomContext);
    console.log(featuredRooms);
    return (
        <div></div>
    )
}

export default FeaturedRooms;