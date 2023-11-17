import React from "react";
import { Link } from "react-router-dom";

const Menu2 = () => {

    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/home"}>Voltar para Home ☜(ﾟヮﾟ☜)</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu2;