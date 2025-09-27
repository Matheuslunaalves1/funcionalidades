import React, { useEffect, useState } from 'react';
import { getVeiculos, createVeiculo } from '../services/veiculoService';

interface Veiculo {
  id: number;
  placa: string;
  marca: string;
  modelo: string;
}

export function VeiculosPage() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [placa, setPlaca] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const fetchVeiculos = async () => {
    try {
      const response = await getVeiculos();
      setVeiculos(response.data);
    } catch (error) {
      console.error("Erro ao buscar veículos:", error);
      setMensagem("Erro ao carregar a frota.");
    }
  };

  useEffect(() => {
    fetchVeiculos();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem("Cadastrando...");
    try {
      await createVeiculo({ placa, marca, modelo });
      setMensagem("Veículo cadastrado com sucesso!");
      // Limpa os campos e atualiza a lista de veículos na tela
      setPlaca('');
      setMarca('');
      setModelo('');
      fetchVeiculos(); 
    } catch (error) {
      console.error("Erro ao cadastrar veículo:", error);
      setMensagem("Falha ao cadastrar o veículo.");
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div>
        <h2>Cadastrar Novo Veículo</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <input value={placa} onChange={e => setPlaca(e.target.value)} placeholder="Placa (ex: ABC-1234)" required />
          <input value={marca} onChange={e => setMarca(e.target.value)} placeholder="Marca (ex: Volvo)" required />
          <input value={modelo} onChange={e => setModelo(e.target.value)} placeholder="Modelo (ex: FH 540)" required />
          <button type="submit">Adicionar Veículo</button>
          {mensagem && <p>{mensagem}</p>}
        </form>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <div>
        <h2>Frota Atual</h2>
        <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
          {veiculos.length > 0 ? (
            <ul>
              {veiculos.map(veiculo => (
                <li key={veiculo.id}>
                  <strong>{veiculo.marca} {veiculo.modelo}</strong> - Placa: {veiculo.placa}
                </li>
              ))}
            </ul>
          ) : (
            <p>Carregando frota...</p>
          )}
        </div>
      </div>
    </div>
  );
}