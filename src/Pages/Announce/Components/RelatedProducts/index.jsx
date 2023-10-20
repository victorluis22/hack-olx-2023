import React from "react";
import * as s from "./styles"
import Card from "../Card";
import iPhone1 from "../../../../Assets/Announce/Iphone.svg"
import iPhone2 from "../../../../Assets/Announce/Iphonemesafrente.svg"
import iPhone3 from "../../../../Assets/Announce/Iphonetelabaixo1.svg"
import iPhone4 from "../../../../Assets/Announce/Iphonetelabaixo2.svg"

const Products = [
    {
        title: "iPhone",
        image: iPhone1,
        price: "5.000",
        isSmart: true,
    },
    {
        title: "iPhone usado barato",
        image: iPhone2,
        price: "3.200",
        isSmart: true,
    },
    {
        title: "iPhone usado",
        image: iPhone3,
        price: "3.200",
        isSmart: true,
    },
    {
        title: "iPhone usado barato",
        image: iPhone4,
        price: "3.200",
        isSmart: true,
    },
];

const RelatedProducts = ()  => {
    
    return(
        <>
            <s.Title>Também pode te interessar</s.Title>
            <s.Container>
            {Products.map((eachOne, index)=>{
                return(
                    <Card title={eachOne.title} image={eachOne.image} price={eachOne.price} isSmart={eachOne.isSmart} key={index}/>
                )
            })}
            </s.Container>
            <s.Title>Similares a este anúncio</s.Title>
        </>
    )
}

export default RelatedProducts