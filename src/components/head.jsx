import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <div className="head">
            <div className="header">
                <h2>FORMULA 1    </h2>
                <h3>F1!</h3>
        </div>
<div className="shortcuts flex">
<Link className="shortcuts" to="/about">about</Link>
<Link className="shortcuts" to="/pages">pages</Link>
<Link className="shortcuts" to="/">home</Link>
<Link className="shortcuts" to="/about">highlights</Link>
        
</div>
        </div>


    );
}

export default Header;