import React, { useEffect } from "react";

const Alert = ({ type, msg }) => {
  return <h2 className={`alert alert-${type}`}>{msg}</h2>;
};

export default Alert;
