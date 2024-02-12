import { FC } from "react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface IImageGallery {
  images: SanityImageSource;
}

const ImageGallery: FC<IImageGallery> = ({ images }) => {
  console.log(images);

  return <div>Todo: ImageGallery</div>;
};

export default ImageGallery;
