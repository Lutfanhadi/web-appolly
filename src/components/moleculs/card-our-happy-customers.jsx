import ParentOurHappyCustomers from "../atoms/parent-our-happy-customers"
import ProfileImages from "../../../public/svg/profile-image.svg"

export const CardOurHappyCustomers = () => {
    return (
      <ParentOurHappyCustomers
        img={ProfileImages}
        name={"Ann Lubin"}
        position={"CO-FUNDER"}
        comment={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat."
        }
      />
    );
}

