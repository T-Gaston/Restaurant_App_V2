import React from 'react';
import Menu from './Menu';

const MenuList = ({ menus, updateMenu, deleteMenu }) => {
  return(
    <div>
      { menus.map ( menu =>
        <Menu
          key={menu.id}
          {...menu}
          updateMenu={updateMenu}
          deleteMenu={deleteMenu}
        />
      )}
    </div>
  )
}

export default MenuList