"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ImageCarouselItem from "./image-carousel-item";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { CAROUSEL_ITEMS } from "./constant";

const ImageCarousel = () => {
  const [api, setAPi] = useState<CarouselApi>();

  const [images, setImages] = useState([...CAROUSEL_ITEMS]);

  const restartSlides = useCallback(() => {
    api?.plugins().autoplay.play();
  }, [api]);

  useEffect(() => {
    api?.containerNode().addEventListener("mouseleave", restartSlides);

    return () => {
      api?.containerNode().removeEventListener("mouseleave", restartSlides);
    };
  }, [api, restartSlides]);

  useEffect(() => {
    images.map(({ imageUrl }, idx) =>
      fetch("/api/base64", {
        method: "POST",
        body: JSON.stringify({ imageUrl }),
      })
        .then((res) => res.json())
        .then((data) => {
          setImages((prev) =>
            prev.map((value, i) =>
              i === idx ? { ...value, blurDataURL: data.base64Url } : value
            )
          );
        })
    );
  }, []);

  return (
    <div className="select-none">
      <Carousel
        className="py-[16px] border-b border-gray-300 w-full relative z-0"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnMouseEnter: true,
            stopOnInteraction: true,
          }),
        ]}
        setApi={setAPi}
      >
        <CarouselPrevious className="left-[-2px] z-10" />
        <CarouselNext className="right-[-16px] z-10" />
        <CarouselContent className="-ml-1">
          {images.map(({ imageUrl, alt, blurDataURL }) => (
            <CarouselItem
              key={alt}
              className="flex items-center h-[340px] justify-center sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
            >
              {blurDataURL && (
                <ImageCarouselItem
                  imageUrl={imageUrl}
                  alt={alt}
                  base64Url={blurDataURL}
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
