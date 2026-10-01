const courses = [
  {
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
  },
  {
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
  },
  {
    title: "The Power of Big Data",
    instructor: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
  },
  {
    title: "Master Modern Web Design",
    instructor: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80",
    rating: "4.5",
    lessons: "24 Lessons",
    duration: "3 hours 20 mins",
    comments: "72 Comments",
    level: "Intermediate",
    price: "$30",
  },
  {
    title: "Creative Graphic Design",
    instructor: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    rating: "4.5",
    lessons: "21 Lessons",
    duration: "4 hours 10 mins",
    comments: "48 Comments",
    level: "Beginner",
    price: "$28",
  },
  {
    title: "Photography Masterclass",
    instructor: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=900&q=80",
    rating: "4.5",
    lessons: "19 Lessons",
    duration: "3 hours 45 mins",
    comments: "63 Comments",
    level: "Beginner",
    price: "$27",
  },
];

const avatars = [
  "https://i.pravatar.cc/100?img=11",
  "https://i.pravatar.cc/100?img=12",
  "https://i.pravatar.cc/100?img=13",
  "https://i.pravatar.cc/100?img=14",
];

const CourseCard = ({ course }) => {
  return (
    <div
      className="
        w-full
        max-w-[450px]
        min-h-[500px]
        mx-auto
        rounded-[28px]
        border
        border-[#d7d7d7]
        bg-white
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        sm:p-5
      "
    >
      {/* Image */}
      <div
        className="
          relative
          h-[190px]
          w-full
          overflow-hidden
          rounded-[15px]
          sm:h-[220px]
          md:h-[230px]
          lg:h-[243px]
        "
      >
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />

        {/* Bottom Image Info */}
        <div
          className="
            absolute
            bottom-3
            left-3
            right-3
            flex
            items-center
            justify-between
            gap-1.5
            sm:bottom-5
            sm:left-4
            sm:right-4
            sm:gap-2
          "
        >
          <span className="rounded-full bg-white/80 px-2.5 py-1.5 text-[10px] font-medium text-[#4c4c4c] backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[13px]">
            {course.lessons}
          </span>

          <span className="rounded-full bg-white/80 px-2.5 py-1.5 text-[10px] font-medium text-[#4c4c4c] backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[13px]">
            {course.duration}
          </span>

          <span className="rounded-full bg-white/80 px-2.5 py-1.5 text-[10px] font-medium text-[#4c4c4c] backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[13px]">
            {course.comments}
          </span>
        </div>
      </div>

      {/* Title + Rating */}
      <div className="mt-5 flex items-start justify-between gap-2 sm:mt-7 sm:gap-3">
        <h3
          className="
            text-[19px]
            font-bold
            leading-[1.2]
            tracking-[-0.5px]
            text-[#080808]
            sm:text-[22px]
            lg:text-[24px]
          "
        >
          {course.title}
        </h3>

        <div className="flex shrink-0 items-center gap-1 pt-1 text-[17px] text-[#555] sm:text-[20px]">
          <span>{course.rating}</span>
          <span className="text-[#d1d1d1]">★</span>
        </div>
      </div>

      {/* Instructor */}
      <p className="mt-1 text-[13px] text-[#777] sm:text-[14px]">
        by{" "}
        <span className="text-[#004cff]">
          {course.instructor}
        </span>
      </p>

      {/* Level + Avatars */}
      <div className="mt-5 flex items-center justify-between gap-2 sm:mt-6 sm:gap-3">

        {/* Level */}
        <div className="flex items-center gap-2 rounded-full bg-[#f4f4f4] px-3 py-2 text-[12px] text-[#555] sm:px-4 sm:py-2.5 sm:text-[14px]">
          <span className="flex items-end gap-[2px]">
            <span className="h-2 w-[3px] rounded-sm bg-[#666]" />
            <span className="h-3 w-[3px] rounded-sm bg-[#666]" />
            <span className="h-4 w-[3px] rounded-sm bg-[#666]" />
          </span>

          {course.level}
        </div>

        {/* Avatars */}
        <div className="flex items-center">
          {avatars.map((avatar, index) => (
            <img
              key={avatar}
              src={avatar}
              alt=""
              className={`h-8 w-8 rounded-full border-2 border-white object-cover sm:h-9 sm:w-9 ${
                index !== 0 ? "-ml-2" : ""
              }`}
            />
          ))}

          <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#c8ff00] text-[10px] font-semibold text-[#111] sm:h-9 sm:w-9 sm:text-[12px]">
            26+
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="mt-5 sm:mt-6">
        <span className="text-[24px] font-bold text-[#004cff] sm:text-[27px]">
          {course.price}
        </span>

        <span className="text-[12px] text-[#555] sm:text-[13px]">
          /lifetime
        </span>
      </div>
    </div>
  );
};

const CourseCards = () => {
  return (
    <section
      className="
        w-full
        bg-white
        px-5
        py-8
        sm:px-8
        sm:py-10
        md:px-10
        lg:px-12
        xl:px-16
      "
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:gap-5
            md:grid-cols-2
            lg:gap-5
            xl:grid-cols-3
          "
        >
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              course={course}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CourseCards;
