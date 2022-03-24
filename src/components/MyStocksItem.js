import React from 'react'
export default function MyStocksItem(props) {
    const [removedata, setRemovedata] = React.useState([])
    React.useEffect(() => {
        let arr = [...props.data]
        let index = arr.indexOf(removedata)
        arr.splice(index, 1)
        props.setData(arr)
    }, [removedata])
    return (
        <div>
            <h3 >MY STOCKS</h3>
            {props.data.map((item) => {
                return (<div>
                    <h5>{item}<button onClick={() => {
                        setRemovedata(item)
                    }}>Remove</button></h5>
                </div>)
            }
            )}
        </div>
    )
}