import React from 'react'
import ListItem from './ListItem'
import './styles/searchresults.css'
export default function SearchResults(props) {
    return (
        <div className='search-results'>
            {!props.name ? (<p></p>) :
                <ListItem
                    listname={props.name}
                    setData={props.setData}
                    setDetails={props.setDetails}
                    data={props.data}
                    details={props.details} />}
        </div>
    )
}