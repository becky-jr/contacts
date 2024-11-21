import { Component } from "react";
import './AddCard.css'

class AddCard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (

            <div className="form-content">

                <div className="name-div">
                    <input type="text" name="" id="" />
                </div>

                <div className="phone-div">
                    <input type="text" name="" id="" />
                </div>

                <div className="btn">
                    <button>Add Contact</button>
                </div>

            </div>

        )

    }

}

export default AddCard;