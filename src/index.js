import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MoviesPage from "./components/MoviesPage";
import ShowTimesPage from "./components/ShowTimesPage";
import SeatsPage from "./components/SeatsPage";
import SuccessPage from "./components/SucessPage";
import './css/style.css';

function App() {
	const [title,setTitle]=useState([]);
	const [date,setDate]= useState([]);
	const [showtime,setShowtime]=useState([]);
	const [name,setName]=useState([]);
    const [cpf,setCpf]=useState([]);
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MoviesPage />} />
				<Route path="/sessoes/:idFilme" element={<ShowTimesPage />} />
        		<Route path="/assentos/:idSessao" element={<SeatsPage title={title} setTitle={setTitle} date={date} setDate={setDate} showtime={showtime} setShowtime={setShowtime} name={name} setName={setName} cpf={cpf} setCpf={setCpf}/>} />
        		<Route path="/sucesso" element={<SuccessPage title={title} setTitle={setTitle} date={date} setDate={setDate} showtime={showtime} setShowtime={setShowtime} name={name} setName={setName} cpf={cpf} setCpf={setCpf}/>} />
			</Routes>
		</BrowserRouter>
	);
}

ReactDOM.render(<App />, document.querySelector(".root"));


