import { useState } from "react";
import { FaCar, FaTimes } from "react-icons/fa"; // Ícones de carro e X importados
import { Button } from "../../components/FormLogin/FormLogin.style";
import { Layout } from "../../components/Layout/Layout";
import { StyledCar, StyledContainer, StyledConteudo, StyledInfosUser } from "./Perfil.style";

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

    const handleRemoveVehicle = (indexToRemove) => {
        // Filtra a lista de veículos para remover o veículo no índice fornecido
        const updatedVehicles = vehicles.filter((_, index) => index !== indexToRemove);
        setVehicles(updatedVehicles); // Atualiza a lista de veículos
    };

    return (
        <Layout>
            <StyledContainer>
                <StyledConteudo>
                    <StyledInfosUser>
                        <img src="../../../public/user.png" alt="Usuário" className="image" />
                        <div>
                            <h1 className="h1fi">Fulano de tal tal e tal</h1>
                            <p>E-mail:</p>
                        </div>
                    </StyledInfosUser>

                    <div>
                        <h3>Veículos:</h3>
                        <div>
                            <input
                                className="inputcar"
                                type="text"
                                placeholder="Modelo"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            />
                            <input
                                className="inputcar"
                                type="text"
                                placeholder="Marca"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                            <input
                                className="inputcar"
                                type="text"
                                placeholder="Ano"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </div>
                        <Button
                            onClick={handleAddVehicle}
                            style={{ marginTop: '2rem', marginLeft: "10rem", marginBottom: "2rem" }}
                        >
                            Adicionar
                        </Button>
                    </div>

                    <StyledCar>
                        {vehicles.map((vehicle, index) => (
                            <div key={index} className="card">
                                <div>
                                    <p><strong>Modelo:</strong> {vehicle.model}</p>
                                    <p><strong>Marca:</strong> {vehicle.brand}</p>
                                    <p><strong>Ano:</strong> {vehicle.year}</p>
                                </div>

                                <div className="icons">
                                    <FaCar style={{ fontSize: '3rem', color: '#007bff', marginLeft: "3rem" }} />
                                    <FaTimes
                                        style={{
                                            fontSize: '1.2rem',
                                            color: 'red',
                                            cursor: 'pointer',
                                            marginLeft: '1rem'
                                        }}
                                        onClick={() => handleRemoveVehicle(index)} // Remove o veículo ao clicar
                                    />
                                </div>
                            </div>
                        ))}
                    </StyledCar>
                </StyledConteudo>
            </StyledContainer>
        </Layout>
    );
}
