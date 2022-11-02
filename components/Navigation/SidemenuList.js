const SidemenuList = (props) => {
  return (
    <ul
      className={`flex flex-col absolute top-10 duration-500 transition-all ease-in-out ${
        props.isActive ? 'flex right-10 opacity-100' : 'right-[-100%] opacity-0'
      }`}
    >
      {props.children}
    </ul>
  );
};

export default SidemenuList;
