import React from 'react'
import { MainSearchForm } from './MainSearchForm'

export const Hero = () =>
{
    return (

        <section className="hero">
            <img src="./public/background.webp" width="100%" />
            <h1>Encuentra el trabajo de tus suenos</h1>
            <p>Unete a la comunidad mas grande de desarrolladores y encuentra tu proxima oportunidad</p>
            <MainSearchForm />
        </section>

    )
}
