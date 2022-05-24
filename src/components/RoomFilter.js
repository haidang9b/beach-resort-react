import React, { useContext } from 'react'
import { RoomContext } from '../context';
import Title from './Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}


const RoomFilter = () => {
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        rooms
    } = useContext(RoomContext);
    console.log(useContext(RoomContext));
    let typeList = getUnique(rooms, "type");
    typeList = ['all', ...typeList];
    typeList = typeList.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let capacityList = getUnique(rooms, "capacity");
    capacityList = [...capacityList];
    capacityList = capacityList.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });
    console.log(type)
    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <div className='filter-form'>
                {/* select type */}
                    <div className='form-group'>
                        <label htmlFor='type'>room type</label>
                        <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                            {typeList}
                        </select>
                    </div>
                {/* end select type */}

                {/* capacity */}
                 <div className='form-group'>
                    <label htmlFor='capacity'>Guests</label>
                    <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
                        {capacityList}
                    </select>
                </div>
                {/* end capacity */}
                <div className='form-group'>
                    <label htmlFor='price'>room price ${price}</label>
                    <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control' />
                </div>
                {/* room price */}

            </div>
        </section>
    )
}

export default RoomFilter;