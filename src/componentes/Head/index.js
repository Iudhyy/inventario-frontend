import { FiLogOut } from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default function Head({title}){
    const navigate = useNavigate();
    const logoff=()=>{
            
            navigate("/");
    }
    function saida() {
        confirmAlert({
          title: 'Atenção',
          message: 'Desejar realmente sair do sistema?',
          buttons: [
            {
              label: 'Não',
              onClick: () => alert('Click Não')
            },
            {
              label: 'Sim',
              onClick: () => {logoff()}
            }
          ]
        });
      };
    return(
        <div className="head">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="logoff">
                    <FiLogOut 
                        size={24}
                        color="red"
                        cursor="pointer"
                        onClick={saida}
                    />
                </div>
        </div>
    )
}