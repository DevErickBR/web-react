import React, { useState } from 'react';
import InputMask from 'react-input-mask'
import styled from './DadosPessoais.module.css'

export const DadosPessoais = () => {
    const [cpf, setCpf] = useState<string>("");
    const [cel, setCel] = useState<string>("");
    const [email, setEmail] = useState<string>("")
    const [nome, setNome] = useState<string>("");


    return (
        <div className={styled.container}>

            <h2>Dados Pessoais</h2>
            <form>
                <fieldset>
                    <legend>Nome</legend>
                    <input
                        type='text'
                        value={nome}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
                        name="nome"
                        required
                    />

                </fieldset>

                <fieldset>
                    <legend>Email</legend>
                    <input
                        type='email'
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        name='email'
                        required

                    />
                </fieldset>

                <fieldset>
                    <legend>Telefone</legend>
                    <InputMask
                        mask="(99) 99999-9999"
                        value={cel}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCel(e.target.value)}
                        name='telefone'
                        required

                    />
                </fieldset>

                <fieldset>
                    <legend>CPF</legend>
                    <InputMask
                        mask="999.999.999-99"
                        value={cpf}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCpf(e.target.value)}
                        name='cpf'
                        required
                    />
                </fieldset>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    );
};