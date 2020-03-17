import React from 'react';
import { Form, Button } from "semantic-ui-react";

export default class MenuForm extends React.Component {

  state = {
    name:"",
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMenu(this.state.name);
    this.setState({ name: "", });
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          label="Menu"
          placeholder="Add A Menu"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
