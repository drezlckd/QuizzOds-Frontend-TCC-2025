import "./Home.css";
import { header } from "../../components/header/header";
import { nav } from "../../components/nav/nav";
import { odsCards } from "../../data/odsCards";


export function Home() {    return (
        <div className="home-container">
            {header()}
            {nav()}
            <main className="home-main">
                <div>
                    {odsCards.map((card, index) => (
                        <div key={index}>
                            <h2>{card.title}</h2>
                            <p>{card.text}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
