import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, } from "semantic-ui-react";
import MenuForm from './Components/MenuForm';
import MenuList from './Components/MenuList';
import axios from 'axios';
import Menu from './Components/Menu'

export default class App extends React.Component {
  
  state = {
    menus: [],
  }

  componentDidMount(){
    //menu makes a call to our rails server to get our menus
    axios.get("/api/menus")
    .then(res => {
      this.setState({ menus: res.data });
    })
    .catch( err => {
      console.log(err);
    })
  }

  addMenu = (name) => {
    //update state here
    //make api calls to rails server to add menus
    axios.post("/api/menus", {name} )
    .then(res => {
      const { menus, } = this.state;
      this.setState({ menus: [res.data, ...menus], });
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  updateMenu = (menuEdit, id) => {
    //update state here
    //make api call to update menu
    axios.put(`/api/menus/${id}`, {
      name: menuEdit.name
    })
      .then((res)=>{
        const newArray = this.state.menus.map( currentMenu => {
          if(currentMenu.id != id) 
          return currentMenu
          return {...currentMenu, ...menuEdit}
        });
        this.setState({ 
          menus:newArray
        });
      }).catch((err)=>{
        console.log(err)
      })
    
  }
  
  deleteMenu = (id) => {
    //update state here
    //make api call to delete menu
    axios.delete(`api/menus/${id}`)
      .then((res)=>{
        const {menus} = this.state;
        this.setState({ menus: menus.filter(t => t.id !== id), })
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  renderMenus(){
    return this.state.menus.map( menu =>{
      return(
        <Menu key={`menu-${menu.id}`} 
          {...menu} 
          updateMenu={this.updateMenu} 
        /> //this grabs all the stuff from the menu and passes them as props
      )
    })
  }

  render(){
    return (
      <Container style={{ padding: "30px 0", }}>
        <MenuForm addMenu={this.addMenu} />
        <br />
        <br />
        <MenuList 
          menus={this.state.menus}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
        />
      </Container>
    );
  } 
}


