import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../App.css";

interface CustomIconProps extends BsArrowLeftCircleFill {
  className?: string;
}

const ImageSlider = (
  { url = "", page = 1, limit = 10 },
  IconProp: CustomIconProps
) => {
  const [images, setImages] = useState([]);
  const [curentImage, setCurentImage] = useState<number>(0);
  const [loding, setLoding] = useState<boolean>(false);
  const [error, setError] = useState<null | unknown>(null);

  const fatchData = async (getUrl: string) => {
    try {
      setLoding(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoding(false);
    }
  };

  const handlePrevious = () => {
    setCurentImage(curentImage === 0 ? images.length - 1 : curentImage - 1);
  };
  const handleNext = () => {
    setCurentImage(curentImage === images.length - 1 ? 0 : curentImage + 1);
  };

  useEffect(() => {
    if (url !== "") fatchData(url);
  }, [url]);

  if (loding) <div>Loding... </div>;

  if (error) <div>{`errpr : ${error}`}</div>;

  console.log(images);
  console.log(curentImage);

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images &&
        images.map((image, index) => {
          return (
            <img
              className="current-image"
              key={image?.id}
              src={image?.download_url}
              alt={image?.download_url}
              className={
                curentImage === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          );
        })}
      <BsArrowRightCircleFill
        {...IconProp}
        className="arrow arrow-right"
        onClick={handleNext}
      />
    </div>
  );
};

export default ImageSlider;
