import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import './component.css';

const CardComponent = (props) => {
    return (
        <Card title={props.name} className="maincounter-wrap">
            <h1>{props.data}</h1>
        </Card>
    )
}

export default CardComponent;
