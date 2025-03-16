import React from 'react'
import nissan_img from '../../assets/nissan.jpg'
import minecraft_img from '../../assets/minecraft.jpg'
import zelle_img from '../../assets/zelle.jpg'
import zomato_img from '../../assets/zomato.jpg'

const cards = [
    {
        id: 1,
        img: nissan_img,
        name: 'Nissan Course',
        author: 'Louis Williams',
        price: "$15.99",
        rating: 5,
    },

    {
        id: 2,
        img: minecraft_img,
        name: 'Minecraft Course',
        author: 'Louis Williams',
        price: "$22.99",
        rating: 3,
    },
    {
        id: 3,
        img: zelle_img,
        name: 'Zelle Course',
        author: 'Louis Williams',
        price: "$10.99",
        rating: 4,
    },
    {
        id: 4,
        img: zomato_img,
        name: 'Zomato Course',
        author: 'Louis Williams',
        price: "$9.99",
        rating: 2,
    },
]

export default cards