import { cn } from "@/lib/utils";
import { FC } from "react";

interface EmptyProps {
  message?: string;
  className?: string;
}

const Empty: FC<EmptyProps> = ({
  message = "🙇‍♀️ 포스트를 준비중입니다... 조금만 기다려주세요.!",
  className = "",
}) => {
  return (
    <div
      className={cn(
        "px-[20px] py-[32px] border border-gray-300 rounded-[8px] flex items-center justify-center my-[16px]",
        className
      )}
    >
      {message}
    </div>
  );
};

export default Empty;
