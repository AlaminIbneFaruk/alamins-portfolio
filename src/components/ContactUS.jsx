import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactUS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_92746yasin", "template_q6hew1k", form.current, {
        publicKey: "ByniRdi0SfxMyKxez",
      })
      .then(
        () => {
          console.log(form.current);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      id="contact"
      className="card items-center outline-2 outline-offset-4 outline-info max-w-4xl mx-auto my-24"
    >
      <h2 className="text-5xl font-bold text-center mb-10 mt-10">Contact Me</h2>
      <div className="flex gap-12">
        <a
          href="mailto:alaminibnefarukayon@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="text-6xl mb-4 mx-auto" />
        </a>
        <a
          href="https://github.com/AlaminIbneFaruk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-6xl mb-4 mx-auto" />
        </a>
        <a
          href="https://www.linkedin.com/in/alamin-ibne-faruk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-6xl mb-4 mx-auto" />
        </a>
        <a
          href="https://www.facebook.com/alamin.ibnefar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-6xl mb-4 mx-auto" />
        </a>
      </div>
      <div className=" card-body w-full max-w-2xl">
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-3xl">
            What is your name?
          </legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Type here"
            name="name"
            required
          />
          <p className="label">Required</p>
          <legend className="fieldset-legend text-3xl">
            What is your email?
          </legend>
          <input
            type="email"
            className="input w-full"
            placeholder="Type here"
            name="email"
            required
          />
          <p className="label">Required</p>
          <legend className="fieldset-legend text-3xl">
            Your message For me{" "}
          </legend>
          <textarea
            className="textarea h-24 w-full"
            placeholder="Message"
            name="message"
          ></textarea>
          <div className="label text-3xl">Optional</div>
          <input
            type="submit"
            value="Send"
            className="btn btn-info btn-outline"
          />
        </fieldset>
      </div>
    </form>
  );
};

export default ContactUS;
