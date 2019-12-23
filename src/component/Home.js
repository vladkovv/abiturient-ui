import React from "react";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <h1>
                Домашняя страница
            </h1>
        )
    }
}
