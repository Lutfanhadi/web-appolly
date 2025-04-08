const ParentOurRecentBlog = ({img, title, paragraf, buttonShow}) => {
    return (
      <div className="bg-white drop-shadow-lg rounded-xl">
        <img
          className="rounded-t-xl h-[228px] w-full"
          src={img}
          alt="img our recent blog"
        />
        <div className="flex flex-col gap-4 py-7 px-4">
          <h1 className="font-bold text-xl uppercase md:h-[120px] lg:h-24">{title}</h1>
          <p className="font-normal text-[#6C6C72] text-[16px]">{paragraf}</p>
          <a
            className="font-semibold text-primary border-b-2 border-primary text-xl w-fit uppercase"
            href=""
          >
            {buttonShow}
          </a>
        </div>
      </div>
    );
}

export default ParentOurRecentBlog;