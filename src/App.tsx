import { DadosPessoais } from './components/DadosPessoais';
import { DestinoDeInteresse } from './components/DestinosDeInteresse';
import styled from './App.module.css';
import { useState } from 'react'

function App() {
  const [data, setData] = useState<object[]>([]);
  const updataDados = (cpf: string, cel: string, email: string, nome: string) => {
    setData([{ nome: nome, cpf: cpf, email: email, cel: cel }])
  }

  return (
    <div className={styled.main}>
      <div className={styled.container}>
        <DadosPessoais />
        <DestinoDeInteresse />
      </div >
      <div className={styled.containerButton}>
        <button>Enviar</button>
      </div>
    </div>
  )
}

export default App
