import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { getProductsThunck, removeProductsThunck,editProductsThunck } from '../../redux/actions/productsAC'


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

	const [editId, setEditId] = useState(null);
	const [editShow, setEditShow] = useState(false)
	const [name, setName] = useState('')
	useEffect(() => {
		dispatch(getProductsThunck())
	}, [])


	function deleteProduct(param) {
		dispatch(removeProductsThunck({ id: param }))
	}

	function toggle(params = null) {
		
		setEditId(params)
		setEditShow(!editShow)
		if (!editId || !name) return
		else{
			console.log('work');
			dispatch(editProductsThunck({id:editId, name, updateAt: new Date().toLocaleString()}))
			setName('')
		}
	}




	return (
		<List component="nav" className={classes.root} aria-label="mailbox folders">
			{products.map(el => {
				if (el._id === editId)
				return <ListItem >
						<input type="text" value={name} placeholder={el.name} onChange={(e)=>setName(e.target.value)} />
						<Button text='Сохранить' func={() => toggle()} />
						<Button id={el._id} text='Удалить' color='secondary' func={deleteProduct} />
					</ListItem>
				return <>
					<ListItem >
							<ListItemText primary={el.name} />
						{editShow ? '' : <Button text='Редактировать' func={() => toggle(el._id)} /> }
						<Button id={el._id} text='Удалить' color='secondary' func={deleteProduct} />
					</ListItem>
					<Divider />
				</>
			})
			}
		</List>
	)
}








