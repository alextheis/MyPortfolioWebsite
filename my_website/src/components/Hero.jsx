import './Hero.css'
import { Typewriter } from 'react-simple-typewriter';
import Me from './Me';

function Hero() {
  return (
    <div className="hero-flex-container glass-panel">
        <div className="hero-text-side">
            <h1>Hi, I'm Alex</h1>
            <h3>
                I am a {' '}
                <span style={{ color: '#636cff', fontWeight: 'bold' }}>
                    <Typewriter
                        words={['ML Research Assistant', 'Nike Cloud Security Intern', 'Full-Stack Developer', 'OSU CSE Student']}
                        loop={0} 
                        cursor
                        cursorStyle='|'
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h3>
        </div>
        <div className="hero-image-side">
            <Me/>
        </div>
        
    </div>
  );
}

export default Hero;
