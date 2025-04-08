import ParentOurRecentBlog from "../atoms/parent-our-recent-blog";
import ImgSnapPixel from "../../../public/img/snapchat.jpg";
import ImgGlobalPartner from "../../../public/img/instagram.jpg";
import ImgOpportinity from "../../../public/img/pexelphoto.jpeg";

export const CardOurRecentBlog1 = () => {
    return (
      <ParentOurRecentBlog
        img={ImgSnapPixel}
        title={"The Snap Pixel: How It Works and How to Install "}
        paragraf={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim."
        }
        buttonShow={"Read more"}
      />
    );
}

export const CardOurRecentBlog2 = () => {
    return (
      <ParentOurRecentBlog
        img={ImgGlobalPartner}
        title={"Global Partner Solutions: A Partnership of Innova"}
        paragraf={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim."
        }
        buttonShow={"Read more"}
      />
    );
}

export const CardOurRecentBlog3 = () => {
    return (
      <ParentOurRecentBlog
        img={ImgOpportinity}
        title={"2021:opportunity for Snapchatters to start fre"}
        paragraf={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim."
        }
        buttonShow={"Read more"}
      />
    );
}