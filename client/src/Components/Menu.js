import React from 'react';
import {Button, Header, Icon, } from 'semantic-ui-react';

const Menu = ({ id, name, updateMenu, deleteMenu }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Header as="h2" style={{ marginLeft: "15px", }}>{ name }</Header>
      <Button
        content="Edit Menu"
        color="blue"
        size="tiny"
        onClick={() => updateMenu(id)}
        style={{ marginLeft: "15px", }}
        >
      </Button>
    </div>
    <Button 
      content="Delete Menu"
      color="red" 
      size="tiny" 
      onClick={() => deleteMenu(id)} 
      style={{ marginLeft: "15px", }}
    >
    </Button>
  </div>
)

const styles = {
  // complete: {
  //   textDecoration: "line-through",
  //   color: "grey",
  // },
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
};

export default Menu