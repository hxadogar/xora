import { Element } from "react-scroll";
import { faq } from "../constants";
import FaqItem from "../components/FaqItem";

export default function Faq() {
  const halfLength = Math.floor(faq.length / 2);
  return (
      <section>
      <Element name="faq">
        <div className="container py-28 relative z-2 ">
          <div>
            <h3 className="h3 max-md:h5 mt-12 max-w-640 mb-7 text-p4">
              Curiosity didn’t kill the cat, it got answers.
            </h3>
            <p className="pt-4 text-xl">
              You’ve got questions, we’ve got answers.
            </p>
          </div>

          <div className="faq-line_after w-0.5 h-full absolute left-[50%] top-0 -z-2 bg-s2/35" />
        </div>

          <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1 mt-4 border-l-0 border-r-0">
            <div className="container flex gap-10 max-lg:block">
              <div className="rounded-half flex justify-center items-center border-2 border-s2 bg-s1 size-20 absolute -top-10 left-[calc(50%-40px)]">
                <img src="/images/faq-logo.svg" className="size-1/2" />
              </div>

              <div className="relative flex-1 pt-24">
                {faq.slice(0, halfLength).map(({ id, question, answer }) => (
                  <FaqItem
                    key={id}
                    id={id}
                    question={question}
                    answer={answer}
                  />
                ))}
              </div>
              <div className="faq-line_after w-0.5 h-full absolute left-[50%] top-0 -z-2 bg-s2 max-lg:hidden" />
              <div className="relative flex-1 pt-24 max-lg:pt-0">
                {faq.slice(halfLength, -1).map(({ id, question, answer }) => (
                  <FaqItem
                    key={id}
                    id={id}
                    question={question}
                    answer={answer}
                  />
                ))}
              </div>
            </div>
          </div>
      </Element>
    </section>
  );
}
