const ConnectButton = (props) => {
  return (
    <button className="min-w-24 bg-violet-800 text-white px-6 pt-2 pb-[10px] uppercase font-semibold hover:bg-violet-700 duration-200 rounded-3xl text-xl">
      {props.children}
    </button>
  );
};

export default ConnectButton;
