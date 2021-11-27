import React from 'react'
import { useState, useEffect} from "react";
import axios from "axios";
import { NavLink} from "react-router-dom";

function Shop() {
    const [items, setItems] = useState([])
    const url = "https://fortnite-api.com/v2/cosmetics/br"

    useEffect(() => {
        axios.get( url)
            .then(response => {
                const data  = response.data.data
                console.log(data)
                setItems(data)
            })
    },[url])

    return (
        <div>
            {items.map( (item) => (
                        <h3 key={item.id}>
                            <NavLink to={`/shop/${item.id}`}>{item.name}</NavLink>
                        </h3>
                ))
            }
        </div>
    );
}

export default Shop;
