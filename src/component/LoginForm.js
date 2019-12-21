import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Message(props){
    let type = "primary";
    let message = "";
    if(props.error){
        type = "danger";
        message = props.error;
    }else if(props.message){
        type = "success";
        message = props.message;
    }

    if(message){
        return (
            <Alert variant={type}>
                {message}
            </Alert>
        );
    }else{
        return "";
    }
}

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.tryLogin = this.tryLogin.bind(this);
        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.state = {login:"", password:"", error:"", message:""};
    }

    loginChange(event){
        this.setState({login: event.target.value});
    }

    passwordChange(event){
        this.setState({password: event.target.value});
    }

    async tryLogin(){
        let response = await fetch(`${this.props.host}/auth/login`, {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username:this.state.login, password:this.state.password})
        });

        let result = await response.json();

        if(result.error){
            this.setState({error:result.error, message:""});
        }else{
            this.setState({message:"Успешно!", error:""});
        }
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="formLogin">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type="text" placeholder="Логин" onChange={this.loginChange}/>
                    <Form.Text className="text-muted">
                        Введите логин для входа
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.passwordChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.tryLogin}>
                    Войти
                </Button>
                <Message message={this.state.message} error={this.state.error}/>
            </Form>
        )
    }
}
