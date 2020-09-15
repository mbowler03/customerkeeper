import React from "react";
import gif from "../../assets/826.gif";

const FormLoading = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img className="preloader" src={gif} width="50px" alt="" />
    </div>
  );
};

export default FormLoading;
