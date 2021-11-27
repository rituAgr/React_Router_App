import React from 'react'
import { useState, useEffect} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

function ItemDetail() {
    const { id } = useParams()
    console.log(id)
    const [item, setItem] = useState({
        images: {}
    })
    const url = `https://fortnite-api.com/v2/cosmetics/br/${id}`

    useEffect(() => {
        axios.get( url)
            .then(response => {
                const data  = response.data.data
                console.log(data)
                setItem(data)
            })
    },[url])

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.icon}/>
        </div>
    );
}

export default ItemDetail;
