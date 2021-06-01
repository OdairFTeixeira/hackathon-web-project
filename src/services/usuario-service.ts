import api from './api';

class usuarioService {
  static async createUser({ email, password, flg_admin }) {
    return await api.post('/users', {
      email,
      password,
      flg_admin
    });
  }

  static async authenticate({ email, password }) {
    const { data: response } = await api.post('/auth', {
      email,
      password
    });
    localStorage.setItem('token_integracao', response.token);
    console.log(response.token);
  }
}

export { usuarioService };
