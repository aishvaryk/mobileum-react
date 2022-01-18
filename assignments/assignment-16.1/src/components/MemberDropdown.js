import React, {useEffect} from 'react';

const MemberDropdown = ({currentUser,navigate}) => {

    if (currentUser===null) {
        return (
            
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Member
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#" onClick={()=>navigate("USER LOGIN")}>Login</a>
                <a className="dropdown-item" href="#" onClick={()=>navigate("USER REGISTER")}>Register</a>
            </div>
        </li>
        )
    }
    return (
        
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            { currentUser.name}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#" >Profile</a>
            <a className="dropdown-item" href="#" >Favourites</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Logout</a>
        </div>
    </li>
    );
}

export default MemberDropdown;