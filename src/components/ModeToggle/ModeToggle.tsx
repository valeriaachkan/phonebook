import { IconButton } from '@mui/joy';
import { useColorScheme } from '@mui/joy/styles';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { JsxElement } from 'typescript';

export default function ModeToggle() {
	const { mode, setMode } = useColorScheme();

	return (
		<IconButton
			id="toggle-mode"
			size="sm"
			variant="soft"
			color="neutral"
			aria-label="toggle light/dark mode"
			onClick={() => {
				if (mode === 'light') {
					setMode('dark');
				} else {
					setMode('light');
				}
			}}
			sx={{
				position: 'absolute',
				zIndex: 999,
				top: '1.5rem',
				right: '1.5rem',
				borderRadius: '50%',
				boxShadow: 'sm',
			}}
		>
			{mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
		</IconButton>
	);
}
