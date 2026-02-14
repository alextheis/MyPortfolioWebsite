import './Resume.css'
const Resume = () => {
  return (
    <section id="resume">
      <h2>My Resume</h2>
        
        <div className="resume-actions">
          <a href="/Alexander_Theis_resume.pdf" download className="btn">
            Download PDF
          </a>
        </div>
    </section>
  );
};

export default Resume;