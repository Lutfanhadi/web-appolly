import TitleParent from "../atoms/parent-title";
import { CardOurHappyCustomers } from "../moleculs/card-our-happy-customers";

const OurHappyCustomersSetion = () => {
    return (
      <section>
        <div className="bg-[url(/img/Background-img.png)] py-20 bg-cover bg-center md:py-28">
          <TitleParent
            textColor={false}
            title={"Our Happy Customers"}
            paragraf={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae."
            }
          />
          <div className="flex items-center overflow-x-scroll overscroll-x-none mt-8 md:mt-10 lg:mt-16">
            <div className="min-w-full">
                <CardOurHappyCustomers />
            </div>
            <div className="min-w-full">
                <CardOurHappyCustomers />
            </div>
            <div className="min-w-full">
                <CardOurHappyCustomers />
            </div>
          </div>
        </div>
      </section>
    );
}

export default OurHappyCustomersSetion;