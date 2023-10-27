import FacebookIcon from "./icons/FacebookIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-44">
      <ul className="flex">
        <li>
          <FacebookIcon />
        </li>
        <li>
          <FacebookIcon />
        </li>
        <li>
          <FacebookIcon />
        </li>
      </ul>
      <a className="mt-5 text-[9px] text-neutral-500" rel="noreferrer" target="_blank" href="https://github.com/bchiang7/v4">
        <div>Adapted from the Brittany Chiang Portfolio</div>
      </a>
    </footer>
  );
};

export default Footer;
