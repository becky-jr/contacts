import { Component } from "react";
import './Main.css'
import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                { name: 'Bekzod', phone: '+998991852002' },
                { name: 'Abubakr', phone: '+998900031714' },
                { name: 'Abduboriy', phone: '+998974333380' },
            ]
        }
    }


    showContacts = () => {
        this.state.data.forEach(item => {
            <Card name={item.name}
                  phone={item.phone}/>
        })
    }


    render() {

        return (

            <div className="container">

                <AddCard />

                <div className="main-content">

                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </div>

            </div>

        )

    }

}

export default Main;