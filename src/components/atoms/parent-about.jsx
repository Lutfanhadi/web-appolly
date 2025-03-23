const ParentAbout = ({title, paragraf}) => {
    return(
        <div className="flex flex-col gap-1 lg:gap-2">
            <h1 className="font-bold uppercase text-xl lg:text-2xl">{title}</h1>
            <p className="font-normal text-[16px] lg:text-lg">{paragraf}</p>
        </div>
    )
}

export default ParentAbout;