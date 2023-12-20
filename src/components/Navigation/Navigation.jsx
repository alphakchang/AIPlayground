import React from 'react';
import logo from './alpha_logo.png';
import './Navigation.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <a href="https://alphacrc.com/">
                    <span className="m-3">
                        <img src={logo} height="50px" width="50px" alt="logo" />
                    </span>
                </a>
                <span className="fw-bold text-uppercase navbar-brand navTitle">
                    Alpha AI Playground
                </span>

                {/* navbar links */}
                <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3">
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    Select Category
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#prompting">Prompting related</Dropdown.Item>
                                    <Dropdown.Item href="#content-editor">Content Editor & alts</Dropdown.Item>
                                    <Dropdown.Item href="#seo">SEO related</Dropdown.Item>
                                    <Dropdown.Item href="#ft">Fine-tuned models</Dropdown.Item>
                                    <Dropdown.Item href="#other">Others</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="nav-item text-links">
                            <a href="https://portal.alphacrc.com:3443/" className="nav-link">Alpha Portal</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;