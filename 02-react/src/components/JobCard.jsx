import React from 'react'

/**
 * @typedef {Object} jobData
 * @property {string[]} tech skillset required
 * @property {string} commute job typ: hibrid, remote, onsite, etc.
 * @property {string} nivel seniority
 */

/**
 * @typedef {Object} Job
 * @property {string} id - Job id.
 * @property {string} title - Job title
 * @property {string} company - Company listing the job
 * @property {string} location - Job location .
 * @property {string} description - Job details
 * @property {jobData} jobData - Job full details.
 */

/**
 * Renders a Job card element.
 * @param {{ job: Job }} prop  Job object
 * @returns {JSX.Element}
 */
export const JobCard = ({ job }) =>
{
    return (
        <article
            className='job-card'
            data-commute={job.jobData.commute}
            data-level={job.jobData.nivel}
            data-tech={job.jobData.tech.join(", ")}
        >
            <div>
                <h3>{job.titulo}</h3>
                <span>{job.jobData.tech.join(", ")}</span>
                <span>{job.ubicacion}</span>
                <p>{job.descripcion}</p>
            </div>
            <button className="apply-job-btn secondary-button">Aplicar</button>
        </article>
    )
}
