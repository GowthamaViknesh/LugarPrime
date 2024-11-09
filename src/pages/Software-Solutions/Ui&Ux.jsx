import { Code, Layout, Smartphone, Globe, ChevronRight } from "lucide-react";

const services = [
  {
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "Custom Web Development",
    description: "Tailored solutions to meet your unique business needs",
  },
  {
    icon: <Layout className="w-12 h-12 text-primary" />,
    title: "Responsive Design",
    description: "Websites that look great on any device",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-primary" />,
    title: "Mobile-First Approach",
    description: "Optimized for the growing mobile user base",
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "E-commerce Solutions",
    description: "Powerful online stores to boost your sales",
  },
];
function UiUx() {
  return (
    <div className="py-20">
       <section className="py-40 bg-gradient-to-r from-red-500 to-blue-900 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Expert Web Development Solutions</h1>
                <p className="text-xl mb-8 ">We create stunning, high-performance websites that drive results for your business.</p>
                <button className="bg-background text-foreground px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                  Get Started
                </button>
              </div>
              <div className="md:w-1/2">
                <img src="../src/assets/Banner.gif" alt="Web Development" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Service */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card text-card-foreground rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Section-one-start-Here */}
      <header>
        {/* Hero Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="flex flex-col gap-8 sm:gap-16 lg:flex-row">
            {/* Hero Image */}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block h-full w-full max-w-2xl lg:max-w-xl"
            />
            {/* Hero Content */}
            <div className="flex flex-col items-start">
              {/* Hero Title */}
              <p className="mb-2 text-sm font-semibold uppercase">
                a trusted digital agency
              </p>
              <h1
                className="mb-4 text-4xl font-bold md:text-6xl inline-block text-transparent bg-clip-text 
             bg-gradient-to-r from-blue-800 via-red-500 to-blue-800 bg-200% animate-gradient-move"
              >
                UI & UX
              </h1>

              <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus
              </p>
              {/* Hero Form */}
              <div className="mb-5 w-full pb-8 md:mb-6 lg:mb-4">
                <form
                  name="email-form"
                  method="get"
                  className="flex max-w-md flex-col items-start"
                >
                  <input
                    type="email"
                    className="mb-5 mr-6 h-9 w-full rounded-md border-gray-300 bg-gray-50 px-6 py-7 text-sm text-gray-500 placeholder:text-gray-500"
                    placeholder="Enter your email"
                    required=""
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="inline-block w-full cursor-pointer rounded-md bg-black px-8 py-4 text-center font-semibold text-white"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Section-one-End-Here */}
      {/* Section-Two-start-Here */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full px-5 py-12 md:px-10 md:py-16 lg:py-20">
          {/* Heading */}
          <h2 className="mx-auto mb-12 text-center text-3xl font-extrabold md:mb-20 md:text-5xl">
            What we offer
          </h2>
          {/* How it Works */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6">
            {/* Item */}
            <div className="flex flex-row items-center gap-6 rounded-[60px] border border-solid bg-gray-100 px-6 py-4 transition hover:bg-black hover:text-white">
              <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-white">
                <img
                  src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a274_CodepenLogo.svg"
                  alt="Get Started Icon 1"
                  className="inline-block"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <h5 className="text-base font-bold md:text-xl">
                  Download the app
                </h5>
                <p className=" text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit amet dolor sit amet consectetur adipiscing
                </p>
              </div>
            </div>
            {/* Item */}
            <div className="flex flex-row items-center gap-6 rounded-[60px] border border-solid bg-gray-100 px-6 py-4 transition hover:bg-black hover:text-white">
              <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-white">
                <img
                  src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a28e_GitlabLogo.svg"
                  alt="Get Started Icon 2"
                  className="inline-block"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <h5 className="text-base font-bold md:text-xl">
                  Sign up for account
                </h5>
                <p className=" text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit amet dolor sit amet consectetur adipiscing
                </p>
              </div>
            </div>
            {/* Item */}
            <div className="flex flex-row items-center gap-6 rounded-[60px] border border-solid bg-gray-100 px-6 py-4 transition hover:bg-black hover:text-white">
              <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-white">
                <img
                  src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a274_CodepenLogo.svg"
                  alt="Get Started Icon 3"
                  className="inline-block"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <h5 className="text-base font-bold md:text-xl">
                  Activate virtual card
                </h5>
                <p className=" text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit amet dolor sit amet consectetur adipiscing
                </p>
              </div>
            </div>
            {/* Item */}
            <div className="flex flex-row items-center gap-6 rounded-[60px] border border-solid bg-gray-100 px-6 py-4 transition hover:bg-black hover:text-white">
              <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-white">
                <img
                  src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a28e_GitlabLogo.svg"
                  alt="Get Started Icon 4"
                  className="inline-block"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <h5 className="text-base font-bold md:text-xl">
                  Ready set go!
                </h5>
                <p className=" text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit amet dolor sit amet consectetur adipiscing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section-Two-End-Here */}
      {/* Section-Three-start-Here */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full px-5 py-12 md:px-10 md:py-16 lg:py-20 max-w-7xl">
          {/* Heading */}
          <h2 className="mx-auto mb-12 text-center text-3xl max-w-sm md:max-w-xl font-bold md:mb-28 md:text-5xl">
            Development process
          </h2>
          {/* How it Works */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* Item */}
            <div className="bg-gray-100 w-full p-6 rounded-lg  flex items-center lg:-mt-30 relative">
              <div className="flex-shrink-0 bg-gray-300 p-4 rounded-full">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M29 21.1836L16.4875 28.2836C16.3374 28.3635 16.17 28.4053 16 28.4053C15.83 28.4053 15.6626 28.3635 15.5125 28.2836L3 21.1836L16 13.8086L29 21.1836Z"
                    fill="black"
                  />
                  <path
                    d="M29 13.1846L16 20.5596L3 13.1846L15.5125 6.08455C15.6626 6.00467 15.83 5.96289 16 5.96289C16.17 5.96289 16.3374 6.00467 16.4875 6.08455L29 13.1846Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29 21.1836L16.4875 28.2836C16.3374 28.3635 16.17 28.4053 16 28.4053C15.83 28.4053 15.6626 28.3635 15.5125 28.2836L3 21.1836L16 13.8086L29 21.1836Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29 13.1836V21.1836"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 13.1836V21.1836"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 20.5586V28.4086"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 5.95898V13.809"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold">
                  Sign up effortlessly in just 2 minutes
                </p>
              </div>
              <div className="absolute top-0 right-10 bg-white border-2 border-gray-100 rounded-full h-8 w-8 flex items-center justify-center -mt-4 -mr-4">
                <span className="text-gray-700 font-bold">1</span>
              </div>
            </div>
            {/* Item */}
            <div className="bg-gray-100 w-full p-6 rounded-lg  flex items-center md:transform md:translate-y-14 relative">
              <div className="flex-shrink-0 bg-gray-300 p-4 rounded-full">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M29 21.1836L16.4875 28.2836C16.3374 28.3635 16.17 28.4053 16 28.4053C15.83 28.4053 15.6626 28.3635 15.5125 28.2836L3 21.1836L16 13.8086L29 21.1836Z"
                    fill="black"
                  />
                  <path
                    d="M29 13.1846L16 20.5596L3 13.1846L15.5125 6.08455C15.6626 6.00467 15.83 5.96289 16 5.96289C16.17 5.96289 16.3374 6.00467 16.4875 6.08455L29 13.1846Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29 21.1836L16.4875 28.2836C16.3374 28.3635 16.17 28.4053 16 28.4053C15.83 28.4053 15.6626 28.3635 15.5125 28.2836L3 21.1836L16 13.8086L29 21.1836Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29 13.1836V21.1836"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 13.1836V21.1836"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 20.5586V28.4086"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 5.95898V13.809"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold">
                  Submit as many tasks as you like
                </p>
              </div>
              <div className="absolute top-0 right-10 bg-white border-2 border-gray-100 rounded-full h-8 w-8 flex items-center justify-center -mt-4 -mr-4">
                <span className="text-gray-700 font-bold">2</span>
              </div>
            </div>
            {/* Item */}
            <div className="bg-gray-100 w-full p-6 rounded-lg  flex items-center md:transform md:translate-y-28 relative">
              <div className="flex-shrink-0 bg-gray-300 p-4 rounded-full">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M29 21.1836L16.4875 28.2836C16.3374 28.3635 16.17 28.4053 16 28.4053C15.83 28.4053 15.6626 28.3635 15.5125 28.2836L3 21.1836L16 13.8086L29 21.1836Z"
                    fill="black"
                  />
                  <path
                    d="M29 13.1846L16 20.5596L3 13.1846L15.5125 6.08455C15.6626 6.00467 15.83 5.96289 16 5.96289C16.17 5.96289 16.3374 6.00467 16.4875 6.08455L29 13.1846Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29 21.1836L16.4875 28.2836C16.3374 28.3635 16.17 28.4053 16 28.4053C15.83 28.4053 15.6626 28.3635 15.5125 28.2836L3 21.1836L16 13.8086L29 21.1836Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29 13.1836V21.1836"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 13.1836V21.1836"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 20.5586V28.4086"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 5.95898V13.809"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold">
                  Receive your first task done in 24 hours
                </p>
              </div>
              <div className="absolute top-0 right-10 bg-white border-2 border-gray-100 rounded-full h-8 w-8 flex items-center justify-center -mt-4 -mr-4">
                <span className="text-gray-700 font-bold">3</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section-Three-End-Here */}
      {/* Section-Four-start-Here */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="items-center text-center text-3xl font-bold md:text-5xl">
            ui ux development technologies
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-gray-500 sm:text-base md:mb-12">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
          {/* List */}
          <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold">Support</p>
              <p className="text-center text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </li>
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold">Organise</p>
              <p className="text-center text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </li>
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold">Flexibility</p>
              <p className="text-center text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </li>
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold">Speed</p>
              <p className="text-center text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </li>
          </ul>
          <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold">Support</p>
              <p className="text-center text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </li>
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold">Organise</p>
              <p className="text-center text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </li>
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold">Flexibility</p>
              <p className="text-center text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </li>
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold">Speed</p>
              <p className="text-center text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* Section-Four-End-Here */}
      {/* Section-Five-start-Here */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Why Choose Us</h2>
            <p className="mb-8 mt-4 max-w-xl text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit amet luctus magna fringilla urna
            </p>
          </div>
          {/* Features Content */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full "
              />
              <h3 className="text-xl font-semibold">Support</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full "
              />
              <h3 className="text-xl font-semibold">Organise</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full "
              />
              <h3 className="text-xl font-semibold">Flexibility</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full "
              />
              <h3 className="text-xl font-semibold">Speed</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full "
              />
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full "
              />
              <h3 className="text-xl font-semibold">Resource</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section-five-end-Here */}
      {/* Section-Six-start-Here */}
    </div>
  );
}

export default UiUx;
