import { createGlobalStyle } from 'styled-components';


const global = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

	* {
		margin: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;
	}
	body {
		min-height: 100vh;
		background: #eee;
	}
`

export default global;
