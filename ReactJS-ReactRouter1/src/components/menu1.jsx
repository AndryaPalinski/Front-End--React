import React from "react";
import { Link } from "react-router-dom";

const Menu1 = () => {

    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/profile"}>Acessar Profile ☜(ﾟヮﾟ☜)</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu1;