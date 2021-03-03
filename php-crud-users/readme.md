## php-crud-users
Projeto PHP Laravel 5.8

### POST
Requisição => */api/user
{
    "name": "teste",
    "email": "teste@teste.com",
}

Retorno:
{
	"id": 1,
    "name": "teste",
    "email": "teste@teste.com",
    "created_at": "2019-06-04 03:00:00",
    "updated_at": "2019-06-19 03:00:00"
}

### GET
Requisição => */api/user

Retorno:
[{
	"id": 1,
    "name": "teste",
    "email": "teste@teste.com",
    "created_at": "2019-06-04 03:00:00",
    "updated_at": "2019-06-19 03:00:00"
},
{
	"id": 2,
    "name": "teste",
    "email": "teste@teste.com",
    "created_at": "2019-06-04 03:00:00",
    "updated_at": "2019-06-19 03:00:00"
}]

### GET
Requisição => */api/user/1

Retorno:
{
	"id": 1,
    "name": "teste",
    "email": "teste@teste.com",
    "created_at": "2019-06-04 03:00:00",
    "updated_at": "2019-06-19 03:00:00"
}

### DELETE
Requisição => */api/user/1

Retorno:
{
	"id": 1,
    "name": "teste",
    "email": "teste@teste.com",
    "created_at": "2019-06-04 03:00:00",
    "updated_at": "2019-06-19 03:00:00"
}

### PUT
Requisição => */api/user
{
    "name": "teste",
    "email": "teste@teste.com",
}

Retorno:
{
	"id": 1,
    "name": "teste",
    "email": "teste@teste.com",
    "created_at": "2019-06-04 03:00:00",
    "updated_at": "2019-06-19 03:00:00"
}


OBS: Nos itens acima, deve-se substituir * pela URL onde foi realizado deploy do servidor.

### Requisitos para executar

instalar composer

instalar xampp

criar banco no MySql "crud-user"
	 
### Executando a aplicação
Dentro da pasta raíz da aplicação, executar os seguintes comandos:

	criar as tabelas no banco: 
		php artisan migrate
		
	baixar dependências: 
		composer update
		
	rodar a app: 
		php -S localhost:8000 -t public
