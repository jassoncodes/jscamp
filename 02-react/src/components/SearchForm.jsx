import React from 'react'
import { FILTERS } from '../config/config'
import { FilterControl } from './FilterControl'


export const SearchForm = () =>
{
    return (
        <form role="search" id="jobs-search-form">
            <div className="job-search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
                <input name="search" id="job-search-bar" required type="text"
                    placeholder="Buscar empleos por titulo, habilidad o empresa" />
            </div>
            <div className="filters">
                {FILTERS.map((filter) =>
                {
                    return <FilterControl key={filter.name} filter={filter} />
                })}
            </div>
        </form>
    )
}
