import React from "react"

import { Briefcase } from "../components/svg/Briefcase";
import { Bills } from "../components/svg/Bills";
import { Community } from "../components/svg/Community";

const icons = {
    bills: <Bills />,
    briefcase: <Briefcase />,
    community: <Community />
}

export const FeatureCard = ({ feature }) =>
{
    return (
        <article className="card">
            {icons[feature.icon]}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
        </article>
    )
}
