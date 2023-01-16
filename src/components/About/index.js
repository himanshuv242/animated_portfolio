import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate ')

    useEffect(() => {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                        />
                </h1>
                <p>Hey there! I am passionate about how things works, how they are connected and how they can be combined leading to great innovations. I analyze the root cause of problem statement and work efficiently to cure it as soon as possible.</p>
                <p>I'm quietly confident, naturally curious, and perpetually working on improving my chope one design problem at a time.</p>
                <p>If I need to define myself in one sentence that would be a Explorer!</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faReact} color="#f06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faJsSquare} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faCss3} color="#5ed4f4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGithub} color="#Efd81d" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faHtml5} color="#ec4d28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About