import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
const [letterClass, setLetterClass] = useState('text-animate ')
const hi=['H','i',',']
const im=['I','\'m']
const nameArray = ['i','m','a','n','s','h','u']
const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

useEffect(() => {
    setTimeout(()=>{
        setLetterClass('text-animate-hover')
    },4000)
},[])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
<AnimatedLetters letterClass={letterClass}
                strArray={hi}
                idx={10}/>
                
                     <br/>
                     <AnimatedLetters letterClass={letterClass}
                strArray={im}
                idx={13}/>

                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Frontend Developer / MERN Developer / React Native Developer </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
    )
}

export default Home