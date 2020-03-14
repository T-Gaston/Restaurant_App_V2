import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, } from "semantic-ui-react";
import MenuForm from './Components/MenuForm';
import MenuList from './Components/MenuList';
import axios from 'axios';

export default class App extends React.Component {
  
  state = {
    menus: [],
  }

  componentDidMount(){
    //menu makes a call to our rails server to get our menus
    axios.get("api/menus").then(res => {
      this.setState({ menus: res.data });
    })
    .catch( err => {
      console.log(err);
    })
  }

  addMenu = (menu) => {
    //update state here
    //make api calls to rails server to add menus
  }

  updateMenu = (id) => {
    //update state here
    //make api call to update menu
  }
  
  deleteMenu = (id) => {
    //update state here
    //make api call to delete menu 
  }

  render(){
    return (
      <Container style={{ padding: "30px 0", }}>
        <MenuForm addMenu={this.addMenu} />
        <br />
        <br />
        <MenuList 
          menus={this.state.menus}
          updateMenu={this.state.updateMenu}
          deleteMenu={this.state.deleteMenu}
        />
      </Container>
    );
  } 
}


