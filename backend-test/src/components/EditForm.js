import React from 'react';
import { Button, Form } from 'semantic-ui-react'

import AxiosThing from '../utilites/AxiosThing';



function EditForm(props) {

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
    

    console.log(props)

  return (
    

        <Form onSubmit={saveEdit}>
            
        <legend>Edit item</legend>
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

        <div className="button-row">
            <Button type="submit">Save</Button>
            <Button onClick={() => props.setEditing(false)}>Cancel</Button>
        </div>
        </Form>

  );
}

export default EditForm;