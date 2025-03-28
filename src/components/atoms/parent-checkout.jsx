const ParentCheckout = ({svg, number, text, padding = true}) => {
    return(
        <div className={`flex flex-col gap-1.5 w-fit py-3 rounded-md bg-primary text-white items-center ${padding ? "px-2 md:px-4" : "px-4 md:px-6"}`}>
            <img className="w-5" src={svg} alt="svg checkout" />
            <p className="text-xl font-semibold lg:text-2xl">{number}</p>
            <p className="text-[16px] lg:text-xl">{text}</p>
        </div>
    )
}

export default ParentCheckout;