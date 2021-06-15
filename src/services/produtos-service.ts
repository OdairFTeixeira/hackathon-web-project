import api from './api';

class ProdutosService {
  static async createProduct({
    estoque,
    nome,
    valor,
    descricao,
    codigo_barras,
    store_id
  }) {
    return await api.post(
      '/products',
      { estoque, nome, valor, descricao, codigo_barras, store_id },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token_integracao')}`
        }
      }
    );
  }

  static async deleteProduct(id) {
    return await api.delete('/product', {
      params: { id },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token_integracao')}`
      }
    });
  }

  static async getProduct(id) {
    return await api.get('/product', {
      params: { id },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token_integracao')}`
      }
    });
  }
}

export { ProdutosService };
