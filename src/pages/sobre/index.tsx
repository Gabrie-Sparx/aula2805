import { Link } from "react-router-dom" // npm i react-router-dom

export default function Sobre() {
    return (
        <>
            <h1>Sobre</h1>
            <div>
                O Desenvolvedor Gabriel Moreira, residente em indaiatuba, sp
            </div>
            <Link to="/">Voltar para Home</Link>
        </>
    )
}