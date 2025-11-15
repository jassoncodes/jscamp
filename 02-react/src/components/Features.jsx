import React from 'react'
import { FEATURES } from '../config/config'
import { FeatureCard } from './FeatureCard'

export const Features = () =>
{
    return (
        <section className="features">
            <header>
                <h2>¿Por qué DevJobs?</h2>
                <p>DevJobs es la principal bolsa de trabajo para desarrolladores. Conectamos a los desarrolladores con
                    las mejores empresas del mundo.</p>
            </header>
            <section className="cards-container">
                {FEATURES.map((feature) =>
                {
                    return <FeatureCard key={feature.id} feature={feature} />
                })}
            </section>
            <div>
                <a className="secondary-button">Empezar ahora</a>
            </div>
        </section>
    )
}
