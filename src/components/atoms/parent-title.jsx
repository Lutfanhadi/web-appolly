const TitleParent = ({title, paragraf, textColor = true, text = true}) => {
    return (
      <div className={`flex flex-col gap-5 ${textColor ? 'text-black' : 'text-white'}`}>
        <h1 className={`font-bold uppercase text-2xl w-[80%] md:w-[60%] md:text-4xl ${text ? 'text-center mx-auto' : 'text-start mx-4 md:mx-0 md:w-[85%]'}`}>{title}</h1>
        <p className={`font-normal text-[16px] w-[80%] md:w-[60%] ${text ? 'text-center mx-auto lg:w-[600px]' : 'text-start mx-4 md:mx-0 md:w-[85%]'}`}>{paragraf}</p>
      </div>
    );
}

export default TitleParent;