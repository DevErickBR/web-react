import React, { useState } from 'react';
import InputMask from 'react-input-mask'

export const DadosPessoais = () => {
    const [cpf, setCpf] = useState<string>("");
    const [cel, setCel] = useState<string>("");
    const [email, setEmail] = useState<string>("")
    const [nome, setNome] = useState<string>("");

    return (
        <div>

            <h2>Dados Pessoais</h2>

            <fieldset>
                <legend>Nome</legend>
                <input
                    type='text'
                    value={nome}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />

            </fieldset>

            <fieldset>
                <legend>Email</legend>
                <input
                    type='email'
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
            </fieldset>

            <fieldset>
                <legend>Telefone</legend>
                <InputMask
                    mask="(99) 99999-9999"
                    value={cel}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCel(e.target.value)}
                />
            </fieldset>

            <fieldset>
                <legend>CPF</legend>
                <InputMask
                    mask="999.999.999-99"
                    value={cpf}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCpf(e.target.value)}
                />
            </fieldset>
        </div>
    );
};