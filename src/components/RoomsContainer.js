import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

const RoomsContainer = ({context}) => {
    const { rooms, sortedRooms, loading } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </div>
    );
}

export default withRoomConsumer(RoomsContainer);