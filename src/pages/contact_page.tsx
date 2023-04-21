import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className='main2'>
      
      
      <table className='contact_form'>
  <tbody>
    <tr>
      <td><br /><input type="text" placeholder="Name"/></td>
    </tr>
    <tr>
      <td><input type="email" placeholder="Email"/></td>
    </tr>
    <tr>
      <td><textarea placeholder="Message"></textarea></td>
    </tr>
    <tr>
      <td><button className="contact-button">Contact Us</button><br /></td>
    </tr>
  </tbody>
</table>


      
       </div>
  );
};

export default ContactPage;
