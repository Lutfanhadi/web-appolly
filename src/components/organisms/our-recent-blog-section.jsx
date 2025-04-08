import TitleParent from "../atoms/parent-title";
import { CardOurRecentBlog1, CardOurRecentBlog2, CardOurRecentBlog3 } from "../moleculs/card-our-recent-blog";

const OurRecentBlogSection = () => {
    return (
      <section className="py-20 md:py-28">
        <TitleParent
          title={"Our recent blog"}
          paragraf={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae."
          }
        />
        <div className="flex flex-col gap-10 mt-10 mx-4 md:mx-10 md:flex-row md:gap-6 lg:mx-[135px]">
          <CardOurRecentBlog1 />
          <CardOurRecentBlog2 />
          <CardOurRecentBlog3 />
        </div>
      </section>
    );
}

export default OurRecentBlogSection;