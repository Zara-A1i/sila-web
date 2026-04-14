import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#D4F0ED_9%,#56DFCF_100%)] py-24 px-6">
      
      {/* ===== TOP CENTER TITLE ===== */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-gray-700">
          About <span className="text-teal-500">Us</span>
        </p>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT SIDE (IMAGES) ================= */}
        <div className="relative flex justify-center">

          {/* MAIN ROBOT CARD */}
          <div className="relative w-[320px] h-[400px] rounded-3xl overflow-hidden shadow-xl bg-[#6b7b8f]">
            <Image
              src="/robbot.jpg"
              alt="Robot"
              fill
              className="object-cover"
            />
          </div>

          {/* FLOATING CARD – TOP LEFT */}
          <div className="absolute -left-4 top-20 w-[90px] rounded-2xl bg-white p-2 shadow-lg">
            <Image
              src="/rol.jpg"
              alt="AI Icon"
              width={100}
              height={100}
              className="rounded-xl object-cover"
            />
          </div>

          {/* FLOATING CARD – BOTTOM LEFT */}
          <div className="absolute left-6 -bottom-10 w-[90px] rounded-2xl bg-white p-2 shadow-lg">
            <Image
              src="/mobile.jpg"
              alt="Mobile"
              width={100}
              height={100}
              className="rounded-xl object-cover"
            />
          </div>

          {/* FLOATING CARD – BOTTOM RIGHT */}
          <div className="absolute right-6 bottom-16 w-[90px] rounded-2xl bg-white p-2 shadow-lg">
            <Image
              src="/finger.jpg"
              alt="Touch"
              width={100}
              height={100}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* ================= RIGHT SIDE (TEXT) ================= */}
        <div>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            <span className="text-teal-500 font-semibold">Sila</span> is a
            forward‑thinking company founded by a group of talented founders
            with a shared vision of empowering businesses through innovative
            technology. Driven by passion and creativity, Sila transforms ideas
            into impactful digital solutions for the future.
          </p>

          <button className="inline-flex items-center gap-3 rounded-full bg-teal-400 px-6 py-3 text-white font-medium shadow-md hover:bg-teal-500 transition">
            Learn more
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}