const Opening = () => {
  return (
    <section className=" min-h-[30vh] flex justify-center py-28  relative overflow-hidden">
      <div className="flex flex-col justify-center items-center relative z-10">
        <h1 className="text-bold text-violet-900 ">Leandro Soria</h1>
        <h2 className="text-violet-600 ">Front-End Dev</h2>
        <p className="text-gray-600 font-semibold">
          Minimalistic and beautiful web pages.
        </p>
      </div>
      {/* <div className="fixed top-24">
        <p className="text-8xl leading-[1.4] text-violet-800 blur-[9px] opacity-40 ">
          <span> &lt;main&gt;</span>
          <br />
          <span>&lt;h1 class=”header-primary”&gt;</span>
          <br />
          <span>
            &nbsp; &nbsp;&nbsp;FRONT-END DEV &lt;/h1&gt; &lt;/main&gt;
          </span>
        </p>
      </div> */}
    </section>
  );
};

export default Opening;
