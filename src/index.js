import './style';
import App from './components/app';

// add Google Analytics
if (process.env.NODE_ENV === 'production') {
	import('ganalytics').then(m => m.default).then(GA => {
		window.ga = new GA(process.env.GA_ID);
	});
}

export default App;
