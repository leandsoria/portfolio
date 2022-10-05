const NavbarItem = (props) => {
  return (
    <li className="uppercase font-semibold text-violet-900 text-xl text-center leading-none w-full h-full duration-300 hover:text-white relative before:w-0 before:h-0 hover:before:w-full hover:before:h-full before:duration-300 before:block before:absolute before:bg-violet-900 before:left-[50%] before:translate-x-[-50%] before:translate-y-[-10px] hover:before:translate-y-0 before:rounded-2xl before:opacity-0 hover:before:opacity-100 before:top-0 before:z-[-1] z-10 ">
      <a
        href={props.urlLink}
        className="min-w-max block rounded-2xl px-6 pb-[5px] pt-[6px] "
      >
        {props.children}
      </a>
    </li>
  );
};

export default NavbarItem;
