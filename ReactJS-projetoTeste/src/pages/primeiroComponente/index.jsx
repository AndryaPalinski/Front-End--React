import React from "react";
import Card from "../../components/card";
import "./index.css";

function Inicial() {
    return (
        <article className="card">
            <div>
                <h1>React -- Testes.</h1>
                <Card title="Gatito :3" text="( •̀ ω •́ )✧👍👍👍" />
            </div>
        </article>
    );
};

export default Inicial;