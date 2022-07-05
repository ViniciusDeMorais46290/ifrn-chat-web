import React from 'react';
import {useState} from 'react';
//import {AppContainer} from '../src/components/AppContainerComponent';
//import {AppInput} from '../src/components/AppInputComponent';
//import {AppButton} from '../src/components/AppButtonComponent';
import { AppContainer,AppInput,AppButton } from "../src/components";
import Head from 'next/head';
import { useRouter } from 'next/router';


const Login = props => {
	const router = useRouter();
	const [Usuario, setUsuario] = useState();
	const [Senha, setSenha] = useState();

  return (
		<div>
			<Head> 
					<title>página de login</title>
			</Head>
			<main>
				<nav>
					<p>Chat top das galaxias</p>
					<AppButton onClick={() => router.back()} title="Voltar"></AppButton>

				</nav>
				<AppContainer>
					<AppInput title="Apelido ou email do userario" label="Username" value={Usuario} onChange={(e) => setUsuario(e.target.value)}></AppInput>
					<AppInput title = "Senha do Usuario" type="password" label="Senha" value = {Senha} onChange={(e) => setSenha(e.target.value)}> </AppInput>
					<AppButton color = "primary" title="Pão" href="https://www.youtube.com" value ="Login" disabled={!(!!Usuario && !!Senha)} />
				</AppContainer>
			</main>
		</div>
  );
};

export default Login;