import React, { useState } from "react";
import {
  Palette,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Design",
    description: "UI/UX, Graphic Design, Figma & Illustration",
    courses: "120+ Courses",
    iconSrc: "icon_1.png",
    fallbackIcon: Palette,
  },
  {
    id: 2,
    title: "Development",
    description: "Full Stack, Mobile Apps & System Architecture",
    courses: "240+ Courses",
    iconSrc: "icon_2.png",
    fallbackIcon: Code2,
  },
  {
    id: 3,
    title: "IT & Software",
    description: "Cloud Computing, Cybersecurity & DevOps",
    courses: "180+ Courses",
    iconSrc: "icon_3.png",
    fallbackIcon: Laptop,
  },
  {
    id: 4,
    title: "Business",
    description: "Entrepreneurship, Finance & Management",
    courses: "95+ Courses",
    iconSrc: "icon_4.png",
    fallbackIcon: Building2,
  },
  {
    id: 5,
    title: "Marketing",
    description: "Digital Growth, SEO & Social Media Strategy",
    courses: "150+ Courses",
    iconSrc: "icon_5.png",
    fallbackIcon: Megaphone,
  },
  {
    id: 6,
    title: "Photography",
    description: "Cinematography, Editing & Visual Storytelling",
    courses: "80+ Courses",
    iconSrc: "icon_6.png",
    fallbackIcon: Camera,
  },
];

export default function App() {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <section className="w-full bg-slate-50 px-4 py-16 font-sans antialiased sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">

          {/* Heading */}
          <h1 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Explore Diverse Learning Paths at{" "}
            <span className="whitespace-nowrap">Bytespace</span>
          </h1>

          {/* Description */}
          <p className="text-sm leading-7 text-zinc-600 sm:text-base lg:text-lg">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => {
            const FallbackIcon = category.fallbackIcon;
            const hasImageError = imageErrors[category.id];

            return (
              <article
                key={category.id}
                className="group relative flex min-h-[290px] cursor-pointer flex-col items-center rounded-3xl border border-zinc-200/80 bg-white p-6 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#cbf43d] hover:shadow-[0_14px_35px_-10px_rgba(203,244,61,0.35)]"
              >
                {/* Icon */}
                <div className="relative mb-5 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#cbf43d] shadow-md transition-transform duration-300 group-hover:scale-110">
                  {!hasImageError ? (
                    <img
                      src={category.iconSrc}
                      alt={`${category.title} icon`}
                      onError={() => handleImageError(category.id)}
                      className="h-9 w-9 object-contain drop-shadow-sm"
                    />
                  ) : (
                    <FallbackIcon className="h-8 w-8 text-zinc-900" />
                  )}

                  {/* Hover Ring */}
                  <span className="absolute inset-0 rounded-full border-2 border-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Title */}
                <h3 className="mb-1 text-lg font-bold text-zinc-900">
                  {category.title}
                </h3>

                {/* Course Count */}
                <span className="mb-3 text-xs font-medium text-zinc-400">
                  {category.courses}
                </span>

                {/* Description */}
                <p className="max-h-0 overflow-hidden text-xs leading-relaxed text-zinc-500 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                  {category.description}
                </p>

                {/* Explore */}
                <div className="mt-auto flex translate-y-2 items-center gap-1 pt-4 text-xs font-semibold text-zinc-800 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Bottom Accent */}
                <span className="absolute bottom-0 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-transparent transition-all duration-300 group-hover:w-12 group-hover:bg-[#cbf43d]" />
              </article>
            );
          })}
        </div>

        {/* CTA Banner */}
        {/* <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm sm:p-8 md:mt-16 md:flex-row">
          <div className="text-center md:text-left">
            <h4 className="mb-1 text-lg font-bold text-zinc-900">
              Ready to start your learning journey?
            </h4>

            <p className="text-sm leading-6 text-zinc-500">
              Join thousands of students building skills for the future with
              expert-led paths.
            </p>
          </div>

          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-zinc-800 hover:shadow-lg active:scale-95"
          >
            <span>Browse All Courses</span>
            <ArrowRight className="h-4 w-4 text-[#cbf43d] transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div> */}
      </div>
    </section>
  );
}
 
