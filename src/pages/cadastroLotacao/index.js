import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate } from "react-router-dom";

export default function CadastroLotacao(){
    const navigate = useNavigate();
    // const [id,setId] = useState ("");
    const [datalotacao,setDatalotacao] = useState ();
    const [idemp,setIdemp] = useState ("");
    const [idpat,setIdpat] = useState("");
    const [idset,setIdset] = useState("");
    const [idusu,setIdusu] = useState("");
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [usuarios,setUsuarios]=useState([]);
    const [empresa,setEmpresa]=useState([]);
    const [setor,setSetor]=useState([]);
    const [patrimonio,setPatrimonio]=useState([]);
    // const [confirmar,setConfirmar] = useState("");
    const [msg,setMsg] = useState("");
    const [dados,setDados]=useState([]);
    
    

    function validaremail(){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
       
    
    }

    useEffect(()=>{
        mostrardados();
    },[])
    function mostrardados(){
    let lista =JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
    setUsuarios(JSON.parse(localStorage.getItem("cad-usuarios")||"[]"))
    setEmpresa(JSON.parse(localStorage.getItem("cad-empresas")||"[]"))
    setSetor(JSON.parse(localStorage.getItem("cad-setor")||"[]"))
    setPatrimonio(JSON.parse(localStorage.getItem("cad-patrimonio")||"[]"))
    setDados(lista);
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

        // e.preventDefault();
      

        if(idemp.length!==0 && idpat.length!==0 && idset.length!==0 && idusu.length!==0)
        {
            
            setMsg("");
            let lista = JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
            lista.push(
                {
                    id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
                    idusu:idusu,
                    idset:idset,
                    idpat:idpat,
                    idemp:idemp
                  
                }
            )
            localStorage.setItem("cad-lotacao",JSON.stringify(lista));
            alert("dados salvos com sucesso!");
            navigate("/listalotacao");
        }

         else{
            setMsg("verifique todos os campos!!!!!");
        }
        
    }
 return(
<div className="dashboard-container">
    <Menu />
    <div className="principal">
            <Head title="Cadastro de Lotação" />
            <section className="form-cadastro"> 
                <form onSubmit={salvardados}>

                <label>Usuário</label>
                <select onChange={(e) => setIdusu(e.target.value)}                
                >
                    <option></option>
                    {
                    usuarios.map((usu)=>{
                        return(
                            <option value={usu.id}>{usu.nome}</option>
                        )
                    })
                } 
                </select>

                <label>Empresa</label>
                <select onChange={(e) => setIdemp(e.target.value)}                
                >
                    <option></option>

                    {
                    empresa.map((emp)=>{
                        return(
                            <option value={emp.id}>{emp.nome}</option>
                        )
                    })
                } 
                </select>

                <label>Patrimônio</label>
                <select onChange={(e) => setIdpat(e.target.value)}                
                >
                    <option></option>
                    {
                    patrimonio.map((pat)=>{
                        return(
                            <option value={pat.id}>{pat.nome}</option>
                        )
                    })
                } 
                </select>

                <label>Setor</label>
                <select onChange={(e) => setIdset(e.target.value)}                
                >
                    <option></option>
                    {
                    setor.map((set)=>{
                        return(
                            <option value={set.id}>{set.nome}</option>
                        )
                    })
                } 
                </select>


                   
                    <input
                    type={"date"}
                    value={datalotacao}
                    onChange={(e)=> setDatalotacao(e.target.value)}
                    />
                    <button className="button_save" type="submit" >
                        Salvar
                    </button>
                    <pre>{msg}</pre>
                    <pre>{idset}</pre>
                </form>
            </section>
    </div>
    
</div>

 )   
 }
