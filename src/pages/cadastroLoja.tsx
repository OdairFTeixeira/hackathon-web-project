import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Button, IconButton, TextField, Toolbar, Typography } from '@material-ui/core';
import { faArrowLeft, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router'

import ImageUpload from '../components/imageUpload'
import styles from '../styles/pages/cadastroLoja.module.css'

const CadastroLojas: React.FC = () => {
  const router = useRouter();

  const handleGoToLogin = () => {
    router.push({
      pathname: '/login'
    });
  }

  return (
    <>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <IconButton edge="start" onClick={handleGoToLogin} color="inherit" aria-label="menu">
            <FontAwesomeIcon icon={faArrowLeft} />
          </IconButton>
          <Typography variant="h6">
            Login
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={styles.pageContainer}>

        <div className={styles.inputsContainer}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon className={styles.iconTitle} icon={faFileSignature} />
            <h1 className={styles.title}>Cadastre sua loja</h1>
          </div>
          <div className={styles.input}>
            <TextField label="Nome da sua loja" fullWidth={true} />
          </div>
          <div className={styles.input}>
            <TextField className={styles.input} type="email" label="E-mail" fullWidth={true} />
          </div>
          <div className={styles.input}>
            <TextField className={styles.input} type="password" label="senha" fullWidth={true} />
          </div>
          <div className={styles.input}>
            <TextField className={styles.input} type="cnpj" label="Cnpj" fullWidth={true} />
          </div>
          <div className={styles.input}>
            <ImageUpload label="Logo" />
          </div>
          <div className={styles.input}>
            <TextField className={styles.input} type="color" focused={true} label="Escolha a cor padrão do seu site" fullWidth={true} />
          </div>
          <Button className={styles.button} variant="contained" color="secondary">
            Cadastrar
          </Button>
        </div>
      </div>
    </>
  );
}

export default CadastroLojas;
