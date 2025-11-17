import React from 'react'
import { Header } from '../components/Header'
import { Spinner } from '../components/svg/Spinner'
import { SearchForm } from '../components/SearchForm'
import { Footer } from '../components/Footer'
import { JobCard } from '../components/JobCard'

const jobArticle = {
    "id": "7a4d1d8b-1e45-4d8c-9f1a-8c2f9a9121a4",
    "titulo": "Desarrollador de Software Senior",
    "empresa": "Tech Solutions Inc.",
    "ubicacion": "Remoto",
    "descripcion": "Buscamos un ingeniero de software con experiencia en desarrollo web y conocimientos en JavaScript, React y Node.js. El candidato ideal debe ser capaz de trabajar en equipo y tener buenas habilidades de comunicación.",
    "jobData": {
        "tech": ["react", "nodejs", "javascript"],
        "commute": "remoto",
        "level": "senior"
    }
}

export const Search = () =>
{
    return (
        <>
            <Header />
            <main className="results-page">
                <header>
                    <img src="./job-search-background.webp" alt="job-search" />
                    <h1>Encuentra tu proximo trabajo</h1>
                    <p>Explora miles de oportunidades en el sector tecnologico</p>
                </header>
                <search>
                    <SearchForm />
                </search>
                <h2>Resultados de la busqueda</h2>
                <output className="search-results-container">
                    {/* <Spinner /> */}
                    {/* <!-- render here JobCard with jobs data fetched dynamicaly --> */}
                    <JobCard job={jobArticle} />
                </output>

                {/* <!-- pagination--> */}
                <nav className="pagination">
                </nav>

            </main>
            <Footer />
        </>
    )
}
