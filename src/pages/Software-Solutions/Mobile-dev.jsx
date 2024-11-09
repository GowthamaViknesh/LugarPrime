import mobileIcon from "../../assets/mobie-hb.png";
import { Code, Layout, Smartphone, Globe, ChevronRight } from "lucide-react";

const services = [
  {
    icon: <Code className="w-12 h-12 text-secondary" />,
    title: "Custom Development",
    description: "Building custom software tailored to meet your business needs.",
  },
  {
    icon: <Layout className="w-12 h-12 text-secondary" />,
    title: "Responsive & Faster",
    description: "Creating responsive designs that load quickly on any device.",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-secondary" />,
    title: "Android App",
    description: "Developing Android apps that engage mobile users.",
  },
  {
    icon: <Globe className="w-12 h-12 text-secondary" />,
    title: "iOS App",
    description: "Crafting powerful iOS apps that enhance user experience.",
  },
];


function Mobiledev() {
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
      {/* Header Start here */}
      <header className="py-15">
        {/* Hero Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 p-10">
          {/* Component */}
          <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            {/* Hero Content */}
            <div className="flex flex-col">
              {/* Hero Title */}
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                The Website You Want Without The Dev Time.
              </h1>
              <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus
              </p>
              {/* Hero Button */}
              <div className="flex items-center">
                <a
                  href="#"
                  className="mr-5 items-center rounded-md bg-black px-6 py-3 font-semibold text-white md:mr-6 lg:mr-8"
                >
                  Let's Talk
                </a>
                <a href="#" className="flex max-w-full items-center font-bold">
                  <img
                    src={mobileIcon}
                    alt="Description of image"
                    className="mr-2 inline-block max-h-4 w-5"
                  />
                  <p>View Showreel</p>
                </a>
              </div>
            </div>
            {/* Hero Image */}
            <img src={mobileIcon} alt="Description of image" />
          </div>
        </div>
      </header>
      {/* Header Ends-Here */}
      {/* Our Service */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card text-card-foreground rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section-One-Starts-Here */}
      <section className="pt-20">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:py-20">
          {/* Component */}
          <div className="grid gap-16 md:grid-cols-2 md:gap-4 lg:grid-cols-[1fr_340px_1fr]">
            {/* Item */}
            <div className="flex flex-col items-start gap-16 [grid-area:1/1/2/3] md:gap-24 md:[grid-area:1/1/2/2] lg:[grid-area:1/1/2/2]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-2.5">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.5625 12.5938H18.9922C19.8544 11.4151 20.317 9.99158 20.3125 8.53125C20.3098 6.70042 19.5813 4.94535 18.2867 3.65076C16.9921 2.35617 15.2371 1.62769 13.4062 1.625C13.1908 1.625 12.9841 1.7106 12.8317 1.86298C12.6794 2.01535 12.5938 2.22201 12.5938 2.4375V7.00781C11.4151 6.14564 9.99158 5.683 8.53125 5.6875C6.70042 5.69019 4.94535 6.41867 3.65076 7.71326C2.35617 9.00785 1.62769 10.7629 1.625 12.5938C1.625 12.8092 1.7106 13.0159 1.86298 13.1683C2.01535 13.3206 2.22201 13.4062 2.4375 13.4062H7.00781C6.14564 14.5849 5.683 16.0084 5.6875 17.4688C5.69019 19.2996 6.41867 21.0546 7.71326 22.3492C9.00785 23.6438 10.7629 24.3723 12.5938 24.375C12.8092 24.375 13.0159 24.2894 13.1683 24.137C13.3206 23.9847 13.4062 23.778 13.4062 23.5625V18.9922C14.5849 19.8544 16.0084 20.317 17.4688 20.3125C19.2996 20.3098 21.0546 19.5813 22.3492 18.2867C23.6438 16.9921 24.3723 15.2371 24.375 13.4062C24.375 13.1908 24.2894 12.9841 24.137 12.8317C23.9847 12.6794 23.778 12.5938 23.5625 12.5938ZM8.53125 7.3125C9.30767 7.30929 10.0751 7.47897 10.7777 7.80923C11.4804 8.13949 12.1008 8.62204 12.5938 9.22188V11.7812H3.31094C3.50677 10.5369 4.14007 9.4033 5.09698 8.58416C6.05389 7.76502 7.27162 7.31411 8.53125 7.3125ZM17.4688 18.6875C16.6923 18.6907 15.9249 18.521 15.2223 18.1908C14.5196 17.8605 13.8992 17.378 13.4062 16.7781V14.2188H22.6891C22.4932 15.4631 21.8599 16.5967 20.903 17.4158C19.9461 18.235 18.7284 18.6859 17.4688 18.6875Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="max-w-xs text-gray-500 md:max-w-[256px]">
                  Build apps that work seamlessly across Android and iOS devices.
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl  text-red-500">
                Cross-Platform Development.
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-2.5">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.5625 12.5938H18.9922C19.8544 11.4151 20.317 9.99158 20.3125 8.53125C20.3098 6.70042 19.5813 4.94535 18.2867 3.65076C16.9921 2.35617 15.2371 1.62769 13.4062 1.625C13.1908 1.625 12.9841 1.7106 12.8317 1.86298C12.6794 2.01535 12.5938 2.22201 12.5938 2.4375V7.00781C11.4151 6.14564 9.99158 5.683 8.53125 5.6875C6.70042 5.69019 4.94535 6.41867 3.65076 7.71326C2.35617 9.00785 1.62769 10.7629 1.625 12.5938C1.625 12.8092 1.7106 13.0159 1.86298 13.1683C2.01535 13.3206 2.22201 13.4062 2.4375 13.4062H7.00781C6.14564 14.5849 5.683 16.0084 5.6875 17.4688C5.69019 19.2996 6.41867 21.0546 7.71326 22.3492C9.00785 23.6438 10.7629 24.3723 12.5938 24.375C12.8092 24.375 13.0159 24.2894 13.1683 24.137C13.3206 23.9847 13.4062 23.778 13.4062 23.5625V18.9922C14.5849 19.8544 16.0084 20.317 17.4688 20.3125C19.2996 20.3098 21.0546 19.5813 22.3492 18.2867C23.6438 16.9921 24.3723 15.2371 24.375 13.4062C24.375 13.1908 24.2894 12.9841 24.137 12.8317C23.9847 12.6794 23.778 12.5938 23.5625 12.5938ZM8.53125 7.3125C9.30767 7.30929 10.0751 7.47897 10.7777 7.80923C11.4804 8.13949 12.1008 8.62204 12.5938 9.22188V11.7812H3.31094C3.50677 10.5369 4.14007 9.4033 5.09698 8.58416C6.05389 7.76502 7.27162 7.31411 8.53125 7.3125ZM17.4688 18.6875C16.6923 18.6907 15.9249 18.521 15.2223 18.1908C14.5196 17.8605 13.8992 17.378 13.4062 16.7781V14.2188H22.6891C22.4932 15.4631 21.8599 16.5967 20.903 17.4158C19.9461 18.235 18.7284 18.6859 17.4688 18.6875Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="max-w-xs text-gray-500 md:max-w-[256px]">
                  Create high-performance apps tailored for either Android or iOS.
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl  text-red-500">
                Native App Development.
                </h3>
              </div>
            </div>
            {/* Item */}
            <div
              className="w-86 mt-4 h-88 bg-contain bg-[50%_100%] bg-no-repeat [grid-area:3/1/4/3] sm:mt-12 sm:h-[560px] sm:w-full md:mt-0 lg:[grid-area:1/2/1/3]"
              style={{
                backgroundImage:
                  'url("https://assets.website-files.com/6458c625291a94a195e6cf3a/647b2f0c0e6afb25726156ec_Column.svg")',
              }}
            ></div>
            {/* Item */}
            <div className="flex flex-col items-start gap-16 [grid-area:2/1/3/3] md:gap-24 md:[grid-area:1/2/2/3] lg:[grid-area:1/3/4/4]">
              <div className="flex flex-col gap-4 md:items-end">
                <div className="flex items-center gap-4 md:flex-row-reverse">
                  <div className="rounded-full bg-gray-100 p-2.5">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.5625 12.5938H18.9922C19.8544 11.4151 20.317 9.99158 20.3125 8.53125C20.3098 6.70042 19.5813 4.94535 18.2867 3.65076C16.9921 2.35617 15.2371 1.62769 13.4062 1.625C13.1908 1.625 12.9841 1.7106 12.8317 1.86298C12.6794 2.01535 12.5938 2.22201 12.5938 2.4375V7.00781C11.4151 6.14564 9.99158 5.683 8.53125 5.6875C6.70042 5.69019 4.94535 6.41867 3.65076 7.71326C2.35617 9.00785 1.62769 10.7629 1.625 12.5938C1.625 12.8092 1.7106 13.0159 1.86298 13.1683C2.01535 13.3206 2.22201 13.4062 2.4375 13.4062H7.00781C6.14564 14.5849 5.683 16.0084 5.6875 17.4688C5.69019 19.2996 6.41867 21.0546 7.71326 22.3492C9.00785 23.6438 10.7629 24.3723 12.5938 24.375C12.8092 24.375 13.0159 24.2894 13.1683 24.137C13.3206 23.9847 13.4062 23.778 13.4062 23.5625V18.9922C14.5849 19.8544 16.0084 20.317 17.4688 20.3125C19.2996 20.3098 21.0546 19.5813 22.3492 18.2867C23.6438 16.9921 24.3723 15.2371 24.375 13.4062C24.375 13.1908 24.2894 12.9841 24.137 12.8317C23.9847 12.6794 23.778 12.5938 23.5625 12.5938ZM8.53125 7.3125C9.30767 7.30929 10.0751 7.47897 10.7777 7.80923C11.4804 8.13949 12.1008 8.62204 12.5938 9.22188V11.7812H3.31094C3.50677 10.5369 4.14007 9.4033 5.09698 8.58416C6.05389 7.76502 7.27162 7.31411 8.53125 7.3125ZM17.4688 18.6875C16.6923 18.6907 15.9249 18.521 15.2223 18.1908C14.5196 17.8605 13.8992 17.378 13.4062 16.7781V14.2188H22.6891C22.4932 15.4631 21.8599 16.5967 20.903 17.4158C19.9461 18.235 18.7284 18.6859 17.4688 18.6875Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="max-w-xs text-gray-500 md:max-w-[256px] md:text-right">
                  Design intuitive, engaging mobile interfaces for an exceptional user experience.
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-right md:text-3xl  text-red-500">
                UI/UX Design for Mobile
                </h3>
              </div>
              <div className="flex flex-col gap-4 md:items-end">
                <div className="flex items-center gap-4 md:flex-row-reverse">
                  <div className="rounded-full bg-gray-100 p-2.5">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.5625 12.5938H18.9922C19.8544 11.4151 20.317 9.99158 20.3125 8.53125C20.3098 6.70042 19.5813 4.94535 18.2867 3.65076C16.9921 2.35617 15.2371 1.62769 13.4062 1.625C13.1908 1.625 12.9841 1.7106 12.8317 1.86298C12.6794 2.01535 12.5938 2.22201 12.5938 2.4375V7.00781C11.4151 6.14564 9.99158 5.683 8.53125 5.6875C6.70042 5.69019 4.94535 6.41867 3.65076 7.71326C2.35617 9.00785 1.62769 10.7629 1.625 12.5938C1.625 12.8092 1.7106 13.0159 1.86298 13.1683C2.01535 13.3206 2.22201 13.4062 2.4375 13.4062H7.00781C6.14564 14.5849 5.683 16.0084 5.6875 17.4688C5.69019 19.2996 6.41867 21.0546 7.71326 22.3492C9.00785 23.6438 10.7629 24.3723 12.5938 24.375C12.8092 24.375 13.0159 24.2894 13.1683 24.137C13.3206 23.9847 13.4062 23.778 13.4062 23.5625V18.9922C14.5849 19.8544 16.0084 20.317 17.4688 20.3125C19.2996 20.3098 21.0546 19.5813 22.3492 18.2867C23.6438 16.9921 24.3723 15.2371 24.375 13.4062C24.375 13.1908 24.2894 12.9841 24.137 12.8317C23.9847 12.6794 23.778 12.5938 23.5625 12.5938ZM8.53125 7.3125C9.30767 7.30929 10.0751 7.47897 10.7777 7.80923C11.4804 8.13949 12.1008 8.62204 12.5938 9.22188V11.7812H3.31094C3.50677 10.5369 4.14007 9.4033 5.09698 8.58416C6.05389 7.76502 7.27162 7.31411 8.53125 7.3125ZM17.4688 18.6875C16.6923 18.6907 15.9249 18.521 15.2223 18.1908C14.5196 17.8605 13.8992 17.378 13.4062 16.7781V14.2188H22.6891C22.4932 15.4631 21.8599 16.5967 20.903 17.4158C19.9461 18.235 18.7284 18.6859 17.4688 18.6875Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="max-w-xs text-gray-500 md:max-w-[256px] md:text-right">
                   Provide ongoing updates and support to ensure peak app performance.
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-right md:text-3xl text-red-500">
                Maintenance & Support
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section-one-end-here */}
      {/* Section-second-start-here */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="items-center text-center text-3xl font-bold md:text-5xl">
            Make every step user-centric
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
              <p className="text-xl font-semibold text-blue-700"> Hybrid Development</p>
              <p className="text-center text-sm ">
              Hybrid apps are often created using standard web technologies like HTML, CSS, and JavaScript, which are then packaged into a native container to run on both Android and iOS.
              </p>
            </li>
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold text-blue-700">Progressive Web App</p>
              <p className="text-center text-sm ">
              JavaScript: PWAs are web-based and built with JavaScript along with frameworks and libraries like Angular, React, or Vue to create app-like experiences.
              </p>
            </li>
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold text-blue-700">Cross Platform </p>
              <p className="text-center text-sm ">
              Dart (Flutter) The language for Google’s Flutter framework, used to build apps for both iOS and Android with a single codebase.
              </p>
            </li>
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold text-blue-700">Native Development</p>
              <p className="text-center text-sm ">
              Swift (iOS) The primary language for iOS app development, designed by Apple for building efficient and safe applications.
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* Section-second-end-here */}
      {/* Second-three-start-here */}
      {/* <section>
     
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
     
        <h2 className="mx-auto mb-8 max-w-3xl text-center text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
          Smooth Process. Transformative Outcomes.
        </h2>
        
        <div className="flex flex-col items-center justify-center bg-contain bg-center pt-10 bg-[url('https://assets.website-files.com/6458c625291a94a195e6cf3a/648825fca218588cb636c341_Group%2048114.png')]">
          <div className="flex flex-col justify-around gap-4 sm:flex-row">
            <a
              className="rounded-md border border-solid border-gray-300 bg-gray-100 p-6 text-black"
              href="#w-tabs-2-data-w-pane-0"
            >
              <h5 className="mb-2 text-xl font-bold">
                Personalized Consultation
              </h5>
              <p className="text-sm">
                We start by understanding your unique goals and challenges,
                laying the foundation for a tailored strategy.
              </p>
            </a>
            <a
              className="rounded-md border border-solid border-gray-300 bg-white p-6 text-black"
              tabIndex="-1"
              href="#w-tabs-2-data-w-pane-1"
            >
              <h5 className="mb-2 text-xl font-bold">Strategy Development</h5>
              <p className="text-sm">
                We start by understanding your unique goals and challenges,
                laying the foundation for a tailored strategy.
              </p>
            </a>
            <a className="rounded-md border border-solid border-gray-300 bg-white p-6 text-black">
              <h5 className="mb-2 text-xl font-bold">Analysis and Reporting</h5>
              <p className="text-sm">
                We start by understanding your unique goals and challenges,
                laying the foundation for a tailored strategy.
              </p>
            </a>
          </div>
          <div className="max-w-5xl">
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6488257b75d6a7b950248536_Group%2048113.svg"
              alt=""
              className="mt-16 inline-block"
            />
          </div>
        </div>
      </div>
    </section> */}
      {/* Section-three-end-here */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="mx-auto max-w-xl text-center text-3xl font-bold md:text-5xl mb-8 md:mb-12 lg:mb-16">
            Our Development Process
          </h2>
          {/* Content */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row md:justify-between items-center">
              <div className="flex flex-col gap-6">
                <div className="h-11 w-11">
                  <svg
                    className="h-11 w-11"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.3102 12.7222C41.3054 12.7222 41.3008 12.7203 41.2975 12.7169C41.2941 12.7136 41.2922 12.709 41.2922 12.7042C41.0325 12.262 40.6606 11.8963 40.2141 11.6441L24.4016 2.74954C23.9732 2.51034 23.4907 2.38477 23 2.38477C22.5094 2.38477 22.0269 2.51034 21.5984 2.74954L5.78595 11.6441C5.33947 11.8963 4.96754 12.262 4.70783 12.7042C4.70783 12.709 4.70593 12.7136 4.70256 12.7169C4.69919 12.7203 4.69462 12.7222 4.68986 12.7222V12.7581C4.44143 13.1768 4.31104 13.6549 4.31251 14.1417V31.8589C4.31342 32.3711 4.45031 32.8739 4.70918 33.3159C4.96806 33.7579 5.33964 34.1232 5.78595 34.3745L21.5984 43.2691C21.9965 43.4862 22.4391 43.6092 22.8922 43.6284H23.1438C23.5854 43.6089 24.0163 43.4858 24.4016 43.2691L40.2141 34.3745C40.6604 34.1232 41.032 33.7579 41.2908 33.3159C41.5497 32.8739 41.6866 32.3711 41.6875 31.8589V14.1417C41.6901 13.6434 41.5599 13.1534 41.3102 12.7222ZM23 5.24719L37.3211 13.2972L31.8227 16.4238L17.3219 8.42766L23 5.24719ZM23.1617 21.3472L8.69689 13.2972L14.375 10.0988L28.8938 18.0948L23.1617 21.3472ZM24.4555 39.9448L24.5992 23.8448L30.3672 20.5566V27.4027C30.3672 27.7839 30.5187 28.1495 30.7882 28.4191C31.0578 28.6887 31.4235 28.8402 31.8047 28.8402C32.1859 28.8402 32.5516 28.6887 32.8212 28.4191C33.0908 28.1495 33.2422 27.7839 33.2422 27.4027V18.9214L38.8125 15.7589V31.8589L24.4555 39.9448Z"
                      fill="black"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-red-500">
                  1. Planning and Research
                  </h3>
                  <p className=" max-w-md">
                    <ul className="list-disc pl-5">
                      <li>Objective Setting: Define the app’s purpose, target audience, key features, and overall goals.</li>
                      <li>Market Research: Analyze competitors, trends, and user expectations to inform app design and functionality.</li>
                      <li>Platform and Technology Selection: Decide whether to develop natively, use a cross-platform framework, or create a Progressive Web App (PWA).</li>
                      <li>Roadmap and Timeline: Establish a timeline with milestones and assign resources to ensure efficient development.</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="mt-5 md:mr-5 md:mt-5 pl-5">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FVector.png?alt=media&token=441fbdcd-c757-4be7-8a91-c4ef4c12d3d4"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Item */}
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col space-y-4">
              <div className="h-6 w-6">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.3102 12.7222C41.3054 12.7222 41.3008 12.7203 41.2975 12.7169C41.2941 12.7136 41.2922 12.709 41.2922 12.7042C41.0325 12.262 40.6606 11.8963 40.2141 11.6441L24.4016 2.74954C23.9732 2.51034 23.4907 2.38477 23 2.38477C22.5094 2.38477 22.0269 2.51034 21.5984 2.74954L5.78595 11.6441C5.33947 11.8963 4.96754 12.262 4.70783 12.7042C4.70783 12.709 4.70593 12.7136 4.70256 12.7169C4.69919 12.7203 4.69462 12.7222 4.68986 12.7222V12.7581C4.44143 13.1768 4.31104 13.6549 4.31251 14.1417V31.8589C4.31342 32.3711 4.45031 32.8739 4.70918 33.3159C4.96806 33.7579 5.33964 34.1232 5.78595 34.3745L21.5984 43.2691C21.9965 43.4862 22.4391 43.6092 22.8922 43.6284H23.1438C23.5854 43.6089 24.0163 43.4858 24.4016 43.2691L40.2141 34.3745C40.6604 34.1232 41.032 33.7579 41.2908 33.3159C41.5497 32.8739 41.6866 32.3711 41.6875 31.8589V14.1417C41.6901 13.6434 41.5599 13.1534 41.3102 12.7222ZM23 5.24719L37.3211 13.2972L31.8227 16.4238L17.3219 8.42766L23 5.24719ZM23.1617 21.3472L8.69689 13.2972L14.375 10.0988L28.8938 18.0948L23.1617 21.3472ZM24.4555 39.9448L24.5992 23.8448L30.3672 20.5566V27.4027C30.3672 27.7839 30.5187 28.1495 30.7882 28.4191C31.0578 28.6887 31.4235 28.8402 31.8047 28.8402C32.1859 28.8402 32.5516 28.6887 32.8212 28.4191C33.0908 28.1495 33.2422 27.7839 33.2422 27.4027V18.9214L38.8125 15.7589V31.8589L24.4555 39.9448Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-500">
                2. UI/UX Design
                </h3>
                <p className="">
                UI Elements: Design graphics, icons, and animations, making sure the design is consistent with the brand and platform guidelines.
                </p>
              </div>
            </div>
            {/* Item */}
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col space-y-4">
              <div className="h-6 w-6">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.3102 12.7222C41.3054 12.7222 41.3008 12.7203 41.2975 12.7169C41.2941 12.7136 41.2922 12.709 41.2922 12.7042C41.0325 12.262 40.6606 11.8963 40.2141 11.6441L24.4016 2.74954C23.9732 2.51034 23.4907 2.38477 23 2.38477C22.5094 2.38477 22.0269 2.51034 21.5984 2.74954L5.78595 11.6441C5.33947 11.8963 4.96754 12.262 4.70783 12.7042C4.70783 12.709 4.70593 12.7136 4.70256 12.7169C4.69919 12.7203 4.69462 12.7222 4.68986 12.7222V12.7581C4.44143 13.1768 4.31104 13.6549 4.31251 14.1417V31.8589C4.31342 32.3711 4.45031 32.8739 4.70918 33.3159C4.96806 33.7579 5.33964 34.1232 5.78595 34.3745L21.5984 43.2691C21.9965 43.4862 22.4391 43.6092 22.8922 43.6284H23.1438C23.5854 43.6089 24.0163 43.4858 24.4016 43.2691L40.2141 34.3745C40.6604 34.1232 41.032 33.7579 41.2908 33.3159C41.5497 32.8739 41.6866 32.3711 41.6875 31.8589V14.1417C41.6901 13.6434 41.5599 13.1534 41.3102 12.7222ZM23 5.24719L37.3211 13.2972L31.8227 16.4238L17.3219 8.42766L23 5.24719ZM23.1617 21.3472L8.69689 13.2972L14.375 10.0988L28.8938 18.0948L23.1617 21.3472ZM24.4555 39.9448L24.5992 23.8448L30.3672 20.5566V27.4027C30.3672 27.7839 30.5187 28.1495 30.7882 28.4191C31.0578 28.6887 31.4235 28.8402 31.8047 28.8402C32.1859 28.8402 32.5516 28.6887 32.8212 28.4191C33.0908 28.1495 33.2422 27.7839 33.2422 27.4027V18.9214L38.8125 15.7589V31.8589L24.4555 39.9448Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-500">
                3.Development
                </h3>
                <p className="">
                Front-End Development, Back-End Development, Integration and Feature Implementation
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            {/* Item */}
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col space-y-4">
              <div className="h-6 w-6">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.3102 12.7222C41.3054 12.7222 41.3008 12.7203 41.2975 12.7169C41.2941 12.7136 41.2922 12.709 41.2922 12.7042C41.0325 12.262 40.6606 11.8963 40.2141 11.6441L24.4016 2.74954C23.9732 2.51034 23.4907 2.38477 23 2.38477C22.5094 2.38477 22.0269 2.51034 21.5984 2.74954L5.78595 11.6441C5.33947 11.8963 4.96754 12.262 4.70783 12.7042C4.70783 12.709 4.70593 12.7136 4.70256 12.7169C4.69919 12.7203 4.69462 12.7222 4.68986 12.7222V12.7581C4.44143 13.1768 4.31104 13.6549 4.31251 14.1417V31.8589C4.31342 32.3711 4.45031 32.8739 4.70918 33.3159C4.96806 33.7579 5.33964 34.1232 5.78595 34.3745L21.5984 43.2691C21.9965 43.4862 22.4391 43.6092 22.8922 43.6284H23.1438C23.5854 43.6089 24.0163 43.4858 24.4016 43.2691L40.2141 34.3745C40.6604 34.1232 41.032 33.7579 41.2908 33.3159C41.5497 32.8739 41.6866 32.3711 41.6875 31.8589V14.1417C41.6901 13.6434 41.5599 13.1534 41.3102 12.7222ZM23 5.24719L37.3211 13.2972L31.8227 16.4238L17.3219 8.42766L23 5.24719ZM23.1617 21.3472L8.69689 13.2972L14.375 10.0988L28.8938 18.0948L23.1617 21.3472ZM24.4555 39.9448L24.5992 23.8448L30.3672 20.5566V27.4027C30.3672 27.7839 30.5187 28.1495 30.7882 28.4191C31.0578 28.6887 31.4235 28.8402 31.8047 28.8402C32.1859 28.8402 32.5516 28.6887 32.8212 28.4191C33.0908 28.1495 33.2422 27.7839 33.2422 27.4027V18.9214L38.8125 15.7589V31.8589L24.4555 39.9448Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-500">
               Testing and Quality Assurance (QA)
                </h3>
                <p className="0">
                               Security and Compliance Testing: Ensure that data is protected, and that the app meets any regulatory requirements (e.g., GDPR for data privacy).

                </p>
              </div>
            </div>
            {/* Item */}
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col space-y-4">
              <div className="h-6 w-6">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.3102 12.7222C41.3054 12.7222 41.3008 12.7203 41.2975 12.7169C41.2941 12.7136 41.2922 12.709 41.2922 12.7042C41.0325 12.262 40.6606 11.8963 40.2141 11.6441L24.4016 2.74954C23.9732 2.51034 23.4907 2.38477 23 2.38477C22.5094 2.38477 22.0269 2.51034 21.5984 2.74954L5.78595 11.6441C5.33947 11.8963 4.96754 12.262 4.70783 12.7042C4.70783 12.709 4.70593 12.7136 4.70256 12.7169C4.69919 12.7203 4.69462 12.7222 4.68986 12.7222V12.7581C4.44143 13.1768 4.31104 13.6549 4.31251 14.1417V31.8589C4.31342 32.3711 4.45031 32.8739 4.70918 33.3159C4.96806 33.7579 5.33964 34.1232 5.78595 34.3745L21.5984 43.2691C21.9965 43.4862 22.4391 43.6092 22.8922 43.6284H23.1438C23.5854 43.6089 24.0163 43.4858 24.4016 43.2691L40.2141 34.3745C40.6604 34.1232 41.032 33.7579 41.2908 33.3159C41.5497 32.8739 41.6866 32.3711 41.6875 31.8589V14.1417C41.6901 13.6434 41.5599 13.1534 41.3102 12.7222ZM23 5.24719L37.3211 13.2972L31.8227 16.4238L17.3219 8.42766L23 5.24719ZM23.1617 21.3472L8.69689 13.2972L14.375 10.0988L28.8938 18.0948L23.1617 21.3472ZM24.4555 39.9448L24.5992 23.8448L30.3672 20.5566V27.4027C30.3672 27.7839 30.5187 28.1495 30.7882 28.4191C31.0578 28.6887 31.4235 28.8402 31.8047 28.8402C32.1859 28.8402 32.5516 28.6887 32.8212 28.4191C33.0908 28.1495 33.2422 27.7839 33.2422 27.4027V18.9214L38.8125 15.7589V31.8589L24.4555 39.9448Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-500">
                5. Deployment and Maintenance
                </h3>
                <p className="">
                  App Store Submission: Submit the app to app stores (Google Play for Android and the App Store for iOS) and comply with their submission guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mobiledev;
