import React from "react";
export default function Add(props) {
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
                <button>{item}</button>)}
        </div>
    )
}