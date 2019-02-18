import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const colors = {
	amber: '#FAD100',
	darkAmber: '#D79806',
	yellow: '#F3FD26',
	blue: '#68CCF2',
	lightBlue: '#93D6F7',
	green: '#9DFA12',
	lightGreen: '#BFFF12',
	purple: '#D385FE',
	lightPurple: '#F3B5FF',
	background: '#0F0F0D',
	faded: '#56470E'
}

const colorSet: IColorSet = {
	base: {
		background: colors.background,
		foreground: colors.amber,
		color1: colors.darkAmber,
		color2: colors.blue,
		color3: colors.yellow,
		color4: colors.green,
	},
	syntax: {
		comment: colors.faded
	},
	ui: {
		selection: colors.faded,
	},
	terminal: {
		black: colors.background,
		brightBlack: colors.background,
		red: colors.darkAmber,
		brightRed: colors.yellow,
		green: colors.green,
		brightGreen: colors.lightGreen,
		blue: colors.blue,
		brightBlue: colors.lightBlue,
		cyan: colors.blue,
		brightCyan: colors.lightBlue,
		magenta: colors.purple,
		brightMagenta: colors. lightPurple,
		yellow: colors.amber,
		brightYellow: colors.yellow,
		white: colors.amber,
		brightWhite: colors.yellow
	},
	overrides: {
		'terminal.background': colors.background,
		'terminal.foreground': colors.amber,
		'gitDecoration.addedResourceForeground': colors.blue,
		'gitDecoration.modifiedResourceForeground': colors.yellow,
		'gitDecoration.deletedResourceForeground': colors.darkAmber,
		'gitDecoration.untrackedResourceForeground': colors.green,
		'gitDecoration.ignoredResourceForeground': colors.faded,
		'gitDecoration.conflictingResourceForeground': colors.purple
	}
};

generateTheme('AmberGlow', colorSet, path.join(__dirname, 'theme.json'));
