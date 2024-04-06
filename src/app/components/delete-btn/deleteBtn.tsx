'use client'

type id = number|string
type props = {
    id: id,
    deleteFunction: (id:id)=>void
}

export default function DeleteBtn(props:props){
    return(
        <i className="material-symbols-outlined deleteBtn"  onClick={()=>props.deleteFunction(props.id)}>delete</i>
    )
}