import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

const Services = () => {
    const services = [
        {
            icon: <FaCocktail />,
            title: "free cocktails",
            info:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!"
        },
        {
            icon: <FaHiking />,
            title: "endless hiking",
            info:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!"
        },
        {
            icon: <FaShuttleVan />,
            title: "free shuttle",
            info:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!"
        },
        {
            icon: <FaBeer />,
            title: "strongest beer",
            info:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!"
        }
    ]
    return (
        <section className="services">
            <Title title="services"/>
            <div className="services-center">
                {services.map((item, index) => {
                    return (
                        <article key={index} className="service">
                            <span>{ item.icon }</span>
                            <h6>{ item.title }</h6>
                            <p>{ item.info }</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Services;