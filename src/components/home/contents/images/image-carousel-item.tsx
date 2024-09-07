import Image from "next/image";
import { FC } from "react";

interface ImageCarouselItemProps {
  imageUrl: string;
  alt?: string;
  width?: number;
  height?: number;
}

const ImageCarouselItem: FC<ImageCarouselItemProps> = ({
  imageUrl,
  alt = imageUrl,
}) => {
  return (
    <div className="border h-[300px] w-[400px] border-gray-100 relative rounded-[8px]">
      <Image className="rounded-[8px]" src={imageUrl} alt={alt} fill sizes="" />
    </div>
  );
};

export default ImageCarouselItem;
