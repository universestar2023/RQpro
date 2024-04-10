import React, { useRef } from 'react';

const App = () => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#!" onClick={scrollToFooter}>Contact</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Your page content here */}
      
      <footer ref={footerRef}>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default App;
// import React from 'react';
// import Navbar1 from "../Home/navbar1";
// import './contact.css';

// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     console.log('Form submitted:', this.state);
//     this.setState({ name: '', email: '', subject: '', message: '' });
//   }

//   render() {
//     return (
//       <div><Navbar1/>
//       <div className="contact-container">
//         <h2>Contact Us</h2>
//         <p>Get in touch with us. We are here to guide you throughout your legal literacy journey.</p>
//         <form className="contact-form" onSubmit={this.handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="name">Your Name:</label>
//             <input type="text" id="name" name="name" placeholder='Your Full Name' value={this.state.name} onChange={this.handleChange} />
//           </div>
//           <div className="input-group">
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" name="email" placeholder='abc@gmail.com' value={this.state.email} onChange={this.handleChange} />
//           </div>
//           <div className="input-group">
//             <label htmlFor="subject">Subject:</label>
//             <input type="text" id="subject" name="subject" placeholder='Tell us more about yourself' value={this.state.subject} onChange={this.handleChange} />
//           </div>
//           <div className="input-group">
//             <label htmlFor="message">Message:</label>
//             <textarea id="message" name="message" placeholder='Write your message here' value={this.state.message} onChange={this.handleChange}></textarea>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       </div>
//     );
//   }
// }

// export default Contact;


