import React from "react";

const courses = [
  {
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    image: "/spring.png",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
  },
];

function CourseCard() {
  const course = courses[0];

  return (
    <div className="w-[440px] max-w-[calc(100vw-40px)] overflow-hidden rounded-[26px] border border-gray-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.07)]">
      {/* Course image */}
      <div className="relative h-[230px] p-4">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full rounded-[18px] object-cover"
        />

        {/* Image information */}
        <div className="absolute bottom-7 left-7 flex gap-2">
          <span className="rounded-full bg-white/90 px-4 py-2 text-[13px] font-medium text-gray-700 backdrop-blur-sm">
            {course.lessons}
          </span>

          <span className="rounded-full bg-white/90 px-4 py-2 text-[13px] font-medium text-gray-700 backdrop-blur-sm">
            {course.duration}
          </span>
        </div>
      </div>

      {/* Course details */}
      <div className="px-5 pb-5">
        <h3 className="text-[24px] font-semibold leading-[1.2] text-[#111111]">
          {course.title}
        </h3>

        <p className="mt-1 text-[14px] text-gray-500">
          by{" "}
          <span className="text-blue-600">
            {course.instructor}
          </span>
        </p>

        <div className="mt-5 flex items-center gap-3">
          {/* Level */}
          <span className="flex items-center gap-2 rounded-full bg-[#f4f4f5] px-4 py-2 text-[13px] font-medium text-gray-600">
            <span className="text-[15px]">▥</span>
            {course.level}
          </span>

          {/* Rating */}
          <span className="flex items-center gap-1 text-[13px] text-gray-500">
            <span className="text-yellow-400">★</span>
            {course.rating}
          </span>
        </div>

        {/* Price */}
        <div className="mt-5 flex items-end gap-1">
          <span className="text-[27px] font-semibold leading-none text-blue-600">
            {course.price}
          </span>

          <span className="mb-[1px] text-[13px] text-gray-400">
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
}

function ProgressCard() {
  return (
    <div className="w-[275px] rounded-[23px] bg-white px-6 py-5 shadow-[0_15px_45px_rgba(0,0,0,0.08)]">
      <p className="text-[15px] font-medium text-gray-700">
        Learning Progress
      </p>

      <p className="mt-3 text-[55px] font-semibold leading-none tracking-[-2px] text-[#202124]">
        55%
      </p>

      <div className="mt-5 h-[9px] overflow-hidden rounded-full bg-[#eeeeee]">
        <div className="h-full w-[55%] rounded-full bg-[#b9f500]" />
      </div>
    </div>
  );
}

function LimeDecoration() {
  return (
    <div className="absolute right-[-10px] top-[85px] z-30 h-[190px] w-[135px] rotate-[8deg]">
      <span className="absolute left-3 top-0 h-[31px] w-[88px] rotate-[-8deg] rounded-full bg-[#baff00]" />

      <span className="absolute left-[-3px] top-[34px] h-[32px] w-[112px] rotate-[-12deg] rounded-full bg-[#baff00]" />

      <span className="absolute left-0 top-[70px] h-[32px] w-[120px] rotate-[-12deg] rounded-full bg-[#baff00]" />

      <span className="absolute left-[13px] top-[108px] h-[32px] w-[105px] rotate-[-10deg] rounded-full bg-[#baff00]" />

      <span className="absolute left-[26px] top-[145px] h-[31px] w-[75px] rotate-[-8deg] rounded-full bg-[#baff00]" />
    </div>
  );
}

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafaf8]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Lime glow — top left */}
        <div
          className="absolute -left-[180px] -top-[190px] h-[700px] w-[900px]"
          style={{
            background:
              "radial-gradient(circle, rgba(220,255,120,0.72) 0%, rgba(220,255,120,0.38) 32%, rgba(220,255,120,0.12) 52%, rgba(220,255,120,0) 73%)",
          }}
        />

        {/* Blue glow — bottom left */}
        <div
          className="absolute -bottom-[330px] -left-[230px] h-[750px] w-[850px]"
          style={{
            background:
              "radial-gradient(circle, rgba(190,205,255,0.48) 0%, rgba(210,220,250,0.25) 38%, rgba(220,225,250,0) 72%)",
          }}
        />

        {/* Pale blue/lavender glow — top right */}
        <div
          className="absolute -right-[250px] -top-[200px] h-[650px] w-[800px]"
          style={{
            background:
              "radial-gradient(circle, rgba(220,225,250,0.62) 0%, rgba(232,235,250,0.35) 40%, rgba(240,242,250,0) 72%)",
          }}
        />

        {/* Very subtle center light */}
        <div
          className="absolute left-[38%] top-[20%] h-[500px] w-[500px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
      </div>

      {/* =====================================================
          MAIN SECTION
      ====================================================== */}

      <section className="relative mx-auto flex min-h-screen max-w-[1800px] items-center px-6 py-14 sm:px-10 lg:px-[8%]">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-10 max-w-[680px]">
            <h1 className="text-[42px] font-bold leading-[1.08] tracking-[-1.8px] text-[#202124] sm:text-[50px] lg:text-[56px]">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h1>

            <p className="mt-10 max-w-[620px] text-[17px] leading-[1.7] text-[#5d6066] sm:text-[19px] lg:text-[20px]">
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey.
              Whether you are looking to sharpen specific skills, gain
              industry expertise, or embark on a new career path entirely,
              we have the resources you need.
            </p>

            {/* =================================================
                STATS
            ================================================== */}

            <div className="mt-11 flex flex-wrap gap-x-14 gap-y-8 sm:gap-x-16">
              {/* Students */}
              <div>
                <div className="text-[38px] font-semibold leading-none tracking-[-1px] text-[#1247d9] sm:text-[42px]">
                  12K
                </div>

                <div className="mt-3 text-[17px] text-[#5d6066]">
                  Students
                </div>
              </div>

              {/* Courses */}
              <div>
                <div className="text-[38px] font-semibold leading-none tracking-[-1px] text-[#1247d9] sm:text-[42px]">
                  70+
                </div>

                <div className="mt-3 text-[17px] text-[#5d6066]">
                  Courses
                </div>
              </div>

              {/* Creators */}
              <div>
                <div className="text-[38px] font-semibold leading-none tracking-[-1px] text-[#1247d9] sm:text-[42px]">
                  16
                </div>

                <div className="mt-3 text-[17px] text-[#5d6066]">
                  Creators
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================== */}

          <div className="relative mx-auto h-[570px] w-full max-w-[720px] sm:h-[630px] lg:h-[680px]">

            {/* =================================================
                COURSE CARD
            ================================================== */}

            <div className="absolute left-[0%] top-[2%] z-20 sm:left-[2%]">
              <CourseCard />
            </div>

            {/* =================================================
                PERSON IMAGE
            ================================================== */}

            <div className="absolute bottom-[-15px] right-[4%] z-10 sm:right-[8%]">
              <img
                src="/person.png"
                alt="Student using a laptop"
                className="h-[470px] w-auto object-contain sm:h-[560px] lg:h-[620px]"
              />
            </div>

            {/* =================================================
                PROGRESS CARD
            ================================================== */}

            <div className="absolute right-[-1%] top-[42%] z-40 sm:right-[0%]">
              <ProgressCard />
            </div>

            {/* =================================================
                LIME DECORATION
            ================================================== */}

            <LimeDecoration />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;