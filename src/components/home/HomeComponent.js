import React from 'react';
import './home.css'
import {Button, Row} from "react-bootstrap";
import {Component} from "react/lib/ReactBaseClasses";

export default class HomeComponent extends Component{
    render(){
        return(
            <div className="jumbotron">
                <div className="custom">
                    <Row>
                        <h1>Customer Management</h1>
                    </Row>
                    <br/>
                    <Row>
                        <Button bsSize="large" onClick={()=>this.props.history.push('/login')}>LOGIN</Button>
                    </Row>
                </div>
            </div>
        )
    }
}
