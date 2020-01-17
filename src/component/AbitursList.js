import React from "react";
import Table from "./Table";
import * as data from "../assets/table-json.json";

export default class AbiturList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    state = {
        tableJSON : data.default
    }

    render() {
        return (
            <div>
                <h1>
                    Список абитуриентов
                </h1>
                <Table data={ this.state.tableJSON }/>
            </div>
        );
    }
}
