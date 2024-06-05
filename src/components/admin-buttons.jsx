import "./admin-buttons.css";

export function clearHandler() {
    console.log("test");
}

function submitHandler() {

}

function AdminButtons() {
    return (
        <div className="Buttons">
            <from>
                <input onSubmit={submitHandler} className="Submit" type="submit" value="Submit"/>
                <input onSubmit={clearHandler} className="Clear" type="reset" value="Clear"/>  
            </from>
        </div>
    );
}

export default AdminButtons;