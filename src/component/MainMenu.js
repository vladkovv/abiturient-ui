import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class MyButton extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.handleHomeLink = this.handleHomeLink.bind(this);
        this.handleLoginLink = this.handleLoginLink.bind(this);
        this.handleAbitursLink = this.handleAbitursLink.bind(this);
    }

    handleHomeLink(){
        this.props.handlePageChange('home');
    }

    handleLoginLink(){
        this.props.handlePageChange('login');
    }

    handleAbitursLink(){
        this.props.handlePageChange('abiturs');
    }

    render(){
        return (<Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"
                onClick={this.handleHomeLink}>
                    Регистрация<br/>Абитуриентов
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#login" 
                        onClick={this.handleLoginLink}>
                            Вход
                    </Nav.Link>
                    <Nav.Link href="#abiturs"
                        onClick={this.handleAbitursLink}>
                            Абитуриенты
                    </Nav.Link>
                    <NavDropdown title="Справочники" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/specs">
                            Специальности
              </NavDropdown.Item>
                        <NavDropdown.Item href="#action/groups">Группы</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/users">
                            Пользователи
              </NavDropdown.Item>
                    </NavDropdown>
                </Nav>                
            </Navbar.Collapse>
        </Navbar>);
    }    
}
