import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NewContact {
	name: string;
	number: string;
}
export interface Contact extends NewContact {
	id: number;
}

const initialState: { list: Contact[] } = { list: [] };

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact(state, action: PayloadAction<NewContact>) {
			state.list.push({ id: Date.now(), ...action.payload });
		},
		deleteContact(state, action: PayloadAction<number>) {
			const index = state.list.findIndex(
				(contact) => contact.id === action.payload
			);
			state.list.splice(index, 1);
		},
	},
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
