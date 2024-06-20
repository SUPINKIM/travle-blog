"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const LinkButton = ({
  label,
  className,
  link,
}: {
  label: string;
  link: string;
  className?: string;
}) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <Card
      className={twMerge(
        clsx("w-fit flex items-center justify-between select-none", className)
      )}
    >
      <CardHeader>
        <CardTitle className="leading-[22px] break-keep">{label}</CardTitle>
      </CardHeader>
      <div className="pr-[20px]">
        <Button onClick={handleClick} variant="outline" size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default LinkButton;
