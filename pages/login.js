import React from 'react';
//import {AppContainer} from '../src/components/AppContainerComponent';
//import {AppInput} from '../src/components/AppInputComponent';
//import {AppButton} from '../src/components/AppButtonComponent';
import { AppContainer,AppInput,AppButton } from "../src/components/index";


const Login = props => {
  return (
	<AppContainer>
		<AppInput title="Apelido ou email do userario" label="Username"></AppInput>
		<AppInput title = "Senha do Usuario" type="password" label="Senha"> </AppInput>
		<AppButton title="Entrar" value ="Login" />
	</AppContainer>
  );
};

export default Login;