import React, { useState } from 'react';
import { Card, Message, Button, Form } from 'semantic-ui-react'

import AxiosThing from '../utilites/AxiosThing';
import CardBtn from './CardBtn';



function ProjectCards(props) {

    const saveEdit = e => {
        e.preventDefault();
        AxiosThing()
            .put(`/projects/${props.id}`, props.itemToEdit)
            .then(res => {
            console.log(`Updated data of ${props.itemToEdit.productName}`, res);
            props.setEdited(res);
        })
            .catch(err => console.log('Oh-oh, something wrong', err));
        };
    

    function Completed(message) {
        if (message.completed === true) {
            return <Message success header='Completed'/>
        } else {
            return <Message error header='Not completed'/>
            }
        }
// console.log(props)
  return (
    
                        <Card key={props.id}>
                            <Card.Content>
                                <Card.Header>Project {props.id}</Card.Header>
                                <Card.Meta>{props.name}</Card.Meta>
                                <Card.Description>{props.description}</Card.Description>
                                <Completed completed={props.completed} />
                            </Card.Content>
                            <div className="button-row">
                            <Button onClick={() => props.setEditing(!props.editing)}>Edit</Button>
                            <CardBtn id={props.id} setState={props.setState} />
                            </div>

                            {props.editing && (
                            <div className="EditBlock">


                                <Form onSubmit={saveEdit}>
                                    
                                <label>
                                    Name:
                                    <input
                                    onChange={e =>
                                        props.setItemToEdit({ ...props.itemToEdit, name: e.target.value })
                                    }
                                    value={props.itemToEdit.name}
                                    />
                                </label>

                                <label>
                                    Description:
                                    <input
                                    onChange={e =>
                                        props.setItemToEdit({ ...props.itemToEdit, description: e.target.value })
                                    }
                                    value={props.itemToEdit.description}
                                    />
                                </label>
                                
                                <label>
                                    Completed:
                                    <input
                                    onChange={e =>
                                        props.setItemToEdit({ ...props.itemToEdit, completed: e.target.value })
                                    }
                                    value={props.itemToEdit.completed}
                                    />
                                </label>

                                <div className="button-row2">
                                    <Button type="submit">Save</Button>
                                    <Button onClick={() => props.setEditing(false)}>Cancel</Button>
                                </div>
                                </Form>
                            </div>
                            )} 

                        </Card>

  );
}

export default ProjectCards;