import React from "react";

const courses = [
  {
    title: "UI/UX Design Masterclass",
    instructor: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    rating: "4.9",
    lessons: "28 Lessons",
    duration: "3h 45m",
    level: "Beginner",
    price: "$29",
  },
];

function CourseCard() {
  const course = courses[0];

  return (
    <div className="w-[420px] max-w-[calc(100vw-40px)] overflow-hidden rounded-[26px] border border-gray-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.07)]">
      <div className="relative h-[220px] p-4">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full rounded-[18px] object-cover"
        />

        <div className="absolute bottom-7 left-7 flex gap-2">
          <span className="rounded-full bg-white/90 px-4 py-2 text-[13px] font-medium text-gray-700 backdrop-blur-sm">
            {course.lessons}
          </span>

          <span className="rounded-full bg-white/90 px-4 py-2 text-[13px] font-medium text-gray-700 backdrop-blur-sm">
            {course.duration}
          </span>
        </div>
      </div>

      <div className="px-5 pb-5">
        <h3 className="text-[23px] font-semibold leading-[1.2] text-[#111111]">
          {course.title}
        </h3>

        <p className="mt-1 text-[14px] text-gray-500">
          by{" "}
          <span className="text-blue-600">
            {course.instructor}
          </span>
        </p>

        <div className="mt-5 flex items-center gap-3">
          <span className="flex items-center gap-2 rounded-full bg-[#f4f4f5] px-4 py-2 text-[13px] font-medium text-gray-600">
            <span className="text-[15px]">▥</span>
            {course.level}
          </span>

          <span className="flex items-center gap-1 text-[13px] text-gray-500">
            <span className="text-yellow-400">★</span>
            {course.rating}
          </span>
        </div>

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
    <div className="w-[235px] rounded-[23px] bg-white px-6 py-5 shadow-[0_15px_45px_rgba(0,0,0,0.08)]">
      <p className="text-[15px] font-medium text-gray-700">
        Course Progress
      </p>

      <p className="mt-3 text-[50px] font-semibold leading-none tracking-[-2px] text-[#202124]">
        72%
      </p>

      <div className="mt-5 h-[9px] overflow-hidden rounded-full bg-[#eeeeee]">
        <div className="h-full w-[72%] rounded-full bg-[#b9f500]" />
      </div>
    </div>
  );
}

function LimeDecoration() {
  return (
    <div className="absolute left-[-5px] top-[75px] z-20 h-[175px] w-[120px] rotate-[-8deg]">
      <span className="absolute left-3 top-0 h-[28px] w-[80px] rotate-[8deg] rounded-full bg-[#baff00]" />

      <span className="absolute left-[-2px] top-[32px] h-[29px] w-[103px] rotate-[12deg] rounded-full bg-[#baff00]" />

      <span className="absolute left-0 top-[65px] h-[29px] w-[110px] rotate-[12deg] rounded-full bg-[#baff00]" />

      <span className="absolute left-[12px] top-[99px] h-[29px] w-[97px] rotate-[10deg] rounded-full bg-[#baff00]" />

      <span className="absolute left-[24px] top-[133px] h-[28px] w-[70px] rotate-[8deg] rounded-full bg-[#baff00]" />
    </div>
  );
}

function CareerSection() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafaf8]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-[180px] -top-[190px] h-[700px] w-[900px]"
          style={{
            background:
              "radial-gradient(circle, rgba(220,255,120,0.72) 0%, rgba(220,255,120,0.38) 32%, rgba(220,255,120,0.12) 52%, rgba(220,255,120,0) 73%)",
          }}
        />

        <div
          className="absolute -bottom-[330px] -right-[230px] h-[750px] w-[850px]"
          style={{
            background:
              "radial-gradient(circle, rgba(190,205,255,0.48) 0%, rgba(210,220,250,0.25) 38%, rgba(220,225,250,0) 72%)",
          }}
        />

        <div
          className="absolute -right-[250px] -top-[200px] h-[650px] w-[800px]"
          style={{
            background:
              "radial-gradient(circle, rgba(220,225,250,0.62) 0%, rgba(232,235,250,0.35) 40%, rgba(240,242,250,0) 72%)",
          }}
        />

        <div
          className="absolute left-[38%] top-[20%] h-[500px] w-[500px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
      </div>

      {/* Main */}
      <section className="relative mx-auto flex min-h-screen max-w-[1800px] items-center px-6 py-14 sm:px-10 lg:px-[8%]">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

          {/* Left - Visual */}
          <div className="relative order-2 mx-auto h-[570px] w-full max-w-[700px] sm:h-[630px] lg:order-1 lg:h-[680px]">

            {/* Course Card */}
            <div className="absolute left-[0%] top-[5%] z-10 sm:left-[4%] lg:left-[6%]">
              <CourseCard />
            </div>

            {/* Woman */}
            <div className="absolute bottom-[-5px] left-[16%] z-30 sm:left-[21%] lg:left-[24%]">
              <img
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEwL3Jhd3BpeGVsb2ZmaWNlMTJfcGhvdG9fb2ZfZnVsbF9sZW5ndGhfb2Zfc21pbGluZ19ibGFja19idXNpbmVzc19iNzQwMTA2Zi0zZjUyLTQxOTItYjBkZi01NDU4MzAzZDMxMjQucG5n.png"
                alt="Woman holding laptop"
                className="h-[360px] w-auto object-contain sm:h-[420px] lg:h-[470px]"
              />
            </div>

            {/* Progress */}
            <div className="absolute right-[0%] top-[44%] z-40 sm:right-[2%] lg:right-[4%]">
              <ProgressCard />
            </div>

            <LimeDecoration />
          </div>

          {/* Right - Text */}
          <div className="relative z-10 order-1 max-w-[680px] lg:order-2 lg:pl-6">

            <h1 className="text-[42px] font-bold leading-[1.08] tracking-[-1.8px] text-[#202124] sm:text-[50px] lg:text-[56px]">
              Learn New Skills,
              <br />
              Build Your Future!
            </h1>

            <p className="mt-10 max-w-[620px] text-[17px] leading-[1.7] text-[#5d6066] sm:text-[19px] lg:text-[20px]">
              Learn from industry experts and discover practical skills that
              can transform your career. From design and technology to
              business and creativity, find everything you need to move
              forward with confidence.
            </p>

            {/* Stats */}
            <div className="mt-11 flex flex-wrap gap-x-12 gap-y-8 sm:gap-x-16">

              <div>
                <div className="text-[38px] font-semibold leading-none tracking-[-1px] text-[#1247d9] sm:text-[42px]">
                  15K
                </div>

                <div className="mt-3 text-[17px] text-[#5d6066]">
                  Learners
                </div>
              </div>

              <div>
                <div className="text-[38px] font-semibold leading-none tracking-[-1px] text-[#1247d9] sm:text-[42px]">
                  85+
                </div>

                <div className="mt-3 text-[17px] text-[#5d6066]">
                  Courses
                </div>
              </div>

              <div>
                <div className="text-[38px] font-semibold leading-none tracking-[-1px] text-[#1247d9] sm:text-[42px]">
                  24
                </div>

                <div className="mt-3 text-[17px] text-[#5d6066]">
                  Instructors
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CareerSection;