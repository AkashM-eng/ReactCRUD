import React from "react";
import Hello from "./Hello";

const About = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h2>About</h2>
        <p style={{ color: "Blue" }}>
          {" "}
          You Can Add, Edit, view and Delete User Here.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
