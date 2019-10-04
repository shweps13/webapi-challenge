import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react'

import AxiosThing from '../utilites/AxiosThing';
// import CardBtn from './CardBtn';
import AddProject from './AddProject';


function MainBlock() {

    const [projects, setProjects] = useState([]);
    const [state, setState] = useState('');
    const [update, setUpdate] = useState(false);
    console.log(projects);

    useEffect(() => {
        AxiosThing()
        .get('/projects')
        .then(res => {
            setProjects(res.data);
        })
        .catch(err => console.log(err));
      }, [state, update]);

  return (
    <div className="MainBlock">
        <AddProject update={update} setUpdate={setUpdate} />
        <Card.Group centered>
            {projects.map(project => (
                        <Card key={project.id}>
                            <Card.Content>
                                <Card.Header>Project {project.id}</Card.Header>
                                <Card.Meta>{project.name}</Card.Meta>
                                <Card.Description>{project.description}</Card.Description>
                            </Card.Content>
                            {/* <CardBtn id={project.id} setState={setState} /> */}
                        </Card>
                    ))}
        </Card.Group>
    </div>
  );
}

export default MainBlock;