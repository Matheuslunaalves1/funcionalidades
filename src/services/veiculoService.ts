import { api } from './api';

interface VeiculoData {
  placa: string;
  marca: string;
  modelo: string;
}

export const getVeiculos = () => api.get('/veiculos');
export const createVeiculo = (data: VeiculoData) => api.post('/veiculos', data);