const SidemenuCircleBg = (props) => {
  return (
    <div
      className={` bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[150vw] h-[150vw] max-w-[600px] max-h-[600px] absolute right-[0%] translate-x-[50%] top-[-50%] translate-y-[-40%] rounded-full duration-300 origin-top-right scale-0  ease-in-out ${
        props.isActive && 'scale-[100%!important]'
      }`}
    ></div>
  );
};

export default SidemenuCircleBg;
