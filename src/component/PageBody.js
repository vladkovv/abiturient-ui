import React, { Component } from "react";
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
                        host={this.props.host}
                    />
                );
            }
            case 'login': {
                return (
                    <LoginForm
                        handlePageChange={this.props.handlePageChange}
                        host={this.props.host}
                    />
                );
            }
            case 'abiturs': {
                return (
                    <AbitursList
                        handlePageChange={this.props.handlePageChange}
                        host={this.props.host}
                    />
                );
            }
        }
    }
}
