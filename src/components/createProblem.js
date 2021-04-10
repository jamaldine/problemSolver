import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_PROBLEM_MUTATION = gql`
  mutation toCreateProblem(
    $description: String!
    $title: String!
    $media: String!
  ) {
    CreateProblem(description: $description, title: $title, media: $media) {
      id
      title
      media
      description
    }
  }
`;
const CreateProblem = () => {
  const [formState, setFormState] = useState({
    description: '',
    media: '',
    title:''
  });
  const [createProblem] = useMutation(CREATE_PROBLEM_MUTATION, {
    variables: {
      description: formState.description,
      title: formState.title,
      media: formState.media
    }
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createProblem();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="A description for the problem"
          />
          <input
            className="mb2"
            value={formState.title}
            onChange={(e) =>
              setFormState({
                ...formState,
                title: e.target.value
              })
            }
            type="text"
            placeholder="The URL for the title"
          />
          <input
            className="mb2"
            value={formState.media}
            onChange={(e) =>
              setFormState({
                ...formState,
                media: e.target.value
              })
            }
            type="text"
            placeholder="The URL for the media"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateProblem;