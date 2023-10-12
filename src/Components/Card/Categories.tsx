import Image, { StaticImageData } from "next/image";
import "../../Styles/home.css";
type CategoriesProps = {
  item: {
    image01: StaticImageData;
    title: string;
    subTitle: string;
  };
};

const Categories = ({ item }: CategoriesProps) => {
  const { image01, title, subTitle } = item;
  return (
    <div data-aos="zoom-in-up" data-aos-duration="2000" className="d-flex align-items-center justify-content-center mt-2 ">
      <div className="rBox d-flex align-items-center justify-content-center position-relative">
        <Image src={image01} alt="" style={{width: 400}} className="position-absolute dataSet"/>
      </div>
      <div className="d-flex flex-column justify-content-center lBox">
        <div className="box">
          <h4 className="title">{title}</h4>
          <p className="mt-3 subTitle">{subTitle}</p>
          <div className="mt-3">
            <button className="cta3">Find vendors</button>
            <button className="cta4  ctaG">Become a seller</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
