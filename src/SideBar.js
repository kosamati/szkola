import React from 'react';
import { bubble as Menu } from 'react-burger-menu';



export default props =>{
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu {...props}>
        <a id="home" className="menu-item" href="/">Strona główna</a>
        <a id="about" className="menu-item" href="/Html">Html</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        


      </Menu>
    );
}
