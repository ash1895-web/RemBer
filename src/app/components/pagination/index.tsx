'use client'

type props = {
    fetchData: (direction: string) => Promise<void>,
    disablePreviousBtn: boolean,
    disableNextBtn: boolean,
}

export default function Pagination(props: props) {
    const handlePreviousBtn = async () => {
        await props.fetchData("backward")
    }

    const handleNextBtn = async () => {
        await props.fetchData("forward") 
    }

    return (
        <div>
            <button onClick={handlePreviousBtn} disabled={props.disablePreviousBtn}>Previous</button>
            <button onClick={handleNextBtn} disabled={props.disableNextBtn}>Next</button>
        </div>
    )
}