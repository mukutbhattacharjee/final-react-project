import React from 'react';
import './home.css'
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const HomeComponent = () =>
    <div className="jumbotron">
        <div className="custom">
            <Row>
                <h1>Customer Management</h1>
            </Row>
            <br/>
            <Row>
               <Link className = "btn btn-info btn-lg" to = '/login'>LOGIN</Link>
            </Row>
        </div>
    </div>;

export default HomeComponent