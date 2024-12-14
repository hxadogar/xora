import { clsx } from "clsx";
import { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";

export default function Header() {
  const [hasScroll, setHasScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScroll(window.scrollY > 32);
    };
``
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title, to, offset }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      className="uppercase text-p4 base-bold transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
      to={to}
      offset={offset}
      spy
      smooth
      activeClass="nav-active"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed left-0 top-0 z-50 w-full py-10 max-lg:py-4 transition-all duration-500",
        hasScroll && "py-2 bg-black-100 backdrop-blur-[8px]"
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5 ">
        <a href="/" className="lg:hidden flex-1 z-2 cursor-pointer">
          <img src="/images/xora.svg" alt="Logo" width={115} height={55} />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 duration-300 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p6 max-lg:overflow-hidden sidebar-before max-md:px-4 ">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto ">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="Features" to="features" offset={-100} />
                  <div className="dot"></div>
                  <NavLink title="Pricing" to="pricing" offset={0} />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden cursor-pointer transition-transform duration-500"
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      alt="logo"
                      width={160}
                      height={55}
                      className={clsx(
                        "transform transition-all duration-500",
                        hasScroll && "scale-75"
                      )}
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="FAQ" to="faq" offset={50} />
                  <div className="dot"></div>
                  <NavLink title="Download" to="download" offset={-100} />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 h-[960px] w-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                height={960}
                width={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                height={960}
                width={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt={`${isOpen ? "close" : "magic"}`}
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
}
