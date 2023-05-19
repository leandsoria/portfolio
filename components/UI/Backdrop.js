const Backdrop = ({ onClick }) => {
  return (
    <div
      className="backdrop fixed block w-screen h-screen bg-[rgba(0,0,0,.45)] left-0 top-0 z-20 backdrop-blur-sm"
      onClick={onClick}
    ></div>
  );
};

export default Backdrop;
