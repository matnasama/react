import { Header } from './components/Header/Header.jsx'
import { Main } from './components/Main/Main.jsx'
import { Experiencia } from './components/Experiencia/Experiencia.jsx'
import { Educacion } from './components/Educacion/Educacion.jsx'
import Chatbot from './components/ChatBot/ChatBot.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <div className="background">
        <Header />
        <Main />
      </div>
      <Educacion />
      <Experiencia />
      <Chatbot />
    </>
  )
}
