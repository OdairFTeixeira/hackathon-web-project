import api from './api';

class ProdutosService {
  static async createProduct({ estoque, nome, valor, descricao, store_id }) {
    return await api.post(
      '/products',
      { estoque, nome, valor, descricao, store_id },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token_integracao')}`
        }
      }
    );
  }
}

export { ProdutosService };
