import React from 'react'

/**
 * @typedef {Object} Option
 * @property {string} id - Identificador único.
 * @property {string} label - Texto a mostrar.
 * @property {string} ref - Ruta del enlace
 * @property {string} [icon] - Icono (opcional).
 * @property {boolean} [disabled=false] - Si está deshabilitado.
 */

/**
 * Renders an options menu.
 * @param {{ options: Option[] }} prop  array of options object
 * @returns {JSX.Element}
 */
export const HeaderMenu = ({ options }) =>
{
    return (
        <nav id="mainNav" class="menu" role="navigation">
            {options.map((option) =>
            {
                option.icon ? <i></i> :
                    <a href={option.ref} id={option.id}>{option.label}</a>
            })}
            <a href="./index.html">Inicio</a>
            <a href="./search-results.html">Buscar</a>
            <a href="./search-results.html">Empleos</a>
            <a href="#">Salarios</a>
        </nav>
    )
}
