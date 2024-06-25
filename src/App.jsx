import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Registro from './pages/registro/Registro.jsx'

import './App.css'

import Tabela from './helpers/tabela.js'
import { membrosData, floresData } from './helpers/placeHolderData.js'

if (!localStorage.getItem("membros")){
    Tabela.iniciar(["id", "nome", "senha", "admin"], "membros")
    const membros = new Tabela("membros")

    membrosData.forEach(membro => membros.adicionar(membro))
    membros.enviarParaLocalStorage()
}
if (!localStorage.getItem("flores")){
    Tabela.iniciar(["id", "nome", "valor", "florImg", "idReservado"],"flores")
    const flores = new Tabela("flores")

    floresData.forEach(flor => flores.adicionar(flor))
    flores.enviarParaLocalStorage()
}

import {
    HashRouter as Router,
    Route,
    Routes
} from "react-router-dom"
import { Toaster } from 'react-hot-toast'

function App() {

    return (
        <>
            <Toaster/>
            <Router>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="registro" element={<Registro />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
