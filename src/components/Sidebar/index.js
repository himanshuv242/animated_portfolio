import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCodeBranch, faEnvelope, faHome, faLaptopCode, faUser,faBars,faClose } from '@fortawesome/free-solid-svg-icons'
import {  faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);


    return (
        <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className='logo-s' src={LogoS} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="He-Man"/>
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/"onClick={()=>setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={()=>setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={()=>setShowNav(false)}>
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <FontAwesomeIcon
            onClick={()=>setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size='3x'
            className='close-icon'
            />
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/himanshuv242/' >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/himanshuv242' >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.hackerrank.com/himanshuv242' >
                    <FontAwesomeIcon icon={faHackerrank} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.codechef.com/users/himanshuv242' >
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://leetcode.com/himanshuv242/' >
                    <FontAwesomeIcon icon={faCodeBranch} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://auth.geeksforgeeks.org/user/himanshuv242' >
                    <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
        onClick={()=> setShowNav(true)}
        icon={faBars}
        color='#ffd700'
        size='3x'
        className='hamburger-icon'
        />

    </div>
    )
}
    


export default Sidebar