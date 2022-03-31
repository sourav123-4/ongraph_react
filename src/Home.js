import React from 'react'
import { Route, Routes, Outlet, Link } from 'react-router-dom'
import MyStocks from './components/Routes/myStocks'
import App from './components/App'
import Error from './Error'
export default function Home() {
    const [details, setDetails] = React.useState([])
    const [data, setData] = React.useState([])
    const [quantity, setQuantity] = React.useState()
    const [share, setShare] = React.useState([])
    const [money, setMoney] = React.useState(10000)
    return (
        <div>
            <Routes>
                <Route path="/" element={<App
                    details={details}
                    setDetails={setDetails}
                    data={data}
                    setData={setData}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    share={share}
                    setShare={setShare}
                    money={money}
                    setMoney={setMoney}

                />}>
                    <Route path="mystocks" element={<MyStocks
                        data={data}
                        setData={setData}
                        setQuantity={setQuantity}
                        quantity={quantity}
                        details={details}
                        share={share}
                        money={money}
                        setMoney={setMoney} />}
                    />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
            <Link to="/"><button>Home</button></Link>
            <Outlet />
        </div>

    )
}