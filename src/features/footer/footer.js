import React from 'react';
import "./footer.css"
import logo from '../../assests/images/logo-white.svg'
import Listing from './Listing';

const Footer = () => {

    return (
        <div className="footer-container">
            <div className='footer-logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='list-div'>
                <Listing 
                category="Overview"
                items={['Why Marvel', 'Enterprise', 'Pricing', 'Request a demo', 'Explore', 'Apps', 'Developer API']}
                />
            </div>
            <div className='list-div'>
                <Listing 
                category="Features"
                items={['Wireframing', 'Design', 'Prototyping', 'Collabration', 'Handoff', 'Integrations', 'Sketch Plugin']}
                />
            </div>
            <div className='list-div'>
                <Listing 
                category="Support"
                items={['Help Center', 'Terms of Service', 'Privacy', 'Security']}
                />
            </div>
            <div className='list-div'>
                <Listing 
                category="Marvel"
                items={['Blog', 'Our Team', 'Contact Us', 'Success Stories', 'Brand Guidelines']}
                />
            </div>
            <div className='list-div'>
                <Listing 
                category="Follow"
                items={['Twitter', 'Dribble', 'Facebook', 'Github', 'Explore', 'Workable']}
                />
            </div>
        </div>
    )
}

export default Footer