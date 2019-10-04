import React from "react";
import AxiosThing from "../utilites/AxiosThing";

import { Container, Header, Button, Form  } from 'semantic-ui-react'

class AddForm extends React.Component {
  
  state = {
    projectData: {
      name: '',
      description: '',
      completed: false
    }
  };

  handleChange = e => {
    this.setState({
      projectData: {
        ...this.state.projectData,
        [e.target.name]: e.target.value
      }
    });
  };
  
  componentDidMount() {

    this.setState({
        projectData: {
          ...this.state.projectData
        }
      });
  }

  login = e => {
    e.preventDefault();
    AxiosThing()
      .post(`/projects`, this.state.projectData)
      .then(res => {
        this.props.setUpdate(!this.props.update);
      })
      .catch(err => console.log('Oh-oh, something wrong', err));
  };
  
    
  render() {
    const thisTrue = true;
    const thisFalse = false;
  return (
    <Container text>
      <div className="AddProduct">
      <Header as='h2'>Add new Project</Header>
      <Form onSubmit={this.login}>
        <Form.Field>
        <label>Project Title</label>
          <input
            type="text"
            name="name"
            value={this.state.projectData.name}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
        <label>Description</label>
          <input
            type="text"
            name="description"
            value={this.state.projectData.description}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Group >
        <Form.Field label='Completed?' 
            control='select'
            name="completed"
            value={this.state.projectData.completed}
            onChange={this.handleChange}
        >
            <option value={thisFalse}>No</option>
            <option value={thisTrue}>Yes</option>
        </Form.Field>
        </Form.Group>

          <div className="AddBtns">
            <Button primary type='submit' onClick={console.log(this.state.projectData)}>Add project</Button>
          </div>
        </Form>
        </div>
    </Container>
  );
  }
};

export default AddForm;