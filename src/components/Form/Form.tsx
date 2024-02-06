import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Sheet,
	Stack,
	Typography,
} from '@mui/joy';
import { Notify } from 'notiflix';
import { addContact, Contact } from '../../redux/contactsSlice';
import { RootState } from '../../redux/store';

export const Form: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [number, setNumber] = useState<string>('');
	const dispatch = useDispatch();
	const contacts: Contact[] = useSelector(
		(state: RootState) => state.contacts.list
	);

	const checkUniqueness = (newName: string) => {
		return contacts
			.map(({ name }) => name.toLowerCase())
			.includes(newName.toLowerCase())
			? true
			: false;
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (checkUniqueness(name)) {
			Notify.warning(`${name} is already in contacts.`);
			setName('');
			setNumber('');
			return;
		}

		dispatch(addContact({ name, number }));
		setName('');
		setNumber('');
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.currentTarget;

		switch (name) {
			case 'name':
				setName(value);
				break;
			case 'number':
				setNumber(value);
				break;
			default:
				break;
		}
	};

	return (
		<Sheet
			sx={{
				mx: 'auto',
				mt: '150px',
				py: '25px',
				px: '25px',
				maxWidth: '500px',
				borderRadius: 'xl',
				boxShadow: 'md',
			}}
			variant="plain"
		>
			<Typography level="h4" sx={{ mb: '15px' }}>
				Phonebook
			</Typography>
			<form>
				<Stack gap={1}>
					<FormControl required>
						<FormLabel>Name</FormLabel>
						<Input
							type="text"
							name="name"
							value={name}
							autoComplete="off"
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl required>
						<FormLabel>Number</FormLabel>
						<Input
							type="tel"
							name="number"
							value={number}
							onChange={handleChange}
							title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						></Input>
					</FormControl>
				</Stack>
				<Stack gap={2} sx={{ mt: 3 }}>
					<Button type="button" onClick={handleSubmit} fullWidth>
						Add contact
					</Button>
				</Stack>
			</form>
		</Sheet>
	);
};

export default Form;
