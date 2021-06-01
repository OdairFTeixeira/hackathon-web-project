import api from './api';

class cadastroLojaService {
  static async createStore({ nome, email, cnpj, color_standard }) {
    return await api.post(
      '/stores',
      {
        nome,
        email,
        cnpj,
        color_standard
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token_integracao')}`
        }
      }
    );
  }
}

export { cadastroLojaService };
