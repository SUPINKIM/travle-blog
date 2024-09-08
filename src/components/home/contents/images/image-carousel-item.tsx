import Image from "next/image";
import { FC } from "react";

interface ImageCarouselItemProps {
  imageUrl: string;
  base64Url?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const ImageCarouselItem: FC<ImageCarouselItemProps> = ({
  imageUrl,
  base64Url,
  alt = imageUrl,
}) => {
  return (
    <div className="border h-[340px] w-[400px] border-gray-100 relative rounded-[8px]">
      <Image
        className="rounded-[8px]"
        src={imageUrl}
        alt={alt}
        fill
        sizes=""
        placeholder="blur"
        blurDataURL={base64Url}
      />
    </div>
  );
};

export default ImageCarouselItem;
