import React,{useState} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";

export default function Cadastrousuario(){
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [confirmar,setConfirmar] = useState("");
    const [msg,setMsg] = useState("");
    

    function validaremail(){
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
        if (!filter.test(email.value)) {
        // alert('Please provide a valid email address');
        // email.focus;
        return false;
     }  
    
    }

    

    function salvardados(e){

        e.preventDefault();
        let i=0;
        let errorMsg=[];
        if(validaremail()==false){
            errorMsg.push('Por favor coloque um email valido!\n'); 
            i++;   
        }
        if(nome.length<3){
            errorMsg.push("Campo nome tem menos de 3 caracteres\n");
            i++;
        }
        if(senha.length<3){
            errorMsg.push("Campo senha tem menos de 3 caracteres\n");
            i++;
        }
        if(i==0){
            alert ("dados salvos com sucesso")
        }

         else{
            setMsg(errorMsg);
        }
        
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
                    <pre>{msg}</pre>
                </form>
            </section>
    </div>
    
</div>

 )   
 }
