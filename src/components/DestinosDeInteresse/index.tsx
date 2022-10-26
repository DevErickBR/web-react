import { useEffect, useState } from "react";
import { Country } from "../../types/Country"
import { Cities } from "../../types/Cities"
import Select from "react-select";
import styled from "./DestinosDeInteresse.module.css"

export const DestinoDeInteresse = () => {
    const [paises, setPaises] = useState<Country[]>([]);
    const [cidades, setCidades] = useState<Cities[]>([]);
    const [optionsCountry, setOptionsCountry] = useState<object[]>([]);
    const [optionsCities, setOptionsCities] = useState<object[]>([]);

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

    const addOpCountry = () => {
        setOptionsCountry(paises.map((item) => ({ value: item.name_ptbr, label: item.name_ptbr })))
    };

    const addOpCities = () => {
        setOptionsCities(cidades.map((item) => ({ value: item.name_ptbr, label: item.name_ptbr })))
    }

    useEffect(() => {
        loadPaises();
        loadCidades();
    }, []);

    useEffect(() => {
        addOpCountry()
        addOpCities()
    }, [loadPaises, loadCidades])
    return (
        <div className={styled.body}>
            <div className={styled.container}>
                <h2>Destinos de Interesse</h2>
                <div className={styled.square}>
                    <h3>País</h3>
                    <Select options={optionsCountry} isMulti />
                </div>

                <div className={styled.square}>
                    <h3>Cidades</h3>
                    <Select options={optionsCities} isMulti />
                </div>
            </div>
        </div>
    );
};