import api from './api';

class cadastroLojaService {
  static async createStore({
    nome,
    password,
    email,
    cnpj,
    color_standard,
    prefix
  }) {
    return await api.post(
      '/stores',
      {
        nome,
        password,
        email,
        cnpj,
        prefix,
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
