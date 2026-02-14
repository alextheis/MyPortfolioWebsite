import './Hero.css'
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  return (
    <div className="hero-text">
      
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
  );
}

export default Hero;
