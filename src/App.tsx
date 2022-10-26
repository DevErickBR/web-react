import { DadosPessoais } from './components/DadosPessoais';
import { DestinoDeInteresse } from './components/DestinosDeInteresse';
import styled from './App.module.css';

function App() {
  return (
    <div className={styled.container}>
      <DadosPessoais />
      <DestinoDeInteresse />
    </div >
  )
}

export default App
