import TitleParent from "../atoms/parent-title";
import { CardOurRecentBlog1 } from "../moleculs/card-our-recent-blog";

const OurRecentBlogSection = () => {
    return (
      <section className="py-20">
        <TitleParent
          title={"Our recent blog"}
          paragraf={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae."
          }
        />
        <div>
            <CardOurRecentBlog1/>
        </div>
      </section>
    );
}

export default OurRecentBlogSection;