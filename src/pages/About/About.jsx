import React from "react";
import Image from "../../assests/images/Taiwo.jpeg";
//import Coffee from "../../assests/images/coffeestain.png";

function About() {
  return (
    <div className="container">
      <div className="row mb-40">
        <div className="col-lg-6">
          <div className="py-5 mt-10">
            <h1 className="text-5xl font-extrabold">
              Hi, I'm <span className="text-sky-500">Taiwo Oyelumade</span>
            </h1>
            <p className="text-xl my-8">
              I'm a bestselling author, podcaster, blogger, marketer, speaker,
              and a few other things.
            </p>
            <p className="text-xl font-bold">But really, I’m a creator.</p>
          </div>
        </div>
        <div className="col-lg-6 relative">
          <div className="h-80 w-80 mx-auto object-contain">
            <img
              src={Image}
              className="img-fluid mt-6"
              alt="Taiwo"
              loading="lazy"
            />
          </div>
          {/* <img
              src={Coffee}
              className="img-fluid mt-6 absolute"
              alt="Coffee"
              loading="lazy"
            /> */}
        </div>
      </div>
      <div className="text-center my-8">
        <h1 className="mb-8 font-bold">
          <span className="text-sky-500">
            I’ve been making things my whole life
          </span>{" "}
          —from amateur comics to sad songs about girls who refused to date me
          in high school to books and blogs and businesses. For me, the
          experience is never about the thing and is always about the process.
        </h1>

        <p className="font-normal">
          My work has always taught me something about myself, and this website
          is where I share that the same thing might be true for all creators.
          Let’s learn about creative work together, because I think the real
          mystery is that as we better understand our work, we more deeply
          understand ourselves.
        </p>

        <p className="font-normal">
          Taiwo Oyelumade helps creative people succeed. Through his bestselling
          books, courses, coaching, and speeches, he shares his ongoing journey
          of transformation, inspiring creators like you to discover your voice
          and share it with the world.
        </p>

        <p className="font-normal">
          He is also the founder of Fresh Complaint, a bespoke creative agency
          that helps thought leaders turn good ideas into big ideas. Jeff and
          his team do this through the powerful medium of books: from proposals
          to editing to full-on ghostwriting, Fresh Complaint can help you make
          your book great.
        </p>

        <p className="font-normal">
          Just outside of Nashville, Jeff can be found making a midday omelette
          for a friend, hiking with his kids, or editing his latest poem.
        </p>
      </div>
    </div>
  );
}

export default About;
