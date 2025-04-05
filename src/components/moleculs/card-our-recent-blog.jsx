import ParentOurRecentBlog from "../atoms/parent-our-recent-blog";
import ImgSnapPixel from "../../../public/img/img-snap-pixel.png";
import ImgGlobalPartner from "../../../public/img/img-global-partner.png";
import ImgOpportinity from "../../../public/img/img-opportunity.png";

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