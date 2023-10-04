import React from "react";

const CourseCard = ({ courseName, description, price, imgSrc }) => {
  return (
    <div className="card overflow-hidden" style={{ width: "22rem", background: "#f3f3f4",borderRadius:"25px" }}>
      <img className="card-img-top h-44 w-72" src={imgSrc} alt="Card" />
      <div
        className="card-body relative"
        style={{ height: "16rem", width: "18rem" }}
      >
        <div className="cardHeading">
          <b>
            <h5 className="card-title">{courseName}</h5>
          </b>
        </div>
        <div className="cardPrice">
          <b className="text-3xl">₹ {price}</b>
        </div>
        <div className="cardDesc">
          <p className="card-text">{description}</p>
        </div>
        <div className="cardLink">
          <p className="hover: cursor-pointer text-blue-600">
            Learn more &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
