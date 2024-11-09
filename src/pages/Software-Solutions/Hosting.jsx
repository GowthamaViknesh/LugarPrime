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
function Hosting() {
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

      {/* section-one-Start-Here */}
      <header>
      {/* Hero Container */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
          {/* Hero Title */}
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
           Best Hosting Services
          </h1>
          <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-6 lg:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus
          </p>
          {/* Hero Button */}
          <div className="flex items-stretch justify-center">
            <a
              href="#"
              className="mr-5 inline-block rounded-md bg-black px-8 py-4 text-center font-semibold text-white md:mr-6 lg:mr-8"
            >
              Get Started
            </a>
            
          </div>
        </div>
        {/* Hero Image */}
        <img
          src="https://cdn.prod.website-files.com/63aa9a07e473f30b8ea41b24/63cf1a2399195a595f8ebbaf_Hosting%20Animation.gif"
          alt=""
          className="inline-block max-h-[800px] w-full object-cover"
        />
      </div>
    </header>
      {/* section-one-End-Here */}
      {/* section-Two-Start-Here */}
     <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          How it works
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam,purus sit amet luctus magna fringilla urna
        </p>
        {/* Content */}
        <div className="mx-auto grid max-w-xl gap-6">
          {/* Item */}
          <div className="flex items-center justify-center rounded-sm bg-gray-100 px-6 py-4">
            <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
              <p className="text-sm font-bold sm:text-xl">1</p>
            </div>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit amet.
            </p>
          </div>
          {/* Item */}
          <div className="flex items-center justify-center rounded-sm bg-gray-100 px-6 py-4">
            <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
              <p className="text-sm font-bold sm:text-xl">2</p>
            </div>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit amet.
            </p>
          </div>
          {/* Item */}
          <div className="flex items-center justify-center rounded-sm bg-gray-100 px-6 py-4">
            <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
              <p className="text-sm font-bold sm:text-xl">3</p>
            </div>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit amet.
            </p>
          </div>
          {/* Item */}
          <div className="flex items-center justify-center rounded-sm bg-gray-100 px-6 py-4">
            <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
              <p className="text-sm font-bold sm:text-xl">4</p>
            </div>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit amet.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* section-Two-End-Here */}
    {/* section-Three-Start-Here */}
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14">
          Meet Flowspark
        </h2>
        <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base lg:mb-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <img
            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a30c42421ae3cbe5abb9_about%20image.svg"
            alt=""
            className="inline-block h-full w-full rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
            <h2 className="text-3xl font-bold md:text-5xl">Our Mission</h2>
            <p className="text-sm text-gray-500 sm:text-base">
              Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis
              bibendum ut. Vestibulum lorem sed risus ultricies tristique nulla.
              Vitae et leo duis ut diam quam. Bibendum arcu vitae elementum
              curabitur vitae nunc. Dictumst vestibulum rhoncus est
              pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper
              dignissim cras tincidunt lobortis feugiat vivamus.
              <br />
              <br />
              Massa id neque aliquam vestibulum morbi blandit. Nulla
              pellentesque dignissim enim sit amet venenatis.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* section-Three-End-Here */}
    {/* Section-Four-Start-Here */}
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Seamlessly Organize and Prioritize Tasks.
          </h2>
          <p className="mx-auto mb-8 mt-4 text-gray-500 md:mb-12 lg:mb-16">
            Lorem ipsum dolor sit amet consectetur adipiscing
          </p>
        </div>
        {/* Content */}
        <ul className="grid gap-5 sm:grid-cols-2 md:gap-4 lg:gap-6">
          {/* Item */}
          <li className="rounded-md bg-gray-100 p-8 md:p-10">
            <div className="flex items-center justify-between">
              <p className="mr-4 rounded-md bg-gray-300 px-4 py-2 font-semibold uppercase">
                Strategy
              </p>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.2972 10.8739L20.4472 5.0869C20.1603 4.97103 19.8397 4.97103 19.5528 5.0869L5.70277 10.8739C5.4697 10.9755 5.276 11.1505 5.15104 11.3724C5.02607 11.5943 4.97665 11.8511 5.01027 12.1037L7.3186 29.4647C7.34387 29.6509 7.41342 29.8283 7.52139 29.9819C7.62935 30.1355 7.77257 30.2608 7.93897 30.3472L19.4806 36.1343C19.6432 36.2105 19.8205 36.25 20 36.25C20.1795 36.25 20.3568 36.2105 20.5194 36.1343L32.061 30.3472C32.2274 30.2608 32.3706 30.1355 32.4786 29.9819C32.5866 29.8283 32.6561 29.6509 32.6814 29.4647L34.9897 12.1037C35.0233 11.8511 34.9739 11.5943 34.849 11.3724C34.724 11.1505 34.5303 10.9755 34.2972 10.8739V10.8739ZM25.7131 25.7176C25.5493 25.7902 25.3728 25.8296 25.1937 25.8334C24.979 25.8332 24.7684 25.7737 24.5852 25.6614C24.4019 25.5491 24.2531 25.3884 24.155 25.1968L22.9431 22.7518H17.0569L15.845 25.1968C15.7073 25.4731 15.4657 25.6831 15.1735 25.7808C14.8813 25.8785 14.5624 25.8558 14.2869 25.7176C14.0114 25.5795 13.8019 25.3373 13.7045 25.0442C13.6071 24.7512 13.6298 24.4314 13.7675 24.1551L18.9613 13.7385C19.0596 13.5472 19.2085 13.3868 19.3917 13.2748C19.575 13.1627 19.7854 13.1035 20 13.1035C20.2146 13.1035 20.425 13.1627 20.6083 13.2748C20.7915 13.3868 20.9404 13.5472 21.0387 13.7385L26.2325 24.1551C26.3645 24.4323 26.3841 24.7501 26.2873 25.0415C26.1904 25.3329 25.9846 25.5753 25.7131 25.7176V25.7176ZM20 16.849L21.789 20.437H18.211L20 16.849Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            {/* Divider */}
            <div className="mb-20 mt-4 h-0.5 w-full bg-gray-300"></div>
            <p className="mb-3 text-xl font-semibold">
              Intuitive Calendar Interface
            </p>
            <p className="text-sm text-gray-500">
              The XYZ Payment App is a user-friendly mobile application that
              revolutionizes the way you handle your payments and transactions.
              With its intuitive interface and robust functionality.
            </p>
          </li>
          {/* Item */}
          <li className="rounded-md bg-gray-100 p-8 md:p-10">
            <div className="flex  items-center justify-between">
              <p className="mr-4 rounded-md bg-gray-300 px-4 py-2 font-semibold uppercase">
                Strategy
              </p>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.2972 10.8739L20.4472 5.0869C20.1603 4.97103 19.8397 4.97103 19.5528 5.0869L5.70277 10.8739C5.4697 10.9755 5.276 11.1505 5.15104 11.3724C5.02607 11.5943 4.97665 11.8511 5.01027 12.1037L7.3186 29.4647C7.34387 29.6509 7.41342 29.8283 7.52139 29.9819C7.62935 30.1355 7.77257 30.2608 7.93897 30.3472L19.4806 36.1343C19.6432 36.2105 19.8205 36.25 20 36.25C20.1795 36.25 20.3568 36.2105 20.5194 36.1343L32.061 30.3472C32.2274 30.2608 32.3706 30.1355 32.4786 29.9819C32.5866 29.8283 32.6561 29.6509 32.6814 29.4647L34.9897 12.1037C35.0233 11.8511 34.9739 11.5943 34.849 11.3724C34.724 11.1505 34.5303 10.9755 34.2972 10.8739V10.8739ZM25.7131 25.7176C25.5493 25.7902 25.3728 25.8296 25.1937 25.8334C24.979 25.8332 24.7684 25.7737 24.5852 25.6614C24.4019 25.5491 24.2531 25.3884 24.155 25.1968L22.9431 22.7518H17.0569L15.845 25.1968C15.7073 25.4731 15.4657 25.6831 15.1735 25.7808C14.8813 25.8785 14.5624 25.8558 14.2869 25.7176C14.0114 25.5795 13.8019 25.3373 13.7045 25.0442C13.6071 24.7512 13.6298 24.4314 13.7675 24.1551L18.9613 13.7385C19.0596 13.5472 19.2085 13.3868 19.3917 13.2748C19.575 13.1627 19.7854 13.1035 20 13.1035C20.2146 13.1035 20.425 13.1627 20.6083 13.2748C20.7915 13.3868 20.9404 13.5472 21.0387 13.7385L26.2325 24.1551C26.3645 24.4323 26.3841 24.7501 26.2873 25.0415C26.1904 25.3329 25.9846 25.5753 25.7131 25.7176V25.7176ZM20 16.849L21.789 20.437H18.211L20 16.849Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            {/* Divider */}
            <div className="mb-20 mt-4 h-0.5 w-full bg-gray-300"></div>
            <p className="mb-3 text-xl font-semibold">
              Intuitive Calendar Interface
            </p>
            <p className="text-sm text-gray-500">
              The XYZ Payment App is a user-friendly mobile application that
              revolutionizes the way you handle your payments and transactions.
              With its intuitive interface and robust functionality.
            </p>
          </li>
          {/* Item */}
          <li className="rounded-md bg-gray-100 p-8 md:p-10">
            <div className="flex  items-center justify-between">
              <p className="mr-4 rounded-md bg-gray-300 px-4 py-2 font-semibold uppercase">
                Strategy
              </p>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.2972 10.8739L20.4472 5.0869C20.1603 4.97103 19.8397 4.97103 19.5528 5.0869L5.70277 10.8739C5.4697 10.9755 5.276 11.1505 5.15104 11.3724C5.02607 11.5943 4.97665 11.8511 5.01027 12.1037L7.3186 29.4647C7.34387 29.6509 7.41342 29.8283 7.52139 29.9819C7.62935 30.1355 7.77257 30.2608 7.93897 30.3472L19.4806 36.1343C19.6432 36.2105 19.8205 36.25 20 36.25C20.1795 36.25 20.3568 36.2105 20.5194 36.1343L32.061 30.3472C32.2274 30.2608 32.3706 30.1355 32.4786 29.9819C32.5866 29.8283 32.6561 29.6509 32.6814 29.4647L34.9897 12.1037C35.0233 11.8511 34.9739 11.5943 34.849 11.3724C34.724 11.1505 34.5303 10.9755 34.2972 10.8739V10.8739ZM25.7131 25.7176C25.5493 25.7902 25.3728 25.8296 25.1937 25.8334C24.979 25.8332 24.7684 25.7737 24.5852 25.6614C24.4019 25.5491 24.2531 25.3884 24.155 25.1968L22.9431 22.7518H17.0569L15.845 25.1968C15.7073 25.4731 15.4657 25.6831 15.1735 25.7808C14.8813 25.8785 14.5624 25.8558 14.2869 25.7176C14.0114 25.5795 13.8019 25.3373 13.7045 25.0442C13.6071 24.7512 13.6298 24.4314 13.7675 24.1551L18.9613 13.7385C19.0596 13.5472 19.2085 13.3868 19.3917 13.2748C19.575 13.1627 19.7854 13.1035 20 13.1035C20.2146 13.1035 20.425 13.1627 20.6083 13.2748C20.7915 13.3868 20.9404 13.5472 21.0387 13.7385L26.2325 24.1551C26.3645 24.4323 26.3841 24.7501 26.2873 25.0415C26.1904 25.3329 25.9846 25.5753 25.7131 25.7176V25.7176ZM20 16.849L21.789 20.437H18.211L20 16.849Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            {/* Divider */}
            <div className="mb-20 mt-4 h-0.5 w-full bg-gray-300"></div>
            <p className="mb-3 text-xl font-semibold">
              Intuitive Calendar Interface
            </p>
            <p className="text-sm text-gray-500">
              The XYZ Payment App is a user-friendly mobile application that
              revolutionizes the way you handle your payments and transactions.
              With its intuitive interface and robust functionality.
            </p>
          </li>
          {/* Item */}
          <li className="rounded-md bg-gray-100 p-8 md:p-10">
            <div className="flex  items-center justify-between">
              <p className="mr-4 rounded-md bg-gray-300 px-4 py-2 font-semibold uppercase">
                Strategy
              </p>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.2972 10.8739L20.4472 5.0869C20.1603 4.97103 19.8397 4.97103 19.5528 5.0869L5.70277 10.8739C5.4697 10.9755 5.276 11.1505 5.15104 11.3724C5.02607 11.5943 4.97665 11.8511 5.01027 12.1037L7.3186 29.4647C7.34387 29.6509 7.41342 29.8283 7.52139 29.9819C7.62935 30.1355 7.77257 30.2608 7.93897 30.3472L19.4806 36.1343C19.6432 36.2105 19.8205 36.25 20 36.25C20.1795 36.25 20.3568 36.2105 20.5194 36.1343L32.061 30.3472C32.2274 30.2608 32.3706 30.1355 32.4786 29.9819C32.5866 29.8283 32.6561 29.6509 32.6814 29.4647L34.9897 12.1037C35.0233 11.8511 34.9739 11.5943 34.849 11.3724C34.724 11.1505 34.5303 10.9755 34.2972 10.8739V10.8739ZM25.7131 25.7176C25.5493 25.7902 25.3728 25.8296 25.1937 25.8334C24.979 25.8332 24.7684 25.7737 24.5852 25.6614C24.4019 25.5491 24.2531 25.3884 24.155 25.1968L22.9431 22.7518H17.0569L15.845 25.1968C15.7073 25.4731 15.4657 25.6831 15.1735 25.7808C14.8813 25.8785 14.5624 25.8558 14.2869 25.7176C14.0114 25.5795 13.8019 25.3373 13.7045 25.0442C13.6071 24.7512 13.6298 24.4314 13.7675 24.1551L18.9613 13.7385C19.0596 13.5472 19.2085 13.3868 19.3917 13.2748C19.575 13.1627 19.7854 13.1035 20 13.1035C20.2146 13.1035 20.425 13.1627 20.6083 13.2748C20.7915 13.3868 20.9404 13.5472 21.0387 13.7385L26.2325 24.1551C26.3645 24.4323 26.3841 24.7501 26.2873 25.0415C26.1904 25.3329 25.9846 25.5753 25.7131 25.7176V25.7176ZM20 16.849L21.789 20.437H18.211L20 16.849Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            {/* Divider */}
            <div className="mb-20 mt-4 h-0.5 w-full bg-gray-300"></div>
            <p className="mb-3 text-xl font-semibold">
              Intuitive Calendar Interface
            </p>
            <p className="text-sm text-gray-500">
              The XYZ Payment App is a user-friendly mobile application that
              revolutionizes the way you handle your payments and transactions.
              With its intuitive interface and robust functionality.
            </p>
          </li>
        </ul>
      </div>
    </section>
    {/* Section-Four-End-Here */}
    </div>
  )
}

export default Hosting
