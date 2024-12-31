import 'react';
import '../../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-row">
        <h3>Submit Your Details</h3>
        <form id="footerForm" >
          <input type="text" id="name" placeholder="Your Name" required />
          <select id="department" required>
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="AIML">AIML</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
          </select>
          <input type="number" id="year" placeholder="Year" min="1" max="4" required />
          <button type="submit">Submit</button>
        </form>
      </div>
      
    </footer>
  );
};

export default Footer;
