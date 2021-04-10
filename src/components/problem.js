import React from "react";

const Problem = (props) => {
  const { problem } = props;
  return (
    <div>
      <div>{problem.title}</div>
      <div>{problem.description}</div>
      <div>{problem.media}</div>
    </div>
  );
};

export default Problem;
