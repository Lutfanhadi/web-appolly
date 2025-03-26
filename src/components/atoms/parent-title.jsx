const TitleParent = ({title, paragraf, text = true}) => {
    return (
      <div className={`flex flex-col gap-5 items-center text-center mx-9 ${text ? 'text-black' : 'text-white'}`}>
        <h1 className="font-bold uppercase text-2xl md:text-4xl">{title}</h1>
        <p className="font-normal text-[16px] w-full md:w-[450px]">{paragraf}</p>
      </div>
    );
}

export default TitleParent;