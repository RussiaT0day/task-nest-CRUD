import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { getProductsThunck, removeProductsThunck } from '../../redux/actions/productsAC'


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '../Button/Button';




const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));


export default function AllProducts() {
	const classes = useStyles();

	const { products } = useSelector(state => state)
	const dispatch = useDispatch()


	const [product, setProduct] = useState([])
	useEffect(() => {
		dispatch(getProductsThunck())
	}, [])


	function deleteProduct(param) {
		console.log(param);
		dispatch(removeProductsThunck({id:param}))
	}


	return (
		<List component="nav" className={classes.root} aria-label="mailbox folders">
			{products.map(el => {
				return <>
					<ListItem button>
						<ListItemText primary={el.name} />
							{/* <button data-id={el._id} onClick={e => deleteProduct(e)}>
								Удалить</button> */}
						<Button id={el._id} text='Удалить' color='secondary' func={deleteProduct} />
					</ListItem>
					<Divider />
				</>
			})
			}
		</List>
	)
}








