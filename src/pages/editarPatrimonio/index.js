import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate, useParams } from "react-router-dom";

export default function EditarPatrimonio(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [nome,setNome] = useState("");
    const [data,setData] = useState("");
    const [confirmar,setConfirmar] = useState("");
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
    let lista =JSON.parse(localStorage.getItem("cad-patrimonio")||"[]");
    setDados(lista);
    let usu = lista.filter(item=>item.id=id);
    
    
        setNome(usu[0].nome);
        setData(usu[0].data);
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
        if(id.length<3){
            errorMsg.push("Campo nome tem menos de 3 caracteres\n");
            i++;
        }
       
        if(nome.length==0){
            errorMsg.push("campo email esta vazio\n");
            i++;
        }

    //    else if(!validaremail()){
    //         errorMsg.push('Por favor coloque um email valido!\n'); 
    //         i++;   
    //     }

        if(data.length<3){
            errorMsg.push("Campo senha tem menos de 3 caracteres\n");
            i++;
        }
        // else if(senha!==confirmar){
        //     errorMsg.push("Senha e confirmação não conferem\n");
        //     i++;
        // }

        if(i==0){
            
            setMsg("");
            let dadosnovos=[];
            let lista = JSON.parse(localStorage.getItem("cad-patrimonio")||"[]");
           dadosnovos=lista.map((function(item){
                if(item.id==id){
                    return {
                        id:id,
                        nome:nome,
                        data:data,
                        
                    }
                }else{
                    return{
                    id:item.id,
                    nome:item.nome,
                    email:item.email,
                    senha:item.senha
                    }
                }
           }));
            localStorage.setItem("cad-patrimonio",JSON.stringify(dadosnovos));
            alert("dados salvos com sucesso!");
            navigate("/listapatrimonio");
        }

         else{
            setMsg(errorMsg);
        }
        
    }
 return(
<div className="dashboard-container">
    <Menu />
    <div className="principal">
            <Head title="Editar Patrimônio" />
            <section className="form-cadastro"> 
                <form onSubmit={salvardados}>
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
                    <label>Data de Aquisição</label>
                    <input 
                    type="date"
                    value={data}
                    onChange={e=>setData(e.target.value)}
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
