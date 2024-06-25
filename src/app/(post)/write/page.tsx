"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ButtonIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WritePosts = () => {
  const [value, setValue] = useState("");

  const { toast } = useToast();

  const handleTemporarySave = () => {
    // TODO : 임시저장 API 호출
    // if result is success
    toast({ description: "임시저장에 성공했습니다." });
  };

  return (
    <div className="grid size-full grid-cols-1 px-[20px]">
      <div>
        <ReactQuill
          className="h-[800px] mb-[70px]"
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </div>
      <div className="flex items-center gap-x-[8px]">
        <Button
          onClick={handleTemporarySave}
          variant="destructive"
          className="w-[100px] h-[42px]"
        >
          임시저장 하기
        </Button>
        <Button className="w-[100px] h-[42px]">업로드하기</Button>
      </div>
    </div>
  );
};

export default WritePosts;
