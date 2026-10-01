import person1 from "../assets/person_1.png";
import person2 from "../assets/person_2.png";
import person3 from "../assets/person_3.png";

// ---------- Testimonials Data ----------
const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: person1,
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: person2,
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: person3,
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

// ---------- Testimonial Card ----------
function TestimonialCard({ name, role, image, quote }) {
  return (
    <article
      className="
        group
        flex h-full flex-col
        rounded-[28px]
        border border-black/[0.04]
        bg-white
        p-6
        shadow-[0_10px_40px_rgba(0,0,0,0.04)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_20px_55px_rgba(0,0,0,0.08)]
        sm:rounded-[30px]
        sm:p-7
        lg:rounded-[32px]
        lg:p-[30px]
      "
    >
      {/* Person Image */}
      <img
        src={image}
        alt={`${name} profile`}
        loading="lazy"
        className="
          mb-6
          h-[82px]
          w-[82px]
          rounded-full
          object-cover
          ring-4 ring-[#f7f7f7]
          transition-transform duration-300
          group-hover:scale-105
          sm:h-[90px]
          sm:w-[90px]
          lg:h-[100px]
          lg:w-[100px]
        "
      />

      {/* Name */}
      <h3
        className="
          font-['Poppins']
          text-xl
          font-semibold
          leading-tight
          tracking-tight
          text-black
          sm:text-2xl
        "
      >
        {name}
      </h3>

      {/* Role */}
      <p
        className="
          mt-1
          text-base
          font-medium
          text-[#0a2fe8]
          sm:text-lg
          lg:text-[1.2rem]
        "
      >
        {role}
      </p>

      {/* Quote */}
      <p
        className="
          mt-7
          text-base
          font-light
          leading-[1.8]
          text-[#55575c]
          sm:mt-8
          sm:text-lg
          lg:mt-10
          lg:text-[1.15rem]
        "
      >
        “{quote}”
      </p>
    </article>
  );
}

// ---------- Testimonials Section ----------
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-[#fafafa]
        px-4
        py-14
        font-['Outfit']
        sm:px-6
        sm:py-16
        md:px-8
        lg:px-12
        lg:py-[90px]
        xl:px-20
      "
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Poppins:wght@600&display=swap');
      `}</style>

      {/* Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Top Lime Glow */}
        <div
          className="
            absolute
            left-[35%]
            top-[-80px]
            h-[300px]
            w-[380px]
            rounded-full
            bg-[#e2fa76]
            opacity-70
            blur-[100px]
            sm:h-[350px]
            sm:w-[450px]
            lg:left-[40%]
            lg:top-[2%]
          "
        />

        {/* Right Lime Glow */}
        <div
          className="
            absolute
            -right-48
            top-[25%]
            h-[420px]
            w-[360px]
            rounded-full
            bg-[#e2fa76]
            opacity-60
            blur-[110px]
            sm:h-[500px]
            sm:w-[400px]
          "
        />

        {/* Bottom Blue Glow */}
        <div
          className="
            absolute
            -bottom-24
            -left-48
            h-[280px]
            w-[340px]
            rounded-full
            bg-[#96aff5]
            opacity-50
            blur-[110px]
            sm:h-[340px]
            sm:w-[400px]
          "
        />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-[1504px]">
        {/* Header */}
        <div
          className="
            mb-12
            grid
            items-center
            gap-6
            sm:mb-14
            md:gap-8
            lg:mb-[80px]
            lg:grid-cols-2
            lg:gap-[60px]
            xl:mb-[90px]
          "
        >
          {/* Heading */}
          <h2
            className="
              max-w-[640px]
              font-['Poppins']
              text-[2rem]
              font-semibold
              leading-[1.18]
              tracking-[-0.02em]
              text-black
              sm:text-[2.4rem]
              md:text-[2.8rem]
              lg:text-[3.2rem]
              xl:text-[3.6rem]
            "
          >
            Discover What Our Community Is Saying
          </h2>

          {/* Description */}
          <p
            className="
              max-w-[730px]
              text-base
              font-light
              leading-[1.75]
              text-[#55575c]
              sm:text-lg
              md:text-xl
              lg:text-[1.2rem]
              xl:text-[1.3rem]
            "
          >
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:gap-6
            lg:grid-cols-3
            lg:gap-7
            xl:gap-[50px]
          "
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}