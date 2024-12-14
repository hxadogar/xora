import { Element } from "react-scroll";
import { details, features } from "../constants";
import Button from "../components/Button";

export default function Features() {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3 ">
            {features.map(({ id, icon, title, caption, text, button }) => (
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7  max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start max-md:hidden">
                  <div className="-ml-3 mb-12 flex justify-center items-center flex-col">
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={icon}
                      className="object-contain size-28"
                      alt={title}
                    />
                  </div>
                </div>
                <p className="caption mb-5 max-md:mb-6 max-md:mt-12">
                  {caption}
                </p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:h5 max-md:mb-6">
                  {title}
                </h2>
                <p className="mb-4 text-lg">{text}</p>

                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}

            {/* second part */}
            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-0 bottom-0 bg-s3/20 w-[1px] z-10 h-full left-1/2" />
                  <div className="relative border-2 flex justify-center items-center mx-auto mb-3 rounded-full border-s2 size-24 flex-col">
                    <img
                      src={icon}
                      alt={title}
                      className="pointer-events-none size-17/20 z-10 object-contain hover:shadow-500 rounded-full transition-all duration-500 mb-2 "
                    />

                    <h3 className="relative uppercase text-center base-small w-36">
                      {title}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
}
