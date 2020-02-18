import React, { useState } from 'react';
const template_id = process.env.REACT_APP_TEMPLATE_ID;

const Form = () => {
  const [state, setState] = useState({"message": "", "name": "", "email": ""});
  const [errorBorderName, setErrorBorderName] = useState(false);
  const [errorBorderEmail, setErrorBorderEmail] = useState(false);
  const [errorBorderMessage, setErrorBorderMessage] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === "message" && errorBorderMessage === true) {
      setErrorBorderMessage(false);
    } else if (event.target.name === "name" && errorBorderName === true) {
      setErrorBorderName(false);
    } else if (event.target.name === "email" && errorBorderEmail === true) {
      setErrorBorderEmail(false);
    }
    setState({...state, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    if (state.message !== "" && state.name !== "" && state.email !== "") {
      const templateId = template_id;

      sendFeedback(templateId, {message_html: state.message, from_name: state.name, reply_to: state.email, to_name: "Leana"})
      setState({"message": "", "name": "", "email": ""})
    } else {
      if (state.message === "") {
        setErrorBorderMessage(true);
      }
      if (state.name === "") {
        setErrorBorderName(true);
      }
      if (state.email === "") {
        setErrorBorderEmail(true);
      }
    }
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
  
  return (
  	<form className="form" style={{marginTop: '140px'}}>
    	<h1>Contact me</h1>
      <div style={{display: 'flex', width: '100%'}}>
        <input 
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          style={{marginRight: '5px', border: `${errorBorderName ? '1px solid red' : '1px solid lightgray'}`}}
        />
        <input 
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          style={{border: `${errorBorderEmail ? '1px solid red' : '1px solid lightgray'}`}}
        />
      </div>
      <textarea
        name="message"
        onChange={handleChange}
        placeholder="Message"
        required
        value={state.message}
        style={{border: `${errorBorderMessage ? '1px solid red' : '1px solid lightgray'}`}}
      />
    	<input type="button" value="send" className="btn-submit" onClick={handleSubmit} />
  	</form>
  );
};

export default Form;