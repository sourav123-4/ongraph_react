import React from 'react'
import './styles/listitem.css'
export default function ListItem(props) {

    return (
        <div className='listitem'>
            {props.listname.bestMatches.map(item =>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <button
                                    key={item['1. symbol']}
                                >{item['1. symbol']}
                                </button>
                            </th>
                            <th>
                                <button onClick={() => {
                                    props.setData(() => {
                                        return [...props.data, item['1. symbol']]
                                    })
                                }}
                                >Add</button>
                            </th>
                            <th>
                                <button onClick={() => props.setDetails(item['1. symbol'])}>Details</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
}