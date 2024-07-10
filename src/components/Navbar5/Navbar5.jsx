import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <nav className="relative flex w-full items-center justify-between border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <a href="#">
              <img src="https://relume-assets.s3.amazonaws.com/logo-image.svg" alt="Logo image" />
            </a>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="my-[3px] h-0.5 w-6 bg-black"></span>
              <span className="my-[3px] h-0.5 w-6 bg-black"></span>
              <span className="my-[3px] h-0.5 w-6 bg-black"></span>
            </button>
          </div>
          <div
            className={`overflow-auto px-[5%] lg:ml-6 lg:flex lg:items-center lg:px-0 ${
              isMenuOpen ? 'h-auto' : 'h-0'
            }`}
          >
            <div className="first:pt-4 lg:first:pt-0">
              <a href="#" className="block py-3 text-md focus-visible:outline-none lg:px-4 lg:py-6 lg:text-base">
                Link One
              </a>
            </div>
            <div className="first:pt-4 lg:first:pt-0">
              <a href="#" className="block py-3 text-md focus-visible:outline-none lg:px-4 lg:py-6 lg:text-base">
                Link Two
              </a>
            </div>
            <div className="first:pt-4 lg:first:pt-0">
              <a href="#" className="block py-3 text-md focus-visible:outline-none lg:px-4 lg:py-6 lg:text-base">
                Link Three
              </a>
            </div>
            <div className="first:pt-4 lg:first:pt-0">
              <div>
                <button
                  className="flex w-full items-center justify-between gap-x-2 py-3 text-center text-md focus-visible:outline-none lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-6 lg:text-base"
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                >
                  <span>Link Four</span>
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="0"
                      viewBox="0 0 15 15"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </button>
                <div
                  className={`bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-[100vw] lg:border-b lg:border-border-primary lg:px-[5%] ${
                    isSubMenuOpen ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'
                  }`}
                >
                  <div className="mx-auto flex size-full max-w-full items-center justify-between">
                    <div className="w-full lg:flex">
                      <div className="grid flex-1 gap-x-8 gap-y-6 py-4 pr-8 md:grid-cols-2 md:px-0 md:py-8 lg:py-8 lg:pr-8">
                        <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">Page group one</h4>
                          {['Page One', 'Page Two', 'Page Three', 'Page Four'].map((page, index) => (
                            <a
                              key={index}
                              href="#"
                              className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2 focus-visible:outline-none"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src={`https://relume-assets.s3.amazonaws.com/relume-icon.svg`}
                                  alt={`Icon ${index + 1}`}
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">{page}</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">Page group two</h4>
                          {['Page Five', 'Page Six', 'Page Seven', 'Page Eight'].map((page, index) => (
                            <a
                              key={index}
                              href="#"
                              className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2 focus-visible:outline-none"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src={`https://relume-assets.s3.amazonaws.com/relume-icon.svg`}
                                  alt={`Icon ${index + 5}`}
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">{page}</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="max-w-none relative flex flex-1 p-6 md:py-8 md:pl-8 md:pr-0 lg:max-w-md">
                        <div className="relative z-10 grid w-full auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content] gap-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">Featured from Blog</h4>
                          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start gap-y-2 lg:grid-rows-[auto]">
                            {[1, 2].map((item, index) => (
                              <a
                                key={index}
                                href="#"
                                className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 focus-visible:outline-none md:grid"
                              >
                                <div className="relative w-full pt-[66.66%]">
                                  <img
                                    src="https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg"
                                    alt={`Placeholder image ${item}`}
                                    className="absolute inset-0 size-full object-cover"
                                  />
                                </div>
                                <div className="mt-4 flex flex-col justify-start md:mt-0">
                                  <h5 className="mb-1 font-semibold">Article Title</h5>
                                  <p className="text-sm">Lorem ipsum dolor sit amet consectetur elit</p>
                                  <div className="mt-1.5">
                                    <button className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 text-sm underline">
                                      Read more
                                    </button>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-0 z-[1] h-4/5 w-4/5 border border-border-primary bg-background-primary lg:h-full lg:w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="first:pt-4 lg:first:pt-0">
            <a href="#" className="block py-3 text-md focus-visible:outline-none lg:px-4 lg:py-6 lg:text-base">
              Link Five
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
