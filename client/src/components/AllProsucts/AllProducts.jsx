
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));


export default function AllProducts() {
	const classes = useStyles();


	const [product, setProduct] = useState([])
	useEffect(() => {
		fetch('http://localhost:3002/products')
			.then(res => res.json())
			.then(res => setProduct(res))
	}, [])





	return (

		<List component="nav" className={classes.root} aria-label="mailbox folders">
			{product.map(el => {
				return <>
					<ListItem button>
						<ListItemText primary={el.name} />
					</ListItem>
					<Divider />
				</>
			})
		}
		</List>
	)
}








