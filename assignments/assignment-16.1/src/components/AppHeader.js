import React,{useEffect} from 'react';
import MemberDropdown from '../components/MemberDropdown';

const AppHeader = ({ title,navigate, currentUser }) => {


    useEffect(() =>{
        // console.log(currentUser);
    })
    return (<nav className="navbar navbar-expand-lg navbar-light  AppHeader">
        <a className="navbar-brand" onClick={()=>navigate("BOOK LIST")}>{title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#" onClick={()=>navigate("BOOK LIST")}>Books <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={()=>navigate("BOOK ADD")}>Add Book</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            </div>
            <div className="headerRight">
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            
            <ul className="navbar-nav mr-auto">
            <MemberDropdown currentUser={currentUser} navigate={navigate} /></ul>
            </div>
            
        </div>
    </nav>);

};

export default AppHeader;