import React from 'react';
import TextField from '@mui/material/TextField';

export const AppInput = (props) => (
	<div>
		<TextField 
			label={props.label}
			type={props.type}
			{...props}
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