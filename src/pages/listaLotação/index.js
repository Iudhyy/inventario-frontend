import React, {useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import {FiEdit,FiDelete,FiFilePlus,FiTrash2} from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate,Link} from "react-router-dom";


export default function ListaLotacao(){
  const navigate=useNavigate();
    const [dados,setDados]=useState([]);
    const [row,setRow] = useState(0);
    useEffect(()=>{
                mostrardados();
    },[])

    function editar(id){
        navigate(`/editarlotacao/${id}`)
         
    }
    function mostrarnomeusuario(id){
      let lista=[];
      let cadastro=[];
      lista=JSON.parse(localStorage.getItem("cad-usuarios")||"[]");
      cadastro = lista.filter(item=>item.id==id);
      return cadastro[0].nome;
    }

    function mostrarnome(id,posicao){
      let lista=[];
      let cadastro=[];
      if(posicao==1){
        lista=JSON.parse(localStorage.getItem("cad-usuarios")||"[]");
      }
      if(posicao==2){
        lista=JSON.parse(localStorage.getItem("cad-empresas")||"[]");
      }
      if(posicao==3){
        lista=JSON.parse(localStorage.getItem("cad-patrimonio")||"[]");
      }
      if(posicao==4){
        lista=JSON.parse(localStorage.getItem("cad-setor")||"[]");
      }
       
     cadastro = lista.filter(item=>item.id==id);
      return cadastro[0].nome;


    }
    
    function excluir(id) {
        confirmAlert({
          title: 'Atenção',
          message: 'Deseja realmente excluir cadastro do lotaçao?',
          buttons: [
            {
              label: 'Não',
              onClick: () => alert('Click Não')
            },
            {
              label: 'Sim',
              onClick: () => {
                let dadosnovos = [];
                dadosnovos = dados.filter(item=>item.id!=id);
                setDados(dadosnovos);
                localStorage.setItem('cad-lotacao',JSON.stringify(dadosnovos));
                setRow(dadosnovos.length);
              }
            }
          ]
        });
      };


    function mostrardados(){
        let lista =JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
        setDados(lista);
        setRow(lista.length);
    }

 return(
<div className="dashboard-container">
    <Menu />

    <div className="principal">
    <Head title="Lista de Lotação" />
      <div className="button_new">
       <a href="/cadastrolotacao">
       <FiFilePlus
          size={24}
          color="green"
          cursor="pointer"
        />
       </a>
      </div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Responsavel</th>
                    <th>Contato</th>
                    <th></th>
                    <th></th>
                </tr>
                {
                    dados.map((lot)=>{
                        return(
                            <tr key={lot.toString()}>
                              <td>{lot.id}</td>
                                <td>{mostrarnome(lot.idusu,1)}</td>
                                <td>{mostrarnome(lot.idemp,2)}</td>
                                <td>{mostrarnome(lot.idpat,3)}</td>
                                <td>{mostrarnome(lot.idset,4)}</td>
                                <td>{lot.datalotacao}</td>
                                <td>
                                  
                                    <FiEdit
                                    color="blue"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>editar(lot.id)}
                                    />
                                </td>
                                <td>
                                <FiTrash2
                                    color="red"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>excluir(lot.id)}
                                    />
                                </td>

                            </tr>
                        )
                    })
                }
                <tr>
                  <td colSpan={3} style={{textAlign:"right",fontWeight:"bold"}}>Total</td>
                  <td colSpan={2}> {row} </td>
                </tr>

            </table>
    </div>
    
</div>

 )   
            }