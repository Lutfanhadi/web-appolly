const ParentAppFeatures = ({svg, title, paragraf, justify}) => {
  let justifyClass = "items-center text-center";

  if (justify === "start"){
    justifyClass = "items-center text-center md:items-start md:text-start";
  } else if (justify == "end") {
    justifyClass = "items-center text-center md:items-end md:text-end";
  }

    return (
      <div
        className={`flex flex-col gap-5 text-white w-[223px] md:w-fit ${justifyClass}`}
      >
        <img className="w-[50px]" src={svg} alt="svg App features" />
        <h1 className="text-xl font-bold uppercase lg:text-2xl">{title}</h1>
        <p className="text-[16px] font-normal lg:text-lg">{paragraf}</p>
      </div>
    );
}

export default ParentAppFeatures;

