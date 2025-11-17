import React from 'react'

export const FilterControl = ({ filter }) =>
{
    return (
        <select className="filter" id={`filter-${filter.name}`} name={filter.name}>
            {filter.filterOptions.map((option) =>
            {
                return <option key={option.toLowerCase()} value={option.toLowerCase()} >{option}</option>
            })}
        </select>
    )
}
