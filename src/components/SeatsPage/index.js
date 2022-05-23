import { useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import './style.css';


export default function SeatsPage(props){
    const parameter = useParams();
    const [posterURL,setPosterURL]=useState([]);

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
    const [weekday,setWeekday]=useState([]);
    const [seats,setSeats]=useState([]);
    const [ids,setIds]= useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${parameter.idSessao}/seats`);
		requisicao.then(resposta => {
            console.log(resposta.data);
            setPosterURL(resposta.data.movie.posterURL);
            setTitle(resposta.data.movie.title);
            setDate(resposta.data.day.date);
            setWeekday(resposta.data.day.weekday);
            setShowtime(resposta.data.name);
            setSeats(resposta.data.seats);
        });
	}, []);
    function adicionarAssento(id){
        setIds([...ids,parseInt(id)]);
        
    }
    function enviarRequisicao(){
        const objetoEnviado={
            ids: ids,
            name: name,
            cpf: cpf
        }
        console.log(objetoEnviado);
        const requisicao=axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",objetoEnviado);
        requisicao.then(resposta=>{console.log(resposta);navigate("/sucesso");});
    }
    return(
        <div className="seats-page">
            <Header/>
            <div className="step">Selecione o(s) assento(s)</div>
            <div className="seating-plan">
                {seats.map(seat=> <Seat name={seat.name} isAvailable={seat.isAvailable} adicionarAssento={adicionarAssento} />)}
            </div>
            <div className="legends">
                <div className="legend">
                    <div className="legend-circle selected"></div>
                    <p>Selecionado</p>
                </div>
                <div className="legend">
                    <div className="legend-circle available"></div>
                    <p>Disponível</p>
                </div>
                <div className="legend">
                    <div className=" legend-circle unavailable"></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <div className="user-data-inputs">
                <p className="user-data-title">Nome do comprador:</p>
                <input className="user-data-input" placeholder="Digite seu nome..." onChange={e=>setName(e.target.value)}/>
                <p className="user-data-title">CPF do comprador:</p>
                <input className="user-data-input" placeholder="Digite seu CPF..." onChange={e=>setCpf(e.target.value)}/>
            </div>
            <button className="reservar-acento" onClick={()=>enviarRequisicao()}>Reservar assento(s)</button>
            <Footer posterURL={posterURL} title={title} weekday={weekday} showtime={showtime}/>
        </div>
    );
}
function Seat(props){
    const [isSelected, setIsSelected] =useState("");
    if(props.isAvailable===true){
        return (
            <div className={`seat available ${isSelected}`} onClick={()=>{props.adicionarAssento(props.name);setIsSelected("selected");}}>{props.name} </div>
        );
    }
    else{
        return (
            <div className="seat unavailable" onClick={()=>alert("Alguém já reservou este assento!")}>{props.name}</div>
        )
    }

}
