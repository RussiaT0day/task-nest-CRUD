import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

export default function ContainedButtons({ color, text, id ,func }) {
	const classes = useStyles();
	return (
			<Button  onClick={() => func(id)} variant="contained" color={color}>
				{text}
			</Button>
	);
}
