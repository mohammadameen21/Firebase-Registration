import React, { Component } from 'react';


class Navbar extends Component {

    constructor() {
        super();

    }

    render() {


        return (

            <div>
                <nav className="navbar navbar-expand-xl navbar-dark bg-danger">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><h4>WS-Survey</h4></a>
                        
                        <div className="collapse navbar-collapse" id="navbarBasic">
                            <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Help</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Feedback</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-info" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )

    }
}


export default Navbar;