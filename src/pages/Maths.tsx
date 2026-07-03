import React from "react";
import SkeletonVisual from "/src/components/SkeletonVisual"

const Maths: React.FC = () => {
  return (
    <section className="content">
      <h1 className="title">Maths and other things</h1>
      <div className="content-box">
        <p>
          Here are some things relating to the maths I work with.
        </p>
      </div>
      <div className="content-box">
        <h2>Polygon generator</h2>
        <SkeletonVisual />
      </div>
    </section>
  );
};

export default Maths;