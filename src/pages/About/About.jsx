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
        </div>
      </div>
      <div className="text-center my-8">
        {/* <h1 className="mb-8 font-bold">
          <span className="text-sky-500">
            I’ve been making things my whole life
          </span>{" "}
          —from amateur comics to sad songs about girls who refused to date me
          in high school to books and blogs and businesses. For me, the
          experience is never about the thing and is always about the process.
        </h1> */}

        <p className="font-normal">
          Taiwo was born into a small, close-knit family in Ogun State, Nigeria.
          His family loved books, with his father always buying new books
          whenever he went to work. Although he never fancied reading books as
          much, he always loved how animated they made his mother whenever she
          had one. At home, reading was essential for the children, three of
          them, but optional. Their parents didn’t force them to do or be
          anything they did not like. Because of the freedom of ideas encouraged
          in the house, he picked ideas and habits from his siblings and
          parents. His father was more interested in politics and philosophy,
          while his mother read a lot of western and African literature.
        </p>

        <p className="font-normal">
          Both influences came to the fore in his growing-up years. When he was
          seven, he picked up the reading habit and quickly read as many books
          as his mother would allow him to read at night. He spent long hours at
          night purring over literature. He remembers his mother turning off the
          light so he’d drop any book he was reading. He tried to sneak a
          torchlight under his duvet, but she caught him and banned him from
          taking books to bed. His love for literature burned more, but he also
          picked up other reading appetites. His father’s political talk and the
          underlying philosophy behind stories piqued his interest in politics
          and philosophy.
        </p>

        <p className="font-normal">
          He is also the founder of Fresh Complaint, a bespoke creative agency
          that helps thought leaders turn good ideas into big ideas. Taiwo and
          his team do this through the powerful medium of books: from proposals
          to editing to full-on ghostwriting, Fresh Complaint can help you make
          your book great. He did not have any favorite writer in philosophy or
          politics, but Kant, Socrates, Epictetus, and Marcus Aurelius were some
          writers whose ideas thrilled Taiwo. Besides reading, he also loved
          playing football. In Nigeria, football is the most popular sport, so
          it was in the right place when Taiwo spent hours outside the house
          playing football. Even though he often returned to the house sweaty,
          smelly and injured because it was impossible not to get injured in
          Abeokuta when playing football, his mom always welcomed him with open
          arms. His mom did not like how dirty he returned after playing
          football; they agreed he was free to play as much as he wanted after
          completing his chores. He had to return to the house before 7 PM.
          Taiwo’s storytelling background and the freedom of ideas and opinions
          at home made me find solace in writing.
        </p>

        <p className="font-normal">
          He wants to help more people use words to find meaning in the things
          they’re dealing with. he knows how burdensome some stories feel. But
          he’s a testament that you'll feel better when you allow those words
          out. He wants to help people open up, as well as help business people
          and professionals who struggle with time to write, tell their stories,
          and spread their gifts to the world. Taiwo’s first Book, THE CHAOS OF
          EVERYTHING, has gained critical acclaim for its rawness in language
          and story. Taiwo spends his time watching Manchester United Football
          Club when he is not writing a book or poem or creating educational
          content. He thinks Rashford will win the Baloon D’or soon!
        </p>
      </div>
    </div>
  );
}

export default About;
