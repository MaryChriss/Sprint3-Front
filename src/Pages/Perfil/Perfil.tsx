import { useState } from "react";
import { FaCar } from "react-icons/fa"; // Ícone de carro importado corretamente
import { Button } from "../../components/FormLogin/FormLogin.style";
import { Layout } from "../../components/Layout/Layout";
import { StyledCar, StyledContainer, StyledConteudo, StyledInfosUser, StyledInputs } from "./Perfil.style";
import Input from "../../components/Input/Input";

export default function Perfil() {
    const [vehicles, setVehicles] = useState([]);
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState('');

    const handleAddVehicle = () => {
        // Verifica se os campos não estão vazios
        if (model && brand && year) {
            const newVehicle = { model, brand, year };
            setVehicles([...vehicles, newVehicle]); // Adiciona o novo veículo à lista
            setModel(''); // Limpa os campos de input
            setBrand('');
            setYear('');
        }
    };

    return (
        <Layout>
            <StyledContainer>
                <StyledConteudo>

                    <StyledInfosUser>
                        <img src="../../../public/user.png" alt="" className="image" />

                        <div>
                            <h1 className="h1fi">Fulano de tal tal e tal</h1>
                            <p>Cpf: xxx.xxx.xxx-xx</p>
                        </div>
                    </StyledInfosUser>


                    <div>
                        <div>
                            <h3>Veículos:</h3>
                            <div>
                                <input
                                    className="inputcar"
                                    type="text"
                                    placeholder="Modelo"
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}   />
                                <input
                                    className="inputcar"
                                    type="text"
                                    placeholder="Marca"
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}    />
                                <input
                                    className="inputcar"
                                    type="text"
                                    placeholder="Ano"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}  />
                            </div>
                            <Button onClick={handleAddVehicle} style={{ marginTop: '2rem', marginLeft: "10rem", marginBottom:"2rem" }}>
                                Adicionar
                            </Button>
                        </div>
                    </div>

                    <StyledCar>
                        {vehicles.map((vehicle, index) => (
                            <div key={index} className="card">
                                <div>
                                    <p><strong>Modelo:</strong> {vehicle.model}</p>
                                    <p><strong>Marca:</strong> {vehicle.brand}</p>
                                    <p><strong>Ano:</strong> {vehicle.year}</p>
                                </div>

                                <div>
                                    <FaCar style={{ fontSize: '3rem', color: '#007bff', marginLeft: "3rem" }} />
                                </div>
                            </div>
                        ))}
                    </StyledCar>
                </StyledConteudo>
            </StyledContainer>
        </Layout>

    );
}
