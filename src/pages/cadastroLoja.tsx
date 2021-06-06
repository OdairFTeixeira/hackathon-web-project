import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Button, IconButton, TextField, Toolbar, Typography } from '@material-ui/core';
import { faArrowLeft, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

import ImageUpload from '../components/imageUpload'
import styles from '../styles/pages/cadastroLoja.module.css'
import { usuarioService } from '../services/usuario-service';
import { cadastroLojaService } from '../services/loja-service';

const CadastroLojas: React.FC = () => {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [imagem, setImagem] = useState('');
  const [cor, setCor] = useState('');
  const [prefixo, setPrefixo] = useState('');

  const handleGoToLogin = () => {
    router.push({
      pathname: '/login'
    });
  }

  const handleGoToDashboardLoja = () => {
    router.push({
      pathname: '/dashboard-loja'
    });
  }

  const onSubmitHandler = async event => {
    event.preventDefault();
    const { status, data } = await cadastroLojaService.createStore({ nome, password: senha, email, cnpj, color_standard: cor, prefix: prefixo });
    if (status === 200) {
      localStorage.setItem('token_integracao', data.token);
      alert('goToDash')
      // handleGoToDashboardLoja();
    }
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
          <form onSubmit={onSubmitHandler}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className={styles.iconTitle} icon={faFileSignature} />
              <h1 className={styles.title}>Cadastre sua loja</h1>
            </div>
            <TextField
              className={styles.input}
              name="nome" 
              value={nome}
              label="Nome da sua loja"
              fullWidth={true}
              onChange={event => setNome(event.target.value)} />
            <TextField
              className={styles.input}
              type="email"
              label="E-mail"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              fullWidth={true} />
            <TextField
              className={styles.input}
              type="password"
              label="senha"
              fullWidth={true}
              name="senha"
              value={senha}
              onChange={event => setSenha(event.target.value)} />
            <TextField
              className={styles.input}
              label="CNPJ"
              fullWidth={true}
              name="cnpj"
              value={cnpj}
              onChange={event => setCnpj(event.target.value)} />
            <TextField
              className={styles.input}
              label="Prefixo"
              fullWidth={true}
              name="prefixo"
              value={prefixo}
              onChange={event => setPrefixo(event.target.value)} />
            <ImageUpload label="Logo" />
            <TextField
              className={styles.input}
              type="color"
              focused={true}
              label="Escolha a cor padrão do seu site"
              fullWidth={true}
              name="cor"
              value={cor}
              onChange={event => setCor(event.target.value)} />
            <Button className={styles.button} variant="contained" color="secondary" type="submit">
              Cadastrar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CadastroLojas;
