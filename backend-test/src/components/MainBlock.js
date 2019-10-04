import React, { useEffect, useState } from 'react';
import { Card, Message, Button, Form } from 'semantic-ui-react'

import AxiosThing from '../utilites/AxiosThing';
import AddProject from './AddProject';
import ProjectCards from './ProjectCards'

const initialItem = {
    name: '',
    description: '',
    completed: false
  };

function MainBlock() {

    const [projects, setProjects] = useState([]);
    const [state, setState] = useState('');
    const [update, setUpdate] = useState(false);
    const [editing, setEditing] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(initialItem);
    const [edited, setEdited] = useState('');
    // console.log(editing);

    useEffect(() => {
        AxiosThing()
        .get('/projects')
        .then(res => {
            setProjects(res.data);
        })
        .catch(err => console.log(err));
      }, [state, update, edited]);


  return (
    <div className="MainBlock">
        <AddProject update={update} setUpdate={setUpdate} />
        <Card.Group centered>
            {projects.map(project => (
            <ProjectCards 
            key={project.id} 
            id={project.id}
            name={project.name} 
            description={project.description} 
            completed={project.completed}
            setState={setState}
            editing={editing}
            setEditing={setEditing}
            itemToEdit={itemToEdit}
            setItemToEdit={setItemToEdit}
            setEdited={setEdited} />))}
        </Card.Group>
    </div>
  );
}

export default MainBlock;