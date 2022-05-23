import React, { useContext } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
const FeaturedRooms = () => {
    const { featuredRooms, loading } = useContext(RoomContext);

    const rooms = featuredRooms.map(room => {
        return <Room key={room.id} room={room}/>
    })

    return (
        <section className="featured-rooms">
            <Title title="featured rooms" />
            { loading ? <Loading /> :  rooms }
        </section>
    )
}

export default FeaturedRooms;