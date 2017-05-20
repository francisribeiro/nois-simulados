const User = require('../models/user');

module.exports = (function () {

	return {
		run: run
	};


	function run() {
		users();
	}

	function users(){
		var usersArray = getUsers();

		usersArray.forEach(function(user){
			insertUser(user);
		});
	}


	function insertUser(user){
		if(user != null){
			User.addUser(user, (err, user) => {
		        if (!err) console.log('User insert successfully!');
		    });
		}
	};
	
	function getUsers(){
		return [
			{
				username:'francis',
				name: 'francis',
				email:'francis@gmail.com',
				password:'francis',
				type: 'aluno'
			},
			{
				username:'elaine',
				name: 'elaine',
				email:'elaine@gmail.com',
				password:'elaine',
				type: 'aluno'
			},
			{
				username:'gustavo',
				name: 'gustavo',
				email:'gustavo@gmail.com',
				password:'gustavo',
				type: 'aluno'
			},
			{
				username:'adler',
				name: 'Adler',
				email:'adler@gmail.com',
				password:'adler',
				type: 'professor'
			},
			{
				username:'maria',
				name: 'maria',
				email:'maria@gmail.com',
				password:'maria',
				type: 'aluno'
			},
			{
				username:'professor',
				name: 'professor',
				email:'professor@gmail.com',
				password:'professor',
				type: 'professor'
			},
			{
				username:'joao',
				name: 'joao',
				email:'joao@gmail.com',
				password:'joao',
				type: 'aluno'
			}
		]
	}

	

})();