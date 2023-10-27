import ContactButton from "./ContactButton";

const Contact = () => {
  return (
    <>
      <div
        id="Contact"
        className={`flex flex-col justify-center items-center mx-auto my-0 py-24 min-h-[85vh] max-w-5xl w-full`}
      >
        <h2 className="before:content-['02.'] font-mono before:font-mono before:text-neutral-500 text-neutral-500 before:text-sm text-sm font-medium">
          {" "}
          What's Next?
        </h2>
        <h2 className="mt-6 mb-3 text-4xl">Get in touch</h2>
        <p className="max-w-xl mb-12 text-center text-neutral-400">
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <ContactButton text="Say Hello" />
      </div>
    </>
  );
};

export default Contact;
