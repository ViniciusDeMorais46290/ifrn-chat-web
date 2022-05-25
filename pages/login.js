import React from 'react';
//import {AppContainer} from '../src/components/AppContainerComponent';
//import {AppInput} from '../src/components/AppInputComponent';
//import {AppButton} from '../src/components/AppButtonComponent';
import { AppContainer,AppInput,AppButton } from "../src/components/index";
import Head from 'next/head';
import { useRouter } from 'next/router';


const Login = props => {
	const router = useRouter();

  return (
		<div>
			<Head> 
					<title>página de login</title>
			</Head>
			<main>
				<nav>
					<p>Chat top das galaxias</p>
					<button onClick={() => router.back()}> Volrtar </button>

				</nav>
				<AppContainer>
					<AppInput title="Apelido ou email do userario" label="Username"></AppInput>
					<AppInput title = "Senha do Usuario" type="password" label="Senha"> </AppInput>
					<AppButton title="Entrar" value ="Login" />
				</AppContainer>
			</main>
		</div>
  );
};

export default Login;