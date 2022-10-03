import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate, useParams } from "react-router-dom";

export default function EditarLotacao(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [datalotacao,setDatalotacao] = useState ();
    const [idemp,setEmp] = useState ("");
    const [idpat,setPat] = useState("");
    const [idset,setSet] = useState("");
    const [idusu,setIdusu] = useState("");
    const [usuarios,setUsuarios]=useState([]);
    const [empresa,setEmpresa]=useState([]);
    const [setor,setSetor]=useState([]);
    const [patrimonio,setPatrimonio]=useState([]);
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
    let lista =JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
        let lot = lista.filter(item=>item.id==id);
        setIdusu(lot[0].idusu);
        setEmp(lot[0].idemp);
        setPat(lot[0].idpat);
        setSet(lot[0].idset);
        setDatalotacao(lot[0].datalotacao);
        setUsuarios(JSON.parse(localStorage.getItem("cad-usuarios")||"[]"));
        setEmpresa(JSON.parse(localStorage.getItem("cad-empresas")||"[]"));
        setPatrimonio(JSON.parse(localStorage.getItem("cad-patrimonio")||"[]"));
        setSetor(JSON.parse(localStorage.getItem("cad-setor")||"[]"));
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
      

        if(idemp.length!==0 && idpat.length!==0 && idset.length!==0 && idusu.length!==0){
            
            setMsg("");
            let lista = JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
            lista.push(
                {
                  id:id,
                  idusu:idusu,
                  idset:idset,
                  idpat:idpat,
                  idemp:idemp,
                  datalotacao:datalotacao
                }
            )
            alert("dados salvos com sucesso!");
            navigate("/listalotacao");
        }

         else{
            setMsg(errorMsg);
        }
        
    }
 return(
<div className="dashboard-container">
    <Menu />
    <div className="principal">
            <Head title="Editar Lotação" />
            <section className="form-cadastro"> 
                <form onSubmit={salvardados}>
                <label>Usuário</label>
                    <select
                    value={idusu}
                    onChange={(e) => setIdusu(e.target.value)}
                    >
                    {
                    usuarios.map((usu)=>{
                          return(
                            <option value={usu.id}> {usu.nome} </option>
                          )
                          })
                    }
                    </select>

                    <label>Empresa</label>
                    <select
                    value={idemp}
                    onChange={(e) => setEmp(e.target.value)}
                    >
                    {
                    empresa.map((emp)=>{
                          return(
                            <option value={emp.id}> {emp.nome} </option>
                          )
                          })
                    }
                    </select>  
                    <label>Patrimônio</label>
                    <select
                    value={idpat}
                    onChange={(e) => setPat(e.target.value)}
                    >
                    {
                    patrimonio.map((pat)=>{
                          return(
                            <option value={pat.id}> {pat.nome} </option>
                          )
                          })
                    }
                    </select>  
                    <label>Setor</label>
                    <select
                    value={idset}
                    onChange={(e) => setSet(e.target.value)}
                    >
                    {
                    setor.map((set)=>{
                          return(
                            <option value={set.id}> {set.nome} </option>
                          )
                          })
                    }
                    </select>  
                    <input 
                            type="Date"
                            value={datalotacao}
                            onChange={(e) => setDatalotacao(e.target.value)}             
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
