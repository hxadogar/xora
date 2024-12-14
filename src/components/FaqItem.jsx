import clsx from "clsx";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

export default function FaqItem({ id, question, answer }) {
  const [activeId, setActiveId] = useState(null);
  let active = activeId === id;
  let index = id;

  const handleClick = () => {
    setActiveId(active ? null : id);
  };
  return (
    <div className="relative z-2 mb-8 lg:mb-12">
      <div
        className="relative group flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={handleClick}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 9 ? "0" : ""}
            {++index}.
          </div>

          {/* question */}
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center max-w-sm",
              active && "max-lg:text-p1"
            )}
          >
            {question}
          </div>
        </div>

        {/* Plus icon */}
        <div className="transform hover:scale-105 relative size-10 border-4 border-s2 flex justify-center items-center rounded-full bg-p2 group-hover:shadow-500 transition-all duration-500">
          <div
            className={clsx(
              "absolute w-0.5 h-[45%] bg-p3 transition-all duration-300 ",
              active && "-rotate-90"
            )}
          ></div>
          <div className="absolute h-0.5 w-[45%] bg-p3"></div>
        </div>
      </div>

      <SlideDown className="max-w-sm max-lg:max-w-md small-compact ml-8">
        {active ? answer : null}
      </SlideDown>
    </div>
  );
}
