import React from 'react'

import { MENU } from '../config/config'
import { HeaderMenu } from './HeaderMenu'

export const Header = () =>
{
    return (
        <header>
            <h2 className="logo">DevJobs</h2>

            {/* toggle button */}
            <button id="menu-toggle" aria-controls="mainNav" aria-expanded="false" aria-label="Abrir menú">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-menu">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 8l16 0" />
                    <path d="M4 16l16 0" />
                </svg>
            </button>
            <HeaderMenu options={MENU} />
            <div className="header-actions">
                <a className="menu-button" href="#">Publicar un empleo</a>
                <a className="menu-button secondary" href="#">Iniciar sesion</a>
            </div>
        </header>
    )
}
