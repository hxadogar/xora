import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="relative pt-56 pb-40 max-lg:pb-52 max-md:pt-40 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption">Video Editing</div>
            <h1 className="h1 mb-6 max-lg:h2 max-lg:mb-7 uppercase max-md:mb-4 max-md:text-5xl max-md:leading-12 text-p4">
              Amazingly simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>
          <div className=" absolute -top-32 left-[calc(50%-340px)] w-[1230px] max-lg:-top-1 pointer-events-none">
            <img
              src="/images/hero.png"
              alt="hero"
              className="size-1230 hero-img_res"
            />
          </div>
        </div>
      </Element>
    </section>
  );
}
