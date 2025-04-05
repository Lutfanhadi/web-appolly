const ParentOurRecentBlog = ({img, title, paragraf, buttonShow}) => {
    return (
      <div className="mx-4 bg-white drop-shadow-lg">
        <img src={img} alt="img our recent blog" />
        <div>
          <h1>{title}</h1>
          <p>{paragraf}</p>
          <a href="">{buttonShow}</a>
        </div>
      </div>
    );
}

export default ParentOurRecentBlog;