import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Home from "./Home";
import LoginForm from "./LoginForm";
import AbitursList from "./AbitursList";

export default class PageBody extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        switch (this.props.page){
            case 'home':{
                return (
                    <Home 
                        handlePageChange={this.props.handlePageChange}
                    />
                );
                break;
            }
            case 'login': {
                return (
                    <LoginForm
                        handlePageChange={this.props.handlePageChange}
                    />
                );
                break;
            }
            case 'abiturs': {
                return (
                    <AbitursList
                        handlePageChange={this.props.handlePageChange}
                    />
                );
                break;
            }
        }
    }
}
