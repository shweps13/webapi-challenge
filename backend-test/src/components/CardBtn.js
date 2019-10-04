import React  from 'react';
import { Button } from 'semantic-ui-react'

import AxiosThing from '../utilites/AxiosThing';


function MainBlock(props) {

      const deleteProject = () => {
        AxiosThing()
          .delete(`/projects/${props.id}`)
          .then(res => {
              console.log(`Project with id ${props.id} was deleted`);
              props.setState(res);
          })
          .catch(err => console.log(err));
    };

  return (
    <>
        <Button onClick={deleteProject}>Delete</Button>

    </>
  );
}

export default MainBlock;