const Resume = () => {
  return (
    <section id="resume">
      <h2>My Resume</h2>
      <div className="resume-container">
        {/* This displays the PDF file directly */}
        <iframe 
          src="/Alexander_Theis_resume.pdf" 
          type="application/pdf" 
          width="100%" 
          height="600px" 
        />
        
        <div className="resume-actions">
          <a href="/Alexander_Theis_resume.pdf" download className="btn">
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;