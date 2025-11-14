import React from 'react'

export const MainSearchForm = () =>
{
    return (
        <form className="mainSearchForm" id="main-search-form">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
            </svg>
            <input
                id="mainSearchBar"
                className="search-bar"
                type="text"
                name="home-search-bar"
                placeholder="Buscar empleos por titulo, habilidad o empresa">
            </input>
            <button id="main-search" className="secondary-button" type="submit">Buscar</button>
        </form>
    )
}
