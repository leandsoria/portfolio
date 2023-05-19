import { useState } from 'react';

function BtnTypeSelect({ onClick, handler, typeSelected }) {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = (e) => {
    console.log(e);
  };

  return (
    <button
      onClick={handler}
      className={`py-2 px-4 uppercase font-semibold text-xl text-center leading-none w-full h-full ease-in-out duration-500 relative z-[10] before:w-0 hover:before:w-full before:block before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:transition-all before:ease-in-out before:duration-500 rounded-3xl overflow-hidden min-w-max text-white hover:text-violet-900 before:bg-white border-2 border-white' transition-all  ${
        typeSelected === ProjectArr ? 'opacity-75 pointer-events-none' : ''
      }`}
    >
      Personal Projects
    </button>
  );
}

export default BtnTypeSelect;
