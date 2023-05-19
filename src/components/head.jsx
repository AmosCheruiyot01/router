import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <div className="head">
            <div className="header">
                <h2> ChatGPT  </h2>
                <h3>Business News</h3>
        </div>
<div className="shortcuts flex">
<Link className="shortcuts" to="/">Home</Link>
<Link className="shortcuts" to="/pages">Highlights</Link>
<Link className="shortcuts" to="/about">About</Link>


        
</div>
        </div>


    );
}

export default Header;