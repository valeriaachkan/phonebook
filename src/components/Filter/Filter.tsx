import React from 'react';
import { Input } from '@mui/joy';
import { Search } from '@mui/icons-material';

interface FilterProps {
	onFilterChange: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {

	return (
		<Input
			placeholder="Find contacts by name..."
			size="lg"
			variant="soft"
			startDecorator={<Search />}
			type="text"
			// value={filter}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
				onFilterChange(e.currentTarget.value)
			}
		></Input>
	);
};

export default Filter;
