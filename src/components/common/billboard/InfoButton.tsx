"use client";

// Hooks/Packages
import { useCallback } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { onOpen } from "@/redux/modal/infoModalSlice";

// Icons
import { AiOutlineInfoCircle } from "react-icons/ai";

// Types
import { InfoButtonProps } from "@/types/props";

const InfoButton = ({ movie, currentUser }: InfoButtonProps) => {
  // Redux
  const dispatch = useAppDispatch();

  // ---Actions---
  // Close
  const handleOpen = useCallback(() => {
    dispatch(onOpen({ movie, currentUser }));
  }, [dispatch, movie, currentUser]);

  return (
    <button
      onClick={() => handleOpen()}
      className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-sm lg:text-lg font-semibold flex flex-row gap-1 items-center hover:bg-opacity-20 transition"
    >
      <AiOutlineInfoCircle />
      More Info
    </button>
  );
};

export default InfoButton;
