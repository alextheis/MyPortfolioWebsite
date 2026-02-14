import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './SocialLinks.css'
const SocialLinks = () => (
  <div className="social-icons">
    <a href="https://github.com/alextheis" target="_blank" rel="noreferrer"><FaGithub /></a>
    <a href="https://www.linkedin.com/in/alex-theis-21a302295/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
    <a href="mailto:yzy.amt03@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
  </div>
);

export default SocialLinks;