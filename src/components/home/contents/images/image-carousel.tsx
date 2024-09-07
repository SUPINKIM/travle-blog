"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ImageCarouselItem from "./image-carousel-item";
import Autoplay from "embla-carousel-autoplay";

const CAROUSEL_ITEMS: Array<{ imageUrl: string; alt: string }> = [
  {
    imageUrl: "/kota-kinabalu/kota1.png",
    alt: "kota1",
  },
  {
    imageUrl: "/japan/japan1.png",
    alt: "japan1",
  },
  {
    imageUrl: "/japan/japan2.png",
    alt: "japan2",
  },
  {
    imageUrl: "/paris/paris1.png",
    alt: "paris1",
  },
  {
    imageUrl: "/hongkong/hongkong1.png",
    alt: "hongkong1",
  },
  {
    imageUrl: "/london/london1.png",
    alt: "london1",
  },
  {
    imageUrl: "/london/london2.png",
    alt: "london2",
  },
];

const ImageCarousel = () => {
  return (
    <div className="select-none">
      <Carousel
        className="py-[16px] border-y border-gray-300 w-full relative z-0"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselPrevious className="left-[-2px] z-10" />
        <CarouselNext className="right-[-16px] z-10" />
        <CarouselContent className="-ml-1">
          {CAROUSEL_ITEMS.map(({ imageUrl, alt }) => (
            <CarouselItem
              key={alt}
              className="flex items-center justify-center sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
            >
              <ImageCarouselItem imageUrl={imageUrl} alt={alt} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
