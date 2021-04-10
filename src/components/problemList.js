import React from "react";
import Problem from "./problem";
import { useQuery, gql } from "@apollo/client";

const PROBLEMS_QUERY = gql`
  {
    problems {
      id
      description
      title
      media
    }
  }
`;

const ProblemList = () => {
  const { data } = useQuery(PROBLEMS_QUERY);

  console.log(data)
  return (
    <div>
      {data && (
        <>
          {data.problems.map((problem) => (
            <Problem key={problem.id} problem={problem} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProblemList;
