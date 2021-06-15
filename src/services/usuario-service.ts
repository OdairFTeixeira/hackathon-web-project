import api from './api';

class usuarioService {
  static async createUser({ email, password, flg_admin }) {
    return await api.post('/users', {
      email,
      password,
      flg_admin
    });
  }
}

export { usuarioService };

//.catch(() => {
//  toast.warn('Os dados de login estão incorretos', {
//    style: { backgroundColor: '#C79F3C' }
//  });
//});