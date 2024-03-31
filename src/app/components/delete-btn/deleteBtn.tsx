'use client'

type props = {
    id: number,
    deleteFunction: (id:number)=>void
}

export default function DeleteBtn(props:props){
    return(
        <i className="material-symbols-outlined deleteBtn"  onClick={()=>props.deleteFunction(props.id)}>delete</i>
    )
}