import ParentAppFeatures from "../atoms/parent-app-features";
import CommentSvg from "../../../public/svg/comment.svg";
import BrowserSvg from "../../../public/svg/browser.svg";
import VectorSvg from "../../../public/svg/vector.svg";
import SmartPhoneSvg from "../../../public/svg/smartphone.svg";
import EyeScannerSvg from "../../../public/svg/eye-scanner.svg";
import MaleTelemarketerSvg from "../../../public/svg/male-telemarketer.svg";


export const Comment = () => {
  return (
    <div>
        <ParentAppFeatures
          svg={CommentSvg}
          title={"Full free chat"}
          paragraf={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
    </div>
  );
};

export const Browser = () => {
  return (
    <div>
        <ParentAppFeatures
          justify={"end"}
          svg={BrowserSvg}
          title={"unlimiter features"}
          paragraf={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
    </div>
  );
};


export const Vector = () => {
  return (
    <div>
      <ParentAppFeatures
        justify={"end"}
        svg={VectorSvg}
        title={"awsome ui design"}
        paragraf={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
    </div>
  );
};


export const SmartPhone = () => {
  return (
    <div>
      <ParentAppFeatures
        justify={"start"}
        svg={SmartPhoneSvg}
        title={"iso & androind version"}
        paragraf={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
    </div>
  );
};

export const EyeScanner = () => {
  return (
    <div>
      <ParentAppFeatures
        justify={"start"}
        svg={EyeScannerSvg}
        title={"retina ready greaphics"}
        paragraf={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
    </div>
  );
};

export const MaleTelemarketer = () => {
  return (
    <div>
      <ParentAppFeatures
        svg={MaleTelemarketerSvg}
        title={"24/7 support by real pepole"}
        paragraf={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
    </div>
  );
};


