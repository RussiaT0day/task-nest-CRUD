import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Button from '../Button/Button';



const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	margin: {
		margin: theme.spacing(1),
	},
}));

const BootstrapInput = withStyles((theme) => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 4,
		position: 'relative',
		backgroundColor: theme.palette.background.paper,
		border: '1px solid #ced4da',
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			borderRadius: 4,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
		},
	},
}))(InputBase);


export default function From() {
	const classes = useStyles();

	const [categorySelect, setCategorySelect] = useState('')
	const [name, setName] = useState('')

	const categoryChange = (event) => {
		setCategorySelect(event.target.value);
	};
	const nameChange = (event) => {
		setName(event.target.value);
	};

	const [category, setCategory] = useState([])

	useEffect(() => {
		fetch('http://localhost:3002/category')
			.then(res => res.json())
			.then(res => setCategory(res))
	}, [])

	function addProduct() {
		fetch('http://localhost:3002/category', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({name, category:categorySelect, createAt: new Date().toLocaleString()})
		})
		.then(()=>{ console.log('work');})
		
	}

	return (
		<div>
			<FormControl className={classes.margin}>
				<InputLabel htmlFor="demo-customized-textbox" >Название</InputLabel>
				<BootstrapInput id="demo-customized-textbox" onChange={nameChange} value={name} />
			</FormControl>
			<FormControl className={classes.margin}>
				<InputLabel id="demo-customized-select-label">Категория</InputLabel>
				<Select
					labelId="demo-customized-select-label"
					id="demo-customized-select"
					value={categorySelect}
					onChange={categoryChange}
					input={<BootstrapInput />}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					{category.map(el =>
						<MenuItem
							// key={new Date().toString()}
							data-id={el.id}
							value={el._id}>
							{el.name}
						</MenuItem>)}
				</Select>
				<button
					onClick={() => addProduct()}
					category={categorySelect}
					name={name}
				>добавить</button>
				<Button
					text='Добавить продукт'
					color='primary'
				/>
			</FormControl>

		</div>
	);
}








