import { useEffect, useState } from "react";
import { Country } from "../../types/Country"
import { Cities } from "../../types/Cities"

export const DestinoDeInteresse = () => {
    const [paises, setPaises] = useState<Country[]>([]);
    const [cidades, setCidades] = useState<Cities[]>([]);

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
        <div>
            <h2>Destinos de Interesse</h2>

            <label>País
                <select>
                    {paises.map((item, index) => (
                        <option key={index}>{item.name_ptbr}</option>
                    ))}
                </select>
            </label>

            <label>Cidades
                <select>
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
    );
};