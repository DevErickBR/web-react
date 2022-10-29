import { DadosPessoais } from './components/DadosPessoais';
import { DestinoDeInteresse } from './components/DestinosDeInteresse';
import styled from './App.module.css';
import { FormEvent, useState } from 'react'

function App() {
  return (
    <div className={styled.main}>
      <div className={styled.container}>
        <DadosPessoais />
        <DestinoDeInteresse />
      </div >
    </div>
  )
}

export default App
