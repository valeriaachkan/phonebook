import React from 'react';
import { useDispatch } from 'react-redux';
import { Contact, deleteContact } from '../../redux/contactsSlice';
import {
	IconButton,
	ListItemContent,
	ListItemDecorator,
	Sheet,
	Typography,
} from '@mui/joy';
import { Person, Delete } from '@mui/icons-material';

interface ContactItemProps {
	contact: Contact;
}
const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
	const dispatch = useDispatch();

	return (
		<>
			<ListItemDecorator>
				<Sheet
					variant="plain"
					color="neutral"
					sx={{
						width: '35px',
						height: '35px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: '50%',
						boxShadow: 'sm',
						mr: '15px',
					}}
				>
					<Person />
				</Sheet>
			</ListItemDecorator>
			<ListItemContent>
				<Typography level="title-md">{contact.name}</Typography>
				<Typography level="body-md" noWrap>
					{contact.number}
				</Typography>
			</ListItemContent>
			<IconButton
				size="sm"
				variant="plain"
				aria-label="delete contact button"
				onClick={() => dispatch(deleteContact(contact.id))}
			>
				<Delete />
			</IconButton>
		</>
	);
};

export default ContactItem;
