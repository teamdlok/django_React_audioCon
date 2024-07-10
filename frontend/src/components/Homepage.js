import React, {Component} from "react";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import {BrowserRouter as Router,
    Routes, Route,

} from "react-router-dom";

export default class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (<Router>
            <Routes>
                <Route path='' element={<h1>This is the homepage</h1>}></Route>
                <Route path='/join' element={<RoomJoinPage />}></Route>
                <Route path='/create' element={<CreateRoomPage />}></Route>

            </Routes>
        </Router>)
    }
}