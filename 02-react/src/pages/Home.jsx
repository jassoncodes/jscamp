import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { Footer } from '../components/Footer'

export const Home = () =>
{
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />
        </>
    )
}
