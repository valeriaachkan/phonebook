import React, { useState } from 'react';
import { Grid, Sheet } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import { useSelector } from 'react-redux';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { Contact } from './redux/contactsSlice';
import { RootState } from './redux/store';
import ModeToggle from './components/ModeToggle/ModeToggle';

function App() {
	const [filter, setFilter] = useState<string>('');
	const contacts: Contact[] = useSelector(
		(state: RootState) => state.contacts.list
	);

	const filteredContacts = () => {
		console.log(contacts);
		const normalizedFilter = filter.toLowerCase().trim();
		const filteredContactsList: Contact[] = [
			...contacts.filter(({ name }) =>
				name.toLowerCase().includes(normalizedFilter)
			),
		];

		return filteredContactsList;
	};

	const filteredContactList = filteredContacts();

	return (
		<CssVarsProvider>
			<Grid container sx={{ height: '100vh' }}>
				<Grid
					xs={6}
					sx={{
						minHeight: '100vh',
						position: 'relative',
						py: '40px',
						px: '40px',
					}}
				>
					<ModeToggle />
					<Form />
				</Grid>
				<Grid xs={6}>
					<Sheet
						variant="plain"
						sx={{
							minHeight: '100vh',
							py: '60px',
							px: '40px',
						}}
					>
						<Filter onFilterChange={setFilter} />
						<ContactList contacts={filteredContactList} />
					</Sheet>
				</Grid>
			</Grid>
		</CssVarsProvider>
	);
}

export default App;
