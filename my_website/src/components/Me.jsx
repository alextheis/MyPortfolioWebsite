import profilePic from '../assets/pic_of_me.png';
import './Me.css'
const Me = () => {
  return (
    <section id="me">
      
      <div className="me-content">
        {/* This displays the PDF file directly */}
        <img 
          src={profilePic} 
          alt="Alexander Theis" 
          className="profile-img" 
        />
      </div>
    </section>
  );
};

export default Me;