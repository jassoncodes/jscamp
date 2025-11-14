import React from 'react'

/**
 * @typedef {Object} Option
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
        <nav id="mainNav" className="menu" role="navigation">
            {options.map((option) =>
            {
                return <a href={option.ref} key={option.label.toLocaleLowerCase()}>{option.label}</a>
            })}
        </nav>
    )
}

//TODO include icon prop to show an icon next to the menu label