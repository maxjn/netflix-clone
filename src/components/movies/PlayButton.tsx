"use client";
//Hooks/Packages
import { useRouter } from "next/navigation";

// Iconst
import { BsFillPlayFill } from "react-icons/bs";

// Types
import { MovieIdParams } from "@/types/params";

const PlayButton = ({ movieId }: MovieIdParams) => {
  const router = useRouter();

  return (
    <button
      className="w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
      onClick={() => router.push(`/watch/${movieId}`)}
    >
      <BsFillPlayFill size={30} />
    </button>
  );
};

export default PlayButton;
