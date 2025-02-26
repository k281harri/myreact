
import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: contact@veganbar.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
  );
}

export default Contact;




// function Contact() {
//   return (
//     <div className="content-section">
//       <h2>Contact Us</h2>
//       <form>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea id="message" name="message"></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Contact;
  
//   // The  Contact  component is a functional component that renders a form with three input fields:  name ,  email , and  message . The form also has a submit button. 
  // The form is not functional yet. It doesn't do anything when you submit it. In the next section, you'll learn how to handle form submission in React. 
  // Handling Form Submission in React 
  // To handle form submission in React, you need to add an  onSubmit  event handler to the form element. This event handler will be called when the form is submitted. 
  // In the event handler, you can access the form data using the  FormData  API. The  FormData  API provides a way to construct a set of key/value pairs representing form fields and their values. 
  // Here's how you can handle form submission in React: 
  // // src/components/Contact.js