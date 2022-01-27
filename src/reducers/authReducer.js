import { Alert } from "react-bootstrap";

const authReducer = (state={},action)=>{
    switch (action.type) {
        case "SIGN_IN":
            console.log("LOGED IN");
            return state
        case "SIGN_IN_ERR":
            // console.log("LOGED IN error" +action.err);
            <Alert variant="danger" dismissible >{action.err}</Alert>
            return state
            
        case "SIGN_IN_ERR":
        console.log("LOGED ou");
        return state

        default:
            return state
    }
}

export default authReducer