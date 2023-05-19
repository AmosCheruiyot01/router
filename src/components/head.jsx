import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <div className="head">
            <div className="header">
                <h2> Business news   </h2>
                <h3>business</h3>
        </div>
<div className="shortcuts flex">
<Link className="shortcuts" to="/about">about</Link>
<Link className="shortcuts" to="/pages">Highlights</Link>
<Link className="shortcuts" to="/">home</Link>

        
</div>
        </div>


    );
}

export default Header;