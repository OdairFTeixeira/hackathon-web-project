import api from './api';

class ProdutosService {
    static async createProduct({
        nome,
        valor,
        estoque,
        descricao,
        store_id
    }) {
        return await api.post(
            '/products',
            {
                nome,
                valor,
                estoque,
                descricao,
                store_id
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token_integracao')}`
                }
            }
        );
    }
}

export { ProdutosService };
