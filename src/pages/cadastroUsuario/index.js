import React,{useState} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";

export default function Cadastrousuario(){
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [confirmar,setConfirmar] = useState("");

    function salvardados(e){
        e.preventDefault();
        alert("Dados Salvos com sucesso!");
    }
 return(
<div className="dashboard-container">
    <Menu />
    <div className="principal">
            <Head title="Cadastro de Usuários" />
            <section className="form-cadastro"> 
                <form onSubmit={salvardados}>
                    <label>Nome</label>
                    <input placeholder="Nome"
                    value={nome}
                    onChange={e=>setNome(e.target.value)}
                    />
                    <label>Email</label>
                    <input placeholder="e-mail@gmail.com"
                    type="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <label>Senha</label>
                    <input 
                    type="password"
                    value={senha}
                    onChange={e=>setSenha(e.target.value)}
                    />
                    <label>Confirmar Senha</label>
                    <input 
                    type="password"
                    value={confirmar}
                    onChange={e=>setConfirmar(e.target.value)}
                    />
                    <button className="button_save" type="submit" >
                        Salvar
                    </button>
                </form>
            </section>
    </div>
    
</div>

 )   
}
