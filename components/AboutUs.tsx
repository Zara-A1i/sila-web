import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#D4F0ED_9%,#56DFCF_100%)] py-24 px-6">
      
      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          About <span className="text-teal-500">Us</span>
        </h2>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE COMPOSITION */}
        <div className="flex justify-center">
          <div className="relative w-[360px] h-[420px]">

            {/* Main */}
            <div className="absolute left-12 top-0 w-[280px] h-[360px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                           src="/robbot.jpg"
                           alt="Robot"
                           fill
                           className="object-cover"
                         />
            </div>

            {/* Top Left */}
            <div className="absolute  right-85 top-0 w-[72px] h-[72px] rounded-xl overflow-hidden shadow-lg">
              <Image
                           src="/3d digital spacce.jpg"
                           alt="digital"
                           width={100}
                           height={100}
                           className="rounded-xl object-cover"
                         />
            </div>

            {/* Bottom Left */}
            <div className="absolute left-4 bottom-6 w-[160px] h-[120px] rounded-2xl overflow-hidden ">
             <Image
                          src="/rol.jpg"
                          alt="rol"
                          width={100}
                          height={100}
                          className="rounded-xl object-cover"
                        />
            </div>

            {/* Small Circle */}
            <div className="absolute left-45 top-75  w-[120px] h-[100px] rounded-2x1 overflow-hidden ">
              <Image
                          src="/rop.jpg"
                          alt="rop"
                          width={100}
                          height={100}
                          className="rounded-xl object-cover"
                        />
            </div>

            {/* Right Bottom */}
            <div className="absolute right-0 bottom-16 w-[100px] h-[140px] rounded-2xl overflow-hidden ">
             <Image
                          src="/finger.jpg"
                          alt="Touch"
                          width={100}
                          height={100}
                          className="rounded-xl object-cover"
                        />
            </div>

          </div>
        </div>

        {/* TEXT */}
        <div>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            <span className="text-teal-500 font-semibold">Sila</span> is a
            forward‑thinking company founded by a group of talented founders
            with a shared vision of empowering businesses through innovative
            technology. Driven by passion and creativity, Sila transforms ideas
            into impactful digital solutions for the future.
          </p>

          <button className="inline-flex items-center gap-3 rounded-full bg-teal-400 px-6 py-3 text-white font-medium shadow-md hover:bg-teal-500 transition">
            Learn more →
          </button>
        </div>

      </div>
    </section>
  );
}