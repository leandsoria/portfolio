import { PERSONAL_EMAIL } from '../data';

function ConnectNavButton({ onClick, children, scrolled }) {
  return (
    <li
      className={`uppercase font-semibold  text-xl text-center leading-none w-full h-full ease-in-out duration-500  relative before:w-0 hover:before:w-full before:block before:absolute before:z-[-10] before:h-full before:transition-all before:ease-in-out before:duration-500 rounded-2xl overflow-hidden min-w-max text-white hover:text-violet-900 before:bg-white border-2 border-white' transition-all `}
      onClick={onClick}
    >
      <a
        href={`mailto:${PERSONAL_EMAIL}`}
        className="w-max block  px-6 pb-[5px] pt-[6px] "
      >
        {children}
      </a>
    </li>
  );
}

export default ConnectNavButton;
