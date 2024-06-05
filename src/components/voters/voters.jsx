import "./voters.css";
import Voter from "./voter.jsx";
import AdminButtons from '../admin-buttons.jsx';

import clearHandler from "../admin-buttons.jsx";
import { useEffect } from "react"; 

function Voters() {
    useEffect(() => {clearHandler()}, [])
    return (
        <div className="Voters">
            <Voter />
            <AdminButtons />
            <br /><br /><br />
            <hr />
            <br />
        </div>
    );
}

export default Voters;