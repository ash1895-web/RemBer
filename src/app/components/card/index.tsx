import React from "react";

interface props {
    children: React.ReactNode
}

export default function Card(props:props){
    return(
        <div>
            {props.children}
        </div>
    )
}