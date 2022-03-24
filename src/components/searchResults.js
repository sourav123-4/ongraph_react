import React from 'react'
import ListItem from './ListItem'
export default function SearchResults(props) {
    return (
        <div>
            {!props.name ? (<p>No data found</p>) :
                <ListItem listname={props.name} setData={props.setData} setDetails={props.setDetails} data={props.data} />}
        </div>
    )
}