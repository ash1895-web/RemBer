'use client'

type props = {
    id: number|string,
    deleteFunction: (id:any)=>Promise<void>
}

export default function DeleteBtn(props:props){
    return(
        <i className="material-symbols-outlined deleteBtn"  onClick={()=>props.deleteFunction(props.id)}>delete</i>
    )
}