import { useEffect, useState } from "react";
import { Country } from "../../types/Country"
import { Cities } from "../../types/Cities"
import Select from "react-select";
import styled from "./DestinosDeInteresse.module.css"

export const DestinoDeInteresse = () => {
    const [paises, setPaises] = useState<Country[]>([]);
    const [cidades, setCidades] = useState<Cities[]>([]);
    const [option] = useState(paises)

    const loadPaises = async () => {
        let response = await fetch("https://amazon-api.sellead.com/country");
        let json = await response.json();
        setPaises(json)
    };

    const loadCidades = async () => {
        let response = await fetch("https://amazon-api.sellead.com/city");
        let json = await response.json()
        setCidades(json)
    };

    useEffect(() => {
        loadPaises();
        loadCidades();
    }, []);
    return (
        <div className={styled.body}>
            <div className={styled.container}>
                <h2>Destinos de Interesse</h2>
                <Select options={option} />
                <label>País
                    <select multiple>
                        <option>Selecione...</option>
                        {paises.map((item, index) => (
                            <option key={index}>{item.name_ptbr}</option>
                        ))}
                    </select>
                </label>

                <label>Cidades
                    <select>
                        <option>Selecione...</option>
                        {cidades.map((item, index) => (
                            <option key={index}>
                                {item.name_ptbr}
                                {item.name_ptbr == null &&
                                    item.name
                                }
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        </div>
    );
};