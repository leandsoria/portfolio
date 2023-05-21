const SidemenuCircleBg = ({ isActive }) => {
  return (
    <div
      className={`bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[150vw] h-[150vw] max-w-[600px] max-h-[600px] absolute right-20 translate-x-1/2 -top-1/2 translate-y-[-30%] xs:translate-y-[-40%] rounded-full duration-300 origin-top-right scale-0  ease-in-out ${
        isActive && 'scale-[100%!important] xs:right-8'
      }`}
    ></div>
  );
};

export default SidemenuCircleBg;
