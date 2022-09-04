import React from "react";
import about from "../assets/img/about.jpg";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <>
      <div className="pt-20 p-5 bg-sky-800">
        <h1 className="text-center text-white text-4xl font-bold">
          <u>About Us</u>
        </h1>
        <div className="grid lg:grid-cols-2 p-5 pb-16 pt-16 text-white text-xl font-medium place-items-center justify-around gap-10">
          <Fade left duration={1000} delay={800} distance="10px">
            <img className="w-full h-full" src={about} alt="about" />
          </Fade>
          <Fade right duration={1000} delay={600} distance="10px">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              accusantium ullam, provident obcaecati enim illo aperiam nobis
              mollitia similique perferendis molestias est dolorem eaque quod
              officiis impedit dolore dicta ipsa quaerat dolor suscipit.
              Consectetur illum itaque officia, culpa aperiam non dolor.
              Provident vero commodi eveniet laudantium nulla, repellendus fugit
              ipsa odio maiores impedit mollitia dolor minus natus, aliquid
              reiciendis deleniti doloribus quo molestias dolorum illum
              voluptatum veritatis? Mollitia, accusantium dicta? Autem suscipit
              facere harum commodi rem natus quo id, veritatis aspernatur
              aliquid at debitis, illum sunt quaerat minima itaque obcaecati
              placeat vero? Voluptatum minima ab ipsa, illum aliquam
              necessitatibus reprehenderit?
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
}
