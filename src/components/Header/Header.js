import { Component } from "react";
import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (

            <div className="container">

                <div className="header-content">

                    <div className="logo">
                        Contacts Book
                    </div>

                    <ul>

                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Create
                            </a>
                        </li>

                    </ul>

                </div>

            </div>

        )
    }

}

export default Header;