import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate, useParams } from "react-router-dom";

export default function EditarSetor(){
    const navigate = useNavigate();
    const {id} = useParams();
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
    let usu = lista.filter(item=>item.id=id);
        setNome(usu[0].nome);
        // setEmail(usu[0].senha);
        // setSenha(usu[0].senha);
        // setConfirmar(usu[0].senha);
    }

    // function verificarduplicidade(email){
    //     let dadosnovos = [];
    //     dadosnovos = dados.filter(item=>item.email==email);
    //     if(dadosnovos.length>0){
    //         return true
    //     }
    //         return false;
    // }

    

    function salvardados(e){

        e.preventDefault();
        let i=0;
        let errorMsg=[];
        if(nome.length<3){
            errorMsg.push("Campo nome tem menos de 3 caracteres\n");
            i++;
        }
       
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
    //     else if(senha!==confirmar){
    //         errorMsg.push("Senha e confirmação não conferem\n");
    //         i++;
    //     }

        if(i==0){
            
            setMsg("");
            let dadosnovos=[];
            let lista = JSON.parse(localStorage.getItem("cad-setor")||"[]");
           dadosnovos=lista.map((function(item){
                if(item.id==id){
                    return {
                        id:id,
                        nome:nome,
                        // email:email,
                        // senha:senha
                    }
                }else{
                    return{
                    id:item.id,
                    nome:item.nome,
                    // email:item.email,
                    // senha:item.senha
                    }
                }
           }));
            localStorage.setItem("cad-setor",JSON.stringify(dadosnovos));
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
            <Head title="Editar Setor" />
            <section className="form-cadastro"> 
                <form onSubmit={salvardados}>
                    <label>Nome</label>
                    <input placeholder="Nome"
                    value={nome}
                    onChange={e=>setNome(e.target.value)}
                    />
                    {/* <label>Email</label>
                    <input placeholder="e-mail@gmail.com"
                    type="text"
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
