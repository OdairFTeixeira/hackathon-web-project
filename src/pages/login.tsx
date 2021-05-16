import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router'

import styles from '../styles/pages/login.module.css';

const Login: React.FC = () => {
  const router = useRouter();

  const handleGoToCadastroLoja = () => {
    router.push({
      pathname: '/cadastroLoja'
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon className={styles.lockIcon} icon={faLock} />
        </div>
        <div className={styles.inputs}>
          <TextField id="standard-basic" label="E-mail" />
          <TextField id="standard-basic" type="password" label="senha" />
          <Button className={styles.button} variant="contained" color="secondary">
            Logar
          </Button>
        </div>
        <div className={styles.labelsContainer}>
          <label className={styles.labelQuestion}>Sua loja não está cadastrada?</label>
          <label className={styles.labelAction} onClick={handleGoToCadastroLoja}>Cadastre-se!</label>
        </div>
      </div>
    </div>
  );
}

export default Login;
