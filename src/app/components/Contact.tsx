import ContactButton from "./ContactButton";

const Contact = () => {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center mx-auto my-0 py-24 min-h-[80vh] max-w-7xl w-full`}
      >
        <h2 className="before:content-['03.'] font-mono before:font-mono before:text-neutral-500 text-neutral-500 before:text-sm text-sm font-medium">
          {" "}
          What&apos;s Next?
        </h2>
        <h2 className="mt-6 mb-3 text-4xl">Get in touch</h2>
        <p className="max-w-xl mb-12 text-center text-neutral-400">
          I&apos;m currently available and open to new opportunities. Feel free to
          reach out with any inquiries or just to say hello – I&apos;ll do my best to
          respond promptly!
        </p>
        <ContactButton text="Say Hello" />
      </div>
    </>
  );
};

export default Contact;
