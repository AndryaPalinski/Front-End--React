import "./index.css";
const Card = ({title, text}) => {

    return (
        <article className="card">
            <img src="src/assets/react1.jpeg" alt="imagem do card" />
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <a href="www.github.com">ᓚᘏᗢ</a>
        </article>
    );
};

export default Card;