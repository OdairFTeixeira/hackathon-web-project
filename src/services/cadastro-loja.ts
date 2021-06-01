import api from './api';

class cadastroLojaService {
  static async createUser({ email, password, flg_admin }) {
    return await api.post('/users', {
      email,
      password,
      flg_admin
    });
  }
}

export { cadastroLojaService };
