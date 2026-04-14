import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="relative min-h-screen w-screen bg-gradient-to-r from-white to-teal-100 overflow-hidden px-6 md:px-16 py-30">

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="z-10 flex flex-col justify-center h-full">
          <h2 className="text-5xl md:text-5xl font-semibold mb-8 leading-tight text-center">
            <span className="text-black">Why </span>
            <span className="text-teal-500">Us</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
            Sila empowers startups and small businesses with innovative digital
            solutions that connect them to the future. By integrating AI-assisted
            technologies, we enhance efficiency and enable smarter business
            operations. Our strong focus on communication ensures personalized
            services that truly meet our clients’ needs.
          </p>

          <div>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full transition text-lg">
              Get started →
            </button>
          </div>
        </div>

        {/* Right Side (Visual Area) */}
        <div className="relative w-full h-full">
          
          {/* Man Image */}
          <div
            className="absolute"
            style={{
              left: "50px",
              top: "70px",
              width: "400.75px",
              height: "333.26px",
              transform: "rotate(1.13deg)",
            }}
          >
            <Image
              src="/Happy man.jpg"
              alt="Person using laptop"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Circles */}
          <div className="absolute right-[150px] top-[80px] bg-white w-14 h-14 rounded-full shadow-md flex items-center justify-center z-30">
            <Image src="/artificial-intellegence.png" alt="AI Icon" width={40} height={40} />
          </div>

          <div className="absolute right-[120px] top-[190px] bg-white w-14 h-14 rounded-full shadow-md flex items-center justify-center z-30">
            <Image src="/strategy.png" alt="Idea Icon" width={40} height={40} />
          </div>

          <div className="absolute right-[125px] top-[300px] bg-white w-14 h-14 rounded-full shadow-md flex items-center justify-center z-30">
            <Image src="/social-marketing.png" alt="Team Icon" width={40} height={40} />
          </div>

          <div className="absolute right-[200px] top-[370px] bg-white w-14 h-14 rounded-full shadow-md flex items-center justify-center z-30">
            <Image src="/cryptocurrecncy.png" alt="Settings Icon" width={40} height={40} />
          </div>

          {/* Chart */}
          <div className="absolute top-70 left-0 bg-white p-4 rounded-lg shadow-md z-20">
            <Image
              src="/Group 23.png"
              alt="Growth chart"
              width={220}
              height={140}
            />
          </div>

          {/* Right Decorative Logo */}
          <div className="absolute right-[-250px] top-[255px] flex items-center justify-center z-20 opacity-80">
            <Image src="/Union (1).png" alt="Decorative shape" width={490} height={490} />
          </div>

          {/* Left Top Decorative Logo (FIXED) */}
          <div className="absolute left-[-950px] bottom-[20px] flex items-center justify-center z-0 opacity-50 pointer-events-none">
            <Image src="/Union (1).png" alt="Decorative shape" width={590} height={590} />
          </div>
        </div>
      </div>
    </section>
  );
}
