import ParentOurReativeTeam from "../atoms/parent-our-reative-team"
import ImgProfile1 from "../../../public/img/profile1.png"
import ImgProfile2 from "../../../public/img/profile2.png"
import ImgProfile3 from "../../../public/img/profile3.png"

export const CardParentOurReativeTeam1 = () => {
    return (
      <ParentOurReativeTeam
        img={ImgProfile1}
        name={"Carla Press"}
        job={"App Developer"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae."
        }
      />
    );
}

export const CardParentOurReativeTeam2 = () => {
    return (
      <ParentOurReativeTeam
        img={ImgProfile2}
        name={"Craig Gouse"}
        job={"UI/UX Designer"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae."
        }
      />
    );
}

export const CardParentOurReativeTeam3 = () => {
    return (
      <ParentOurReativeTeam
        img={ImgProfile3}
        name={"Jocelyn"}
        job={"Website developer"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae."
        }
      />
    );
}