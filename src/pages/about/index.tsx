/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <section
      id="about"
      className="w-full h-full  min-h-screen pt-24 pb-4 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white flex justify-center items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <h5 className="text-4xl font-bold inline border-b-4 border-neutral-500 w-fit">
            About
          </h5>
        </div>
        <p className="text-xl">
          I'm 22 years old, passionate about technology since i was a teenager
          and i love to be my best version. I consider me a young man who has a
          incessant desire to learn more about my area and deliver high quality
          work to my clients.
        </p>

        <br />
        <p className="text-xl">
          I am a full-stack developer specializing in React.js and Node.js
          technologies. With expertise in React.js for front-end development and
          NestJS or Express for back-end frameworks, I create robust web
          applications. My proficiency extends to a variety of databases,
          including NoSQL options like MongoDB, DynamoDB, and Redis, as well as
          relational databases like PostgreSQL and MySQL. With a focus on
          delivering efficient, scalable solutions, I strive to exceed
          expectations in every project.
        </p>
      </div>
    </section>
  );
};

export default About;
