import React from 'react'

export const OfferDetails = () =>
{
    return (
        <main className='offerBody'>
            <div className='breadscrumbs'>
                {/***  //TODO: breadcrumbs */}
                <span>Empleos</span> <em> / </em> <span>Ingeniero de Software</span>
            </div>
            <header className='offerHeader'>
                <div>
                    <h2>Ingeniero de Software</h2>
                    <span>Company</span><span>Modalidad</span>
                </div>
                <button>Aplicar ahora</button>
            </header>
            <section className='offerDescription'>
                <h3>Descripcion del puesto</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic, nihil est pariatur molestias officiis, laborum expedita tempore cupiditate eveniet mollitia excepturi quo necessitatibus quod? Reiciendis sequi quibusdam quis incidunt!</p>
            </section>
            <section className='offerTasks'>
                <h3>Responsabilidades</h3>
                <ul>
                    <li>
                        <p>Task 1</p>
                    </li>
                    <li>
                        <p>Task 2</p>
                    </li>
                    <li>
                        <p>Task 3</p>
                    </li>
                    <li>
                        <p>Task 4</p>
                    </li>
                </ul>
            </section>
            <section className='offerRequisites'>
                <h3>Requisitos</h3>
                <ul>
                    <li>
                        <p>Task 1</p>
                    </li>
                    <li>
                        <p>Task 2</p>
                    </li>
                    <li>
                        <p>Task 3</p>
                    </li>
                    <li>
                        <p>Task 4</p>
                    </li>
                </ul>
            </section>
            <section className='aboutCompany'>
                <h3>About the company</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vero natus expedita enim iusto culpa qui eius quasi blanditiis sapiente ab reprehenderit mollitia, delectus temporibus consectetur error iste facilis velit.</p>
            </section>
        </main>
    )
}
