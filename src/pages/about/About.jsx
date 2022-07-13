import codinglogo from "../../assets/coding.svg";
import "bootstrap";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  return (
    <div className="container border:2px-solid-white">
      <Navbar />
      <img src={codinglogo} alt="" />
      <p className="color=white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        error reiciendis incidunt nihil. A quia quidem voluptas at sequi
        aspernatur aperiam tenetur deleniti maxime fugiat ullam quod laboriosam
        perspiciatis molestias illo, magnam iure tempore ex veniam! Sunt
        deserunt maiores voluptate.
      </p>
    </div>
  );
};

export default About;
