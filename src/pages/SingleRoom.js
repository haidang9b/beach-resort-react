import React, { useContext, useEffect, useState } from "react";
import DefaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomConsumer, RoomContext } from "../context";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import StyledHero from "../components/StyledHero";


const SingleRoom = () => {
    const { slug } = useParams();
    const { getRoom, loading, rooms } = useContext(RoomContext);
    const [room, setRoom] = useState(null);
    useEffect(() => {
        setRoom(getRoom(slug));
    }, [loading])
    useEffect(() => {
        if(room) {
            document.title = room.name + " | Room";
        }
        else {
            document.title = "Room not found";
        }
    }, [room])
    const NotFoundRoom = () => {
        return (
            <div className="error">
                <h3>No such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    Back to rooms
                </Link>
            </div>
        )
    }
    const LoadingRoom = () => {
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
        const [mainImg, ...defaultImg] = images;
        return (
            <>
                <StyledHero img={images[0] || DefaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            Back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: ${size} SQFT</h6>
                            <h6>max capacity : {" "}
                                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                            </h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
    return (
        <div>
            { room == null ? NotFoundRoom() : LoadingRoom() }
        </div>
    )
}

export default SingleRoom;