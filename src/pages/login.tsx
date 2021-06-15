import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.min.css'; 

import styles from '../styles/pages/login.module.css';
import { toast, ToastContainer } from 'react-toastify';
import { usuarioService } from '../services/usuario-service';

const Login: React.FC = () => {
  const [ senha, setSenha ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const router = useRouter();

  const handleGoToCadastroLoja = () => {
    router.push({
      pathname: '/cadastroLoja'
    });
  }

  const onSubmitHandler = async event => {
    event.preventDefault();
    
    if (!email || !senha) {
      toast.info("O preenchimento de todos os campos é obrigatório!")
      return;
    }
    const response: any = await usuarioService.authenticate({ email, password: senha })
    if (response.status === 200) {
      localStorage.setItem('token_integracao', response.token);
      router.push({
        pathname: '/cadastroLoja'
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon className={styles.lockIcon} icon={faLock} />
          </div>
          <form onSubmit={onSubmitHandler} className={styles.inputs}>
            <TextField id="standard-basic" label="E-mail" onChange={email => setEmail(email)} />
            <TextField id="standard-basic" type="password" label="senha" onChange={senha => setSenha(senha)} />
            <Button className={styles.button} variant="contained" color="secondary" type="submit">
              Logar
            </Button>
          </form>
          <div className={styles.labelsContainer}>
            <label className={styles.labelQuestion}>Sua loja não está cadastrada?</label>
            <label className={styles.labelAction} onClick={handleGoToCadastroLoja}>Cadastre-se!</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
