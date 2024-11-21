import { Component } from "react";
import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (

            <div className="card">

                <div className="card-header">

                    <div className="card-img">
                        <img src="https://images.barrons.com/im-394091?width=1280&size=1.33333333" />
                    </div>

                    <div className="card-name">
                        ${this.props.name}
                    </div>

                </div>

                <div className="card-info">
                        ${this.props.phone}
                </div>

            </div>

        )
    }

}

export default Card;