import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-primary btn-lg">
    {props.children}
  </button>
);
