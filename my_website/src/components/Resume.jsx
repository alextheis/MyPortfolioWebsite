import './Resume.css'
import { FaFileDownload } from "react-icons/fa";
const Resume = () => {
  return (
    <section id="resume">
        <div className="glass-panel">
            <h2>My Resume</h2>
        
            <div className="resume-actions display: flex justify-content: center ">
                <a href="/Alexander_Theis_resume.pdf" download className="btn" target="_blank" rel="noreferrer"><FaFileDownload />
                    
                </a>
            </div>
        </div>

    </section>
  );
};

export default Resume;