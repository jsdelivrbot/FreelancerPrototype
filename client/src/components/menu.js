import React, { Component } from 'react';


class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <header>
                    <div id="left-menu">
                        <ul>
                            <li><a href="index.js">FREELANCER</a></li>
                            <li><a href="https://www.google.com">Hire Freelancers</a></li> 
                            <li><a href="https://www.google.com">Find Work</a></li>
                            <li><a href="https://www.google.com">How it works</a></li>   
                        </ul>
                    </div>
                    <div id="right-menu">
                        <ul>
                            <li><a className="menu-button" href="https://www.google.com">Post a Project </a></li> 
                            <li> <a href="http://localhost:8080/signup"> Sign Up </a> </li>
                            <li><a href="http://localhost:8080/login">Log In</a></li>
                        </ul>     
                    </div>   
                </header>
            </div>
        );
    }
}

export default Menu;