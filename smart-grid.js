const smartgrid = require('smart-grid');

const settings = {
	columns: 12,
	offset: '30px',
	outputStyle: 'sass',
	tab: "	",
	container: {
		maxWidth: '1200px',
		fields: '30px'
	},
	breakPoints: {
		md: {
			width: "1020px",
			fields: "20px"
		},
		sm: {
			width: "720px",
			fields: "10px"
		},
		xs: {
			width: "576px",
			fields: "5px"
		},
		xxs: {
			width: "380px",
			fields: "5px"
		}
	},
	oldSizeStyle: false,
	properties: [
		'justify-content'
	]
};

smartgrid('./app/sass', settings);