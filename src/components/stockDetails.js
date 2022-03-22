import React from 'react'
export default function StockDetails(props) {
    const [symbol, setSymbol] = React.useState("")
    const [assetType, setAssetType] = React.useState("")
    const [name, setName] = React.useState("")
    const [description, setDescription] = React.useState("")
    React.useEffect(() => {
        const fetchApi1 = async () => {
            const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${props.name}&apikey=0QENXP8HOKV0KWV2`
            const res = await fetch(url)
            const resjson1 = await res.json()
            console.log(resjson1)
            setSymbol(resjson1.Symbol)
            setName(resjson1.Name)
            setAssetType(resjson1.AssetType)
            setDescription(resjson1.Description)
        }
        if (props.name) { fetchApi1() }
    }, [props.name])

    return (
        <div>
            <p>Symbol :{symbol}</p>
            <p>AssetType:{assetType}</p>
            <p>Name :{name}</p>
            <p>Description :{description}</p>
        </div>

    )
}