import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section
      id="WhyChooseUs"
      className="relative w-full min-h-screen bg-gradient-to-r from-white to-teal-100 overflow-hidden px-4 sm:px-6 md:px-16 py-20 sm:py-24 lg:py-30"
    >
      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Content */}
        <div className="z-10 flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 leading-tight">
            <span className="text-black">Why </span>
            <span className="text-teal-500">Us</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto md:mx-0">
            Sila empowers startups and small businesses with innovative digital
            solutions that connect them to the future. By integrating AI-assisted
            technologies, we enhance efficiency and enable smarter business
            operations. Our strong focus on communication ensures personalized
            services that truly meet our clients’ needs.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              href="https://wa.me/252612544819"
              className="bg-[#0ABAB5] hover:bg-[#56DFCF] text-[#F4FFFD] px-16 py-6 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Side (Visual Area) */}
        <div className="relative w-full h-[420px] sm:h-[480px] md:h-full">

          {/* Man Image */}
          <div
            className="absolute left-1/2 md:left-[50px] top-12 md:top-[70px] w-[280px] sm:w-[340px] md:w-[400.75px] h-[230px] sm:h-[280px] md:h-[333.26px] -translate-x-1/2 md:translate-x-0 rotate-[1.13deg]"
          >
            <Image
              src="/Happy man.jpg"
              alt="Person using laptop"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Circles */}
          <div className="absolute right-6 md:right-[150px] top-14 md:top-[80px] bg-white w-16 h-16 md:w-19 md:h-19 rounded-full shadow-md flex items-center justify-center z-30">
            <Image src="/artificial-intellegence.png" alt="AI Icon" width={40} height={40} />
          </div>

          <div className="absolute right-4 md:right-[120px] top-36 md:top-[190px] bg-white w-16 h-16 md:w-19 md:h-19 rounded-full shadow-md flex items-center justify-center z-30">
            <Image src="/strategy.png" alt="Idea Icon" width={40} height={40} />
          </div>

          <div className="absolute right-6 md:right-[125px] top-60 md:top-[300px] bg-white w-16 h-16 md:w-19 md:h-19 rounded-full shadow-md flex items-center justify-center z-30">
            <Image src="/social-marketing.png" alt="Marketing Icon" width={40} height={40} />
          </div>

          <div className="absolute right-20 md:right-[200px] top-72 md:top-[370px] bg-white w-16 h-16 md:w-19 md:h-19 rounded-full shadow-md flex items-center justify-center z-30 hidden sm:flex">
            <Image src="/cryptocurrecncy.png" alt="Crypto Icon" width={40} height={40} />
          </div>

          {/* Chart */}
          <div className="absolute top-64 sm:top-70 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 bg-white p-3 sm:p-4 rounded-lg shadow-md z-20">
            <Image src="/Group 23.png" alt="Growth chart" width={200} height={130} />
          </div>

          {/* Right Decorative Logo */}
          <div className="absolute hidden md:flex right-[-250px] top-[255px] items-center justify-center z-20 opacity-80">
            <Image src="/Union (1).png" alt="Decorative shape" width={490} height={490} />
          </div>

          {/* Left Decorative Logo */}
          <div className="absolute hidden lg:flex left-[-950px] bottom-[20px] items-center justify-center z-0 opacity-50 pointer-events-none">
            <Image src="/Union (1).png" alt="Decorative shape" width={590} height={590} />
          </div>
        </div>
      </div>
    </section>
  );
}