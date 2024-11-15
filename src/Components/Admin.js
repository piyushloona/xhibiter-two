import { Link } from "react-router-dom";

const admin=()=>{
    return(
        <div className="admin my-4">
            <div className="form ">
                <h2 className="text-center">Admin Login</h2>
                <label className="user   py-3">UserName</label><br/>
                <input type="text" className="first_input p-2"/>
                <label className="user   py-3">Password</label><br/>
                <input type="text" className="first_input p-2"/>
                <button type="submit" className="my-4 border-none"  ><Link to="/dashboard1" className="text-decoration-none ps-5 py-3 pe-5">Login</Link></button>

            </div>
            
        </div>
    )
}
export default admin;