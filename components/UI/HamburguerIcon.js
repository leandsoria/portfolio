import { useState, useEffect } from 'react';

const HamburgerIcon = ({ hamburgerState, onClick }) => {
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false);
  const [hamburgerOne, setHamburgerOne] = useState('');
  const [hamburgerTwo, setHamburgerTwo] = useState('');
  const [hamburgerThree, setHamburgerThree] = useState('');

  const hamburgerIconHandler = () => {
    setHamburgerIsActive(!onClick);
    if (!hamburgerIsActive) {
      setHamburgerOne('rotate-[-45deg]');
      setHamburgerTwo('scale-0');
      setHamburgerThree('rotate-45');
    } else {
      setHamburgerOne('');
      setHamburgerTwo('');
      setHamburgerThree('');
    }
  };

  useEffect(() => {
    hamburgerState(hamburgerIsActive);
  }, [hamburgerState, hamburgerIsActive]);

  return (
    <div
      className="group flex flex-col justify-center w-[30px] h-8 cursor-pointer relative z-30 "
      onClick={hamburgerIconHandler}
    >
      <span
        className={`block h-[4px] w-full rounded-[10px] bg-violet-800 translate-y-[-6px] ease-in-out duration-300 origin-top-right ${hamburgerOne}`}
      ></span>
      <span
        className={`block h-[4px] w-full rounded-[10px] bg-violet-800 translate-y-0 ease-in-out duration-200 origin-center ${hamburgerTwo}`}
      ></span>
      <span
        className={`block h-[4px] w-full rounded-[10px] bg-violet-800 translate-y-[6px] ease-in-out duration-300 origin-bottom-right ${hamburgerThree}`}
      ></span>
    </div>
  );
};

export default HamburgerIcon;
