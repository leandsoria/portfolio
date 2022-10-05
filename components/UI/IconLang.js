const IconShadow = (prop) => {
  return (
    <div className="w-20 basis-[calc(25%_-_2.5rem)] relative before:bg-violet-300 before:rounded-[25%] before:w-20 before:h-12 before:absolute before:blur-[6px] before:[transform:translateX(-50%)_translateY(7.5rem)_perspective(12rem)_rotateX(40deg)] before:left-[50%] before:opacity-0 hover:before:opacity-40 before:duration-500 text-center px-8">
      {prop.children}
    </div>
  );
};

export default IconShadow;
