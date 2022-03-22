import React from "react";
import ShowDetails from './showdetails'
export default function Add(props) {
    const [name, setName] = React.useState("")
    const [add, setAdd] = React.useState([])
    function HandleClick() {
        setAdd(() => {
            return [...add, props.name]
        })
    }
    return (
        <div>
            <button onClick={HandleClick}>Add</button>
            <h3>All stocks</h3>
            {add.map((item) =>
                <button key={item} onClick={() => setName(item)}>{item}</button>)}
            <ShowDetails name={name} />
        </div>
    )
}