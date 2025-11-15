import React from 'react'
import { Header } from '../components/Header'
import { Spinner } from '../components/svg/Spinner'
import { SearchForm } from '../components/SearchForm'
import { Footer } from '../components/Footer'


export const Search = () =>
{
    return (
        <>
            <Header />
            <main className="results-page">
                <header>
                    <img src="./public/job-search-background.webp" alt="job-search" />
                    <h1>Encuentra tu proximo trabajo</h1>
                    <p>Explora miles de oportunidades en el sector tecnologico</p>
                </header>
                <search>
                    <SearchForm />
                </search>
                <h2>Resultados de la busqueda</h2>
                <output className="search-results-container">
                    <div className="spinnner">
                        <Spinner />
                    </div>
                    {/* <!-- render here jobs fetched dynamicaly --> */}
                </output>

                {/* <!-- pagination--> */}
                <nav className="pagination">
                </nav>

            </main>
            <Footer />
        </>
    )
}
