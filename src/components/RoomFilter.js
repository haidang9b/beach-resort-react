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
            </div>
        </section>
    )
}

export default RoomFilter;