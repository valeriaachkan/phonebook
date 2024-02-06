import React from 'react';
import ContactItem from './ContactItem';
import { Box, List, ListItem, ListDivider } from '@mui/joy';
import { Contact } from '../../redux/contactsSlice';

interface ContactListProps {
	contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
	return (
		<Box>
			<List size="lg">
				{contacts.map((contact) => (
					<>
						<ListItem key={contact.id}>
							<ContactItem contact={contact} />
						</ListItem>
						<ListDivider inset="gutter" />
					</>
				))}
			</List>
		</Box>
	);
};

export default ContactList;
