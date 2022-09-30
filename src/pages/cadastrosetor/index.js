import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate } from "react-router-dom";

export default function CadastroSetor(){
    const navigate = useNavigate();
    // const [id,setId] = useState ("");
    const [nome,setNome] = useState("");
    // const [email,setEmail] = useState("");
    // const [senha,setSenha] = useState("");
    // const [confirmar,setConfirmar] = useState("");
    const [msg,setMsg] = useState("");
    const [dados,setDados]=useState([]);
    
    

    // function validaremail(){
    //     var re = /\S+@\S+\.\S+/;
    //     return re.test(email);
       
    
    // }

    useEffect(()=>{
        mostrardados();
    },[])
    function mostrardados(){
    let lista =JSON.parse(localStorage.getItem("cad-setor")||"[]");
    setDados(lista);
    }

    function verificarduplicidade(email){
        let dadosnovos = [];
        dadosnovos = dados.filter(item=>item.email==email);
        if(dadosnovos.length>0){
            return true
        }
            return false;
    }

    

    function salvardados(e){

        e.preventDefault();
        let i=0;
        let errorMsg=[];
        if(nome.length<3){
            errorMsg.push("Campo nome tem menos de 3 caracteres\n");
            i++;
        }
    //     if(verificarduplicidade(email)==true){
    //         errorMsg.push("o email fornecido ja esta cadastrado\n");
    //         i++;
    //     }
    //     if(email.length==0){
    //         errorMsg.push("campo email esta vazio\n");
    //         i++;
    //     }

    //    else if(!validaremail()){
    //         errorMsg.push('Por favor coloque um email valido!\n'); 
    //         i++;   
    //     }

    //     if(senha.length<3){
    //         errorMsg.push("Campo senha tem menos de 3 caracteres\n");
    //         i++;
    //     }
        // else if(senha!==confirmar){
        //     errorMsg.push("Senha e confirmação não conferem\n");
        //     i++;
        // }

        if(i==0){
            
            setMsg("");
            let lista = JSON.parse(localStorage.getItem("cad-setor")||"[]");
            lista.push(
                {
                    id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
                    nome:nome,
                    // email:email,
                    // senha:senha
                }
            )
            localStorage.setItem("cad-setor",JSON.stringify(lista));
            alert("dados salvos com sucesso!");
            navigate("/listasetor");
        }

         else{
            setMsg(errorMsg);
        }
        
    }
 return(
<div className="dashboard-container">
    <Menu />
    <div className="principal">
            <Head title="Cadastro de Setor" />
            <section className="form-cadastro"> 
                <form onSubmit={salvardados}>
                    {/* <label>ID</label>
                    <input placeholder="ID"
                    value={id}
                    onChange={e=>setId(e.target.value)}
                    /> */}
                    <label>Nome</label>
                    <input placeholder=""
                    type="text"
                    value={nome}
                    onChange={e=>setNome(e.target.value)}
                    />
                    {/* <label>Email</label>
                    <input 
                    type="text"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    /> */}
                    {/* <label>Data de Aquisição</label>
                    <input 
                    type="password"
                    value={senha}
                    onChange={e=>setSenha(e.target.value)}
                    /> */}
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
