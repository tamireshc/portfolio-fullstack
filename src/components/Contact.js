import React from "react";
import logoContato from "../images/contact.svg";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [disabled, setIsDisabled] = React.useState(true);
  const [error, setError] = React.useState("");

  const validateInputs = () => {
    const regex = /\S+@\S+\.\S+/;
    const emailValidate = regex.test(email);
    const NAME_VALIDATION = 12;
    const MSG_VALIDATION = 4;

    if (
      emailValidate &&
      name.length >= NAME_VALIDATION &&
      message.length >= MSG_VALIDATION
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  React.useEffect(() => {
    validateInputs();
  }, [email, name, message]);

  return (
    <section
      id="contact"
      className="lg:flex lg:py-24 py-10 px-20 md:p-20 flex-wrap bg-brow justify-center items-center js-scroll"
    >
      <div className="mr-32 mb-10 lg:mb-0">
        <img src={logoContato} alt="logo contato" />
      </div>

      <form
        method="POST"
        action="https://getform.io/f/45efa685-28be-433f-b3ef-6a8194ffb168"
        className="flex flex-col itens-center lg:w-2/5"
      >
        <label htmlFor="name" className="font-lato text-light-rose mb-2">
          Name
        </label>
        <input
          className="p-1 rounded"
          type="text "
          id="name"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <label htmlFor="email" className="font-lato text-light-rose my-2">
          Email
        </label>
        <input
          className="p-1 rounded"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <label htmlFor="email" className="font-lato text-light-rose my-2">
          Message
        </label>
        <textarea
          className="p-2 rounded"
          id="msg"
          name="msg"
          rows="5"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={disabled}
            className="border border-light-rose font-lato text-light-rose mt-6 py-2 w-40 text-center disabled:cursor-not-allowed disabled:opacity-40"
          >
            Send Message
          </button>
        </div>
        <>{error && <p>{error}</p>}</>
      </form>
    </section>
  );
};

export default Contact;
