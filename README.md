# Lil-Marketplace

API REST que simula um marketplace de vendas de produtos online. É possivel registrar um usuário, logar, criar uma propaganda, exibir todas propagandas, exibir uma única propaganda, deletar uma propaganda e atualizar.

## Começando

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Siga as instruções para poder rodar o seu projeto em ambiente local.

### Pré-requisitos

- [NodeJS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Docker](https://www.docker.com/get-started)

### Instalação

O primeiro passo é fazer o clone/fork/download do repositório.

```bash
git clone https://github.com/osergioneto/lil-marketplace.git
```

Seguir até a pasta onde está o repositório e executar o comando npm install. Aguarde as dependencias serem instaladas.

```bash
npm install
```

Crie dois containeres: um com MongoDB e outro com Redis

```bash
docker run --name mongonode -p 27017:27017 -d -t mongo
docker run --name noderedis -p 6379:6379 -d -t redis:alpine
```

Rara rodar necessário configurar o arquivo .env . Para isso o arquivo de maneira similar ao abaixo

```env
NODE_ENV= devlopment
APP_SECRET=SeuTextoSecreto

DB_URL=mongodb://localhost:27017/nomeDoSeuDB

MAIL_HOST=seuHostDeSMTP
MAIL_PORT=2525
MAIL_USER=usuarioSMTP
MAIL_PASS=senhaSMTP

REDIS_HOST=127.0.0.1
REDIS_PORT=6379

SENTRY_DSN=suaDSNdoSentry (Exclusivo de Produção)
```

Após as configurações execute npm start no terminal

```bash
npm start
```

A API do Lil-Market estará funcionando

## Feito com

- [Express](https://expressjs.com/) - Web framework for Node.js
- [Mongoose](https://mongoosejs.com/) - Mongodb object modeling for node.js
- [Nodemailer](https://rometools.github.io/rome/) - Nodemailer is a module for Node.js applications to allow easy as cake email sending.
- [Mongoose](https://mongoosejs.com/) - Mongodb object modeling for node.js
- [Joi](https://github.com/hapijs/joi) - Object schema description language and validator for JavaScript objects.
- [Jsonwebtoken](https://jwt.io/) JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties
- [Kue](http://automattic.github.io/kue/) - Kue is a priority job queue backed by redis, built for node.js.
- [Youch](https://www.npmjs.com/package/youch) - Pretty error reporting for Node.js 🚀

## Autor

- **Sérgio Neto** - _Inspirado no Curso GoNode da_ [RocketSeat](https://rocketseat.com.br/) -
