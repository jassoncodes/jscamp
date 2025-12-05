import React from 'react'
import { Check } from '../components/svg/Check'

const offer = {
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

export const OfferDetails = () =>
{
    return (
        <main className='offerPage' >
            <header className='offerHeader'>
                <div className='breadscrumbs'>
                    {/***  //TODO: breadcrumbs */}
                    <span>Empleos</span><span>Ingeniero de Software</span>
                </div>
                <div className='positionHeader'>
                    <div className='positionTitle'>
                        <h2>{offer.titulo}</h2>
                        <span>Company</span><span>Modalidad</span>
                    </div>
                    <button className="apply-job-btn secondary-button">Aplicar ahora</button>
                </div>
            </header>




            <section className='offerDescription'>
                <h3>Descripcion del puesto</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic, nihil est pariatur molestias officiis, laborum expedita tempore cupiditate eveniet mollitia excepturi quo necessitatibus quod? Reiciendis sequi quibusdam quis incidunt!</p>
                <section className='positionTasks'>
                    <h3>Responsabilidades</h3>
                    <ul>
                        <li>
                            <Check /><p>Task 1</p>
                        </li>
                        <li>
                            <Check /><p>Task 2</p>
                        </li>
                        <li>
                            <Check /><p>Task 3</p>
                        </li>
                        <li>
                            <Check /><p>Task 4</p>
                        </li>
                    </ul>
                </section>
                <section className='positionRequisites'>
                    <h3>Requisitos</h3>
                    <ul>
                        <li>
                            <Check /><p>Task 1</p>
                        </li>
                        <li>
                            <Check /><p>Task 2</p>
                        </li>
                        <li>
                            <Check /><p>Task 3</p>
                        </li>
                        <li>
                            <Check /><p>Task 4</p>
                        </li>
                    </ul>
                </section>
                <section className='aboutCompany'>
                    <h3>About the company</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vero natus expedita enim iusto culpa qui eius quasi blanditiis sapiente ab reprehenderit mollitia, delectus temporibus consectetur error iste facilis velit.</p>
                </section>
                <section className='applySection'>
                    <button className="apply-job-btn secondary-button">Aplicar</button>
                </section>
            </section>
        </main >
    )
}
