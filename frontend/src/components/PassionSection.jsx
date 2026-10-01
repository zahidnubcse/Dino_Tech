import { useState } from "react";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const PassionSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1250px] text-center">

        {/* Heading */}
        <h2 className="mx-auto max-w-[750px] text-[40px] font-bold leading-[1.15] tracking-[-1.5px] text-gray-800 sm:text-[48px] md:text-[54px] lg:text-[56px]">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-[1120px] text-[16px] font-normal leading-7 text-[#858894] sm:text-[18px] sm:leading-8 md:text-[20px]">
          At Bytespace Courses, we bring you closer to life-changing
          knowledge. Explore a variety of courses across different
          <br className="hidden md:block" />
          fields, from technology to the arts, and make a difference in your
          career and life.
        </p>

        {/* Categories */}
        <div className="mx-auto mt-14 flex max-w-[1380px] flex-wrap items-center justify-center gap-x-5 gap-y-6">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  rounded-full px-5 py-3.5
                  text-[16px] font-medium
                  transition-all duration-200
                  sm:text-[17px]
                  cursor-pointer
                  ${
                    isSelected
                      ? "bg-[#c8ff00] text-[#111111] hover:bg-[#baf000]"
                      : "bg-[#f4f4f5] text-[#50515a] hover:bg-[#e9e9eb]"
                  }
                `}
              >
                {category}
              </button>
            );
          })}

          {/* More */}
          <button className="px-1 py-3.5 cursor-pointer text-[16px] font-medium text-[#0047ff] transition-colors hover:text-[#0035c7] sm:text-[17px]">
            + More
          </button>
        </div>

      </div>
    </section>
  );
};

export default PassionSection;
