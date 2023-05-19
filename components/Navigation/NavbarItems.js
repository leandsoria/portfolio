const NavbarItem = ({ onClick, urlLink, children, scrolled }) => {
  return (
    <li
      className={`uppercase font-semibold  text-xl text-center leading-none w-full h-full duration-300  relative before:w-0 before:h-0 hover:before:w-full hover:before:h-full before:duration-300 before:block before:absolute  before:left-[50%] before:translate-x-[-50%] before:translate-y-[-10px] hover:before:translate-y-0 before:rounded-2xl before:opacity-0 hover:before:opacity-100 before:top-0 before:z-[-1] z-10 
          text-white hover:text-violet-900 before:bg-white`}
      onClick={onClick}
    >
      <a
        href={urlLink}
        className="min-w-max block rounded-2xl px-6 pb-[5px] pt-[6px] "
      >
        {children}
      </a>
    </li>
  );
};

export default NavbarItem;
