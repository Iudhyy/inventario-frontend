import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate, useParams } from "react-router-dom";

export default function Editarempresas(){
    const navigate = useNavigate();
    // const {id} = useParams();
    const[id,setId] = useState("");
    const [nome,setNome] = useState("");
    // const [email,setEmail] = useState("");
    const [responsavel,setResponsavel] = useState("");
    const [contato,setContato] = useState("");
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
    let lista =JSON.parse(localStorage.getItem("cad-empresas")||"[]");
    setDados(lista);
    let usu = lista.filter(item=>item.id=id);
        setNome(usu[0].nome);
        setId(usu[0].id);
        setResponsavel(usu[0].responsavel);
        setContato(usu[0].contato);
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
       
        if(responsavel.length==0){
            errorMsg.push("campo email esta vazio\n");
            i++;
        }

    //    else if(!validaremail()){
    //         errorMsg.push('Por favor coloque um email valido!\n'); 
    //         i++;   
    //     }

        if(contato.length<3){
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
            let lista = JSON.parse(localStorage.getItem("cad-empresas")||"[]");
           dadosnovos=lista.map((function(item){
                if(item.id==id){
                    return {
                        id:id,
                        nome:nome,
                        responsavel:responsavel,
                        contato:contato
                    }
                }else{
                    return{
                    id:item.id,
                    nome:item.nome,
                    responsavel:item.responsavel,
                    contato:item.contato
                    }
                }
           }));
            localStorage.setItem("cad-empresas",JSON.stringify(dadosnovos));
            alert("dados salvos com sucesso!");
            navigate("/listaempresas");
        }

         else{
            setMsg(errorMsg);
        }
        
    }
 return(
<div className="dashboard-container">
    <Menu />
    <div className="principal">
            <Head title="Editar Empresa" />
            <section className="form-cadastro"> 
                <form onSubmit={salvardados}>
                    <label>id</label>
                    <input placeholder="id"
                    value={id}
                    onChange={e=>setId(e.target.value)}
                    />
                    <label>nome</label>
                    <input placeholder="nome"
                    type="text"
                    value={nome}
                    onChange={e=>setNome(e.target.value)}
                    />
                    <label>responsavel</label>
                    <input placeholder="responsavel"
                    type="text"
                    value={responsavel}
                    onChange={e=>setResponsavel(e.target.value)}
                    />
                    <label>Contato</label>
                    <input placeholder="contato"
                    type="text"
                    value={contato}
                    onChange={e=>setContato(e.target.value)}
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
