SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE usuario (
    username character varying(50) primary key,
    nome character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    tipo character varying(15) NOT NULL
);

create table questao(
    id serial primary key,
    status varchar(7) not null,
    vezesApareceu int,
    area varchar(50) not null,
    feedback varchar(300) not null,
    pergunta varchar(300) not null
);

create table alternativas(
    id serial primary key,
    alternativa varchar(300) not null,
    correta boolean not null,
    questao int not null,
    foreign key(questao) references questao(id) on delete cascade
);

create table simulado(
    id serial primary key,
    usuario varchar(50) not null,
    tempoExecucao real default '0',
    titulo varchar(50) not null,
    foreign key(usuario) references usuario(username) on delete cascade
);

create table questoesSimulado(
    id serial primary key,
    simulado int not null,
    questao int not null,
    foreign key(simulado) references simulado(id) on delete cascade,
    foreign key(questao) references questao(id) 
);