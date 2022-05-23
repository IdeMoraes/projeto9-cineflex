import { useNavigate} from "react-router-dom";
import Header from "../Header";
import './style.css';

export default function SuccessPage(props) {
  const navigate = useNavigate();
  const title=props.title;
  const setTitle=props.setTitle;
  const date=props.date;
  const setDate=props.setDate;
  const showtime=props.showtime;
  const setShowtime=props.setShowtime;
  const name = props.name;
  const setName = props.setName;
  const cpf = props.cpf;
  const setCpf = props.setCpf;
  const ids =props.ids;
  const setIds = props.setIds;
    return (
      <>
        <Header/>
        <div className="pedido-de-sucesso">Pedido feito com sucesso!</div>
        <div className="titulo-secao-sucesso">Filme e sessão</div>
        <div>{title}</div>
        <div>{date} {showtime}</div>
        <div className="titulo-secao-sucesso">Ingressos</div>
        {ids.map(id=> <div>Assento {id}</div>)}
        <div>Assento 15 Chumbado</div>
        <div>Assento 16 chumbado</div>
        <div className="titulo-secao-sucesso">Comprador</div>
        <div>Nome: {name}</div>
        <div>CPF: {cpf}</div>
        <div className="voltar-para-home" onClick={()=>navigate("/")}>Voltar para Home</div>
      </>
    );      
  }