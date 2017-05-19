# Nois Simulados

Sistema para realização de simulados online.

### Version
1.0.0

## Usage

```bash
npm install
```

```bash
npm start
```

##USER Endpoints 
```bash
POST /users/register
```

```js
{
	"username":"francis_ribeiro",
	"name": "Francis Ribeiro",
	"email":"franedurib@gmail.com",
	"password":"francis_ribeiro",
	"type": "aluno"
}
```

```bash
POST /users/authenticate   // Gives back a token
```

```js
{
	"username":"francis_ribeiro",
	"password":"francis_ribeiro",
}
```

```bash
GET /users/profile         // Needs json web token to authorize
```