import React from 'react';
import Button from '@mui/material/Button';

export const AppButton = (props) => {
	let href_button = props.href ?? null;
	let color_button = props.color ?? "primary";
	let handle_click = props.onClick ?? (() => null);
  
	return (
	  <Button
		variant = "contained"
		color={color_button}
		onClick={handle_click}
		{...props}
	  >
		{props.title}
	  </Button>
	);
  };
  
