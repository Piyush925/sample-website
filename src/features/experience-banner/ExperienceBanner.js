import React from 'react';
import superCharged from '../../assests/images/superchargeWorkflow.png'
import apiTeam from '../../assests/images/apiTeam.png'
import graphQL from '../../assests/images/graphQL.png'
import './exp-banner.css'

export default function ExperienceBanner() {

    return (
        <div className='exp-banner-container'>
            <div className='m-auto'>
            <h1>Experience the freedom to build <br/> features, right away.</h1>
            <p>You can now harness component of our platform and build powerful 
                <br/> integrations for our 2 million users - or simply just for your team.</p>
            </div>
            <div className='card-container'>
                <div className='card'>
                    <img src={apiTeam} alt='apiTeam' />
                    <div>
                        <h3>Dedicated API Team</h3>
                        <p>Our team are available for user's questions via <br/> our Slack Developer Community and Email</p>
                    </div>
                </div>
                <div className='card'>
                    <img src={graphQL} alt='graphQL' />
                    <div>
                        <h3>Our API uses Graph QL</h3>
                        <p>No handling server side. Get many API's <br/> responses in a single request.</p>
                    </div>
                </div>
                <div className='card-last'>
                    <img src={superCharged} alt='superCharged' />
                    <div>
                        <h3>Supercharge you workflow</h3>
                        <p>Automaete workflows, integrate and analyse data <br/> and take Marvel to the next level</p>
                    </div>
                </div>
            </div>
        </div>
    )
}