import React, { useState, FormEvent } from 'react';
import styles from '../styles/Form.module.css';

const Contact = () => {
  const [result, setResult] = useState<string>("");
  
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target as HTMLFormElement);

    // Your Web3Forms Access Key
    formData.append("access_key", "a1bc779d-1581-4126-aa46-3ffe6413941a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully. You will receive an email shortly.");
      // Reset form fields
      (event.target as HTMLFormElement).reset();
    } else {
      setResult("Error: " + data.message);
      console.log("Error", data);
    }
  };

  return (
    <div className={styles["contact-form-container"]}>
      <form className={styles["form-container"]} onSubmit={onSubmit}>
        <h2 className={styles["form-heading"]}>Let&apos;s Connect!</h2>
        <p className={styles["form-description"]}>
          "Have questions, project ideas, or collaboration in mind? I’m here to help! Reach out using the form below, and I'll get back to you as soon as possible. Together, we can bring your vision to life with solutions tailored to your needs. Let’s make something amazing!"
        </p>

        <div className={styles["form-inputs"]}>
          <input
            type="text"
            name="name"
            required
            className={styles["form-input"]}
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            required
            className={styles["form-input"]}
            placeholder="Your Email"
          />
          <input
            type="text"
            name="subject"
            required
            className={styles["form-input"]}
            placeholder="Subject"
          />
          <input
            type="text"
            name="company"
            required
            className={styles["form-input"]}
            placeholder="Your Company"
          />
        </div>
        <textarea
          name="message"
          required
          className={styles["form-textarea"]}
          placeholder="Your Message"
        ></textarea>
        <button type="submit" className={styles["form-submit-button"]}>
          Send Message
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Contact;