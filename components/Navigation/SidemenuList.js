const SidemenuList = ({ isActive, children }) => {
  return (
    <ul
      className={`flex flex-col absolute top-10 duration-500 transition-all ease-in-out ${
        isActive ? 'flex right-10 opacity-100' : 'right-[-400px] opacity-0'
      }`}
    >
      {children}
    </ul>
  );
};

export default SidemenuList;
