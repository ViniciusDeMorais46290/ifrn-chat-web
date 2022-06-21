import React from 'react';
import TextField from '@mui/material/TextField';

export const AppInput = ({label,type,title}) => (
	<div>
		<TextField 
			label={label}
			type={type}
		/>
	</div>
);
/**
const AppButtonDefault = null;
export default AppButtonDefault = null;

 
 * 
 * import AppButtonDefault, {AppInput} from "./aPPiNPUT"
 * 
 * */