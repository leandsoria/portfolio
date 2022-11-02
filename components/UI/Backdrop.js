const Backdrop = (props) => {
  return (
    <div
      className="fixed w-screen h-screen bg-black opacity-30 left-0 top-0 z-20"
      onClick={props.onClick}
    ></div>
  );
};

export default Backdrop;
