const IconSocial = ({ children, urlLink }) => {
  return (
    <a
      href={urlLink}
      target="_blank"
      rel="noreferrer"
      className="group w-10 h-10 block relative before:bg-white before:absolute before:top-[50%] before:left-[50%] before:translate-y-[-50%] before:translate-x-[-50%] before:w-[115%] before:h-[115%] before:blur-[8px] before:rounded-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500 mx-8"
    >
      {children}
    </a>
  );
};

export default IconSocial;
