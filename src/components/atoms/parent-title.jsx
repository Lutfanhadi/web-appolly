const TitleParent = ({title, paragraf}) => {
    return (
      <div className="flex flex-col gap-5 text-center items-center mx-9">
        <h1 className="font-bold uppercase text-2xl md:text-4xl">{title}</h1>
        <p className="font-normal text-[16px] w-full md:w-[450px]">{paragraf}</p>
      </div>
    );
}

export default TitleParent;