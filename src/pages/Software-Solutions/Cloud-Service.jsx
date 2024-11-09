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
function CloudService() {
  return (
    <div className='py-20'>
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
     <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col gap-8 sm:gap-20 lg:flex-row-reverse lg:items-center">
          {/* Item */}
          <div className="lg:w-1/2">
            {/* Title */}
            <h2 className="mb-4 max-w-3xl text-3xl font-bold md:text-5xl text-red-500">
            Empower your website with the <span className='text-blue-500'>cloud</span> 
            </h2>
            <p className="mb-6 max-w-lg text-sm  sm:text-base md:mb-10 lg:mb-12">
            Best Cloud Hosting Services
            </p>
            <div className="mb-12 mt-12 h-0 w-40 border [border-top-style:solid]"></div>
            {/* List */}
            <ul className="flex flex-col">
              <li className="mb-2 flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                  alt=""
                  className="mr-2 inline-block h-4 w-4"
                />
                <p className=" text-sm sm:text-base py-3">
                  <span className='text-blue-600'>Free Domain</span> and SSL
                </p>
              </li>
              <li className="mb-2 flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                  alt=""
                  className="mr-2 inline-block h-4 w-4"
                />
                <p className=" text-sm sm:text-base py-3">
                 Free Website migration
                </p>
              </li>
              <li className="mb-2 flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                  alt=""
                  className="mr-2 inline-block h-4 w-4"
                />
                <p className=" text-sm sm:text-base py-3">
                  Automatic Backups
                </p>
              </li>
              <li className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                  alt=""
                  className="mr-2 inline-block h-4 w-4"
                />
                <p className=" max-[479px]:text-sm py-3">
                 24/7 Cuustomer support
                </p>
              </li>
            </ul>
          </div>
          {/* Item */}
          <div className="lg:w-1/2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    {/* Section-one-end-Here */}
    {/* Section-Two-start-Here */}
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2 lg:gap-5">
          <div>
            <h2 className="mb-6 max-w-2xl text-3xl font-bold md:mb-10 md:text-5xl lg:mb-12">
              Lightning Fast Webflow Dev Made Easy
            </h2>
            {/* List */}
            <ul className="grid max-w-lg grid-cols-2 gap-4">
              <li className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg"
                  alt=""
                  className="mr-2 h-8 w-8"
                />
                <p className="text-sm sm:text-base">300+ UI Blocks</p>
              </li>
              <li className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg"
                  alt=""
                  className="mr-2 h-8 w-8"
                />
                <p className="text-sm sm:text-base">Fully responsive</p>
              </li>
              <li className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg"
                  alt=""
                  className="mr-2 h-8 w-8"
                />
                <p className="text-sm sm:text-base">New UI Blocks</p>
              </li>
              <li className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg"
                  alt=""
                  className="mr-2 h-8 w-8"
                />
                <p className="text-sm sm:text-base">Just copy & paste</p>
              </li>
              <li className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg"
                  alt=""
                  className="mr-2 h-8 w-8"
                />
                <p className="text-sm sm:text-base">New UI Blocks</p>
              </li>
              <li className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg"
                  alt=""
                  className="mr-2 h-8 w-8"
                />
                <p className="text-sm sm:text-base">Just copy & paste</p>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://onohosting.com/img/2023/vps/cpanel-vps-hosting.jpg"
              alt=""
              className="mx-auto inline-block h-full w-full max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
    {/* Section-two-end-Here */}
    {/* Section-three-start-Here */}
    <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">Best managed cloud with simplicity, scalability & security</h2>
            <p className="text-base font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">Embrace the agility of cloud hosting features, where flexibility meets performance to fuel your digital innovation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
            <div className="relative w-full h-auto md:col-span-2">
              <div className="bg-gray-800 rounded-2xl flex  justify-between flex-row flex-wrap">
                <div className="p-5  xl:p-8 w-full md:w-1/2 ">
                  <div className="block">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                  Limitless scalability for excellence.
                  </h3>
                  <p className="text-xs font-normal text-gray-300 w-full mb-8 xl:w-64">Commence your online presence modestly with cloud hosting, and watch it flourish effortlessly. With unmatched flexibility, amplify your server's capabilities instantly with a simple click, paving the way for substantial growth.</p>
                  <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                    View More
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                  </button>
                </div>
                <div className="relative hidden h-auto md:w-1/2 md:block">
                  <img src="https://pagedone.io/asset/uploads/1695028873.png" alt="Header tailwind Section" className="h-full ml-auto object-cover" />
                </div>
              </div>
            </div>
            <div className="relative w-full h-auto">
              <div className="bg-indigo-500 rounded-2xl p-5  xl:p-8 h-full">
                <div className="block">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                </div>
                <h3 className="py-5 text-white text-lg font-bold xl:text-xl">Instant setup & website launch
                </h3>
                <p className="text-xs font-normal text-white mb-8">Get top-tier cloud hosting solutions with instant activation and get speed, security, and flexibility. Our expert team assists you with an effortless instant setup process along with security features, on-demand backups, and free SSL certificates. </p>
                {/* <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                  View More
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>

                </button> */}
              </div>
            </div>
            <div className="relative w-full h-auto">
              <div className="bg-violet-500 rounded-2xl p-5 xl:p-8 h-full">
                <div className="block">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                  </svg>

                </div>
                <h3 className="py-5 text-white text-lg font-bold xl:text-xl">Boosted built-in caching tool</h3>
                <p className="text-xs font-normal text-white mb-8">Experience the website's speed and SEO with integrated caching. All our managed cloud hosting plans include a built-in cache manager that never lets your website loading times drag down and delivers the best performance. </p>
                {/* <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                  View More
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>

                </button> */}
              </div>
            </div>

          </div>
        </div>
      </section>
    {/* Section-three-end-Here */}
    {/* Section-four-start-Here */}
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 bg-lime-100 rounded-lg">
        {/* Title */}
        <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-4xl lg:mb-16 lg:text-5xl">
        Dominate the web with blazing fast speed
        </h2>
        {/* Content */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-15">
          {/* Image */}
          <img
            alt=""
            src="https://www.milesweb.in/assets/images/cloud-hosting/core-web-vitals.png"
            className="inline-block h-[350px] max-h-lg w-full max-w-md object-cover"
          />
          {/* List */}
          <div className="flex flex-col gap-8 lg:justify-between">
            <a
              className="flex max-w-md rounded-md p-4 text-gray-500 border-l-4 border-black  [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]"
              
            >
              <img
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-4 flex flex-col">
                <p className="font-semibold text-black">Global speed with unmatched performance</p>
                <p className="text-sm text-gray-500">
                Make your websites reach a worldwide audience with our extensive network connections. Get access to a global reach and experience unparalleled website performance. Enjoy lightning-fast site loading speeds and an exceptional user experience for your visitors with our global data center locations.
                </p>
              </div>
            </a>
            <a
              className="flex max-w-md rounded-md border-l-4 border-black p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]"
            >
              <img
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-4 flex flex-col">
                <p className="font-semibold text-black">Search engine optimization made easy</p>
                <p className="text-sm text-gray-500">
                We understand that SEO optimization is the power of the website. Google and other search engines rank your websites at the top if they are optimized perfectly. We help you boost your website by optimizing it with our cutting-edge technology and eliminating slow load times.
                </p>
              </div>
            </a>
            <a
              className="flex max-w-md rounded-md p-4  border-l-4 border-black [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]"
            >
              <img
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-4 flex flex-col">
                <p className="font-semibold text-black">Say hello to increased sales</p>
                <p className="text-sm text-gray-500">
                Don't let slow loading times steal your hard-earned traffic. We promise to deliver your website loads at record speed, keeping visitors engaged and driving conversions. Now, say goodbye to slow loading speeds, slow website response, and lost sales.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Section-four-end-Here */}
    {/* Section-five-start-here */}
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="flex flex-col gap-14 lg:gap-20">
          {/* Image */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2Fbg-about.png?alt=media&token=0d5ea1c5-61cf-4b0d-beab-bd023e3d9ee8"
            alt=""
            className="w-full"
          />
          <h1 className='text-center text-5xl font-bold'>Cloud hosting services FAQs</h1>
          {/* Content */}
          <div className="flex flex-col gap-14 lg:gap-20">
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-2xl  flex-1">
              What is Cloud Hosting?
              </h2>
              <p className="flex-1">
              Basically, cloud hosting is the combination of full power and reliability of a VPS with the simplicity of a shared hosting platform to create an optimized hosting environment. On the contrary to traditional hosting, cloud hosting uses an interconnected network of servers to deliver higher availability, security and faster performance to websites and applications.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-2xl flex-1">
              Do you offer a control panel with cloud hosting?
              </h2>
              <p className="flex-1">
              Yes! We offer a powerful cPanel control panel to make your cloud server management a breeze. Through a single, user-friendly dashboard, you can manage your websites, emails, databases, install softwares and more with ease. We aim to make managed cloud hosting services simple and efficient for you!
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-2xl  flex-1">
              Which storage do you use for cloud server hosting?
              </h2>
              <p className="flex-1">
              We utilize SSD NVMe storage with our best cloud hosting plans. This way, you get faster loading times, performance and reliability for your website or application.
              You can experience an instant performance boost with our 100% SSD-NVMe based cloud servers, CDN, LiteSpeed + LSCache and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section-five-end-here */}
    
    </div>
  )
}

export default CloudService
