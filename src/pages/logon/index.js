import React from "react";
import logo from '../../assets/imagens/logo.jpg';
import './styles.css';
import { useNavigate } from "react-router-dom";

export default function Logon(){

    const navigate=useNavigate();

function logar(){
    navigate("/dashboard");
}

 return(
<div className="logon-container">
    <section className="form">
        <form onSubmit={logar}>
            <h1>Faça seu login</h1>
                <input placeholder="Email"/>
                <input placeholder="senha" type="password"/>
                <button className="button_login" type="submit">
                Entrar
                </button>
        </form>
    </section>
    <section className="div-imagem">
        <img src={logo} width={150}/>
        <h1>Sistema de inventario</h1>
    </section>
    
</div>

 )   
}