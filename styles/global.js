import { createGlobalStyle } from 'styled-components';


const global = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500&display=swap');
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;

	}
	body {
		min-height: 100vh;
		background: #eee;
	}
`

export default global;
