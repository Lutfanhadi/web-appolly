import { Checkbox } from "../atoms/icons";
import ParentAbout from "../atoms/parent-about";

export const CardAbout1 = () => {
  return (
    <div className="py-3.5 px-4 bg-white drop-shadow-sm rounded-2xl flex items-start gap-3">
      <Checkbox />
      <ParentAbout
        title={"Creative design"}
        paragraf={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
        }
      />
    </div>
  );
};

export const CardAbout2 = () => {
  return (
    <div className="py-3.5 px-4 bg-white drop-shadow-sm rounded-2xl flex items-start gap-3">
      <Checkbox />
      <ParentAbout
        title={"easy to use"}
        paragraf={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
        }
      />
    </div>
  );
};

export const CardAbout3 = () => {
  return (
    <div className="py-3.5 px-4 bg-white drop-shadow-sm rounded-2xl flex items-start gap-3">
      <Checkbox />
      <ParentAbout
        title={"Best user experince"}
        paragraf={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
        }
      />
    </div>
  );
};
