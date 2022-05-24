import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

const RoomsContainer = ({context}) => {
    const { rooms, sortedRooms, featuredRooms, loading } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={rooms}/>
        </div>
    );
}

export default withRoomConsumer(RoomsContainer);