import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <p>Este Projeto foi criado para desenvolver </p>
            
            <Link to="/contato">Contato</Link>
            <Link to="/tarefas">Tarefas</Link>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}