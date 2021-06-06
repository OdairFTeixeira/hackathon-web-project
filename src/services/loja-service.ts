import { toast } from 'react-toastify';
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

  static async findByPrefix(prefix: string) {
    return await api.get('/stores/prefix', { params: { prefix } });
  }

  static async findStore() {
    return await api.get('/stores', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token_integracao')}`
      }
    });
  }
}

export { cadastroLojaService };
