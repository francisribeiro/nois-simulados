--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.3
-- Dumped by pg_dump version 9.6.3

-- Started on 2017-05-18 22:48:02 BRT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12427)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2213 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 189 (class 1259 OID 24626)
-- Name: alternativas; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE alternativas (
    id integer NOT NULL,
    alternativa character varying(300) NOT NULL,
    correta boolean NOT NULL,
    questao integer NOT NULL
);


ALTER TABLE alternativas OWNER TO admin;

--
-- TOC entry 188 (class 1259 OID 24624)
-- Name: alternativas_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE alternativas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE alternativas_id_seq OWNER TO admin;

--
-- TOC entry 2214 (class 0 OID 0)
-- Dependencies: 188
-- Name: alternativas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE alternativas_id_seq OWNED BY alternativas.id;


--
-- TOC entry 187 (class 1259 OID 24615)
-- Name: questao; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE questao (
    id integer NOT NULL,
    status character varying(7) NOT NULL,
    vezesapareceu integer NOT NULL,
    area character varying(50) NOT NULL,
    feedback character varying(300) NOT NULL,
    pergunta character varying(300) NOT NULL
);


ALTER TABLE questao OWNER TO admin;

--
-- TOC entry 186 (class 1259 OID 24613)
-- Name: questao_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE questao_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE questao_id_seq OWNER TO admin;

--
-- TOC entry 2215 (class 0 OID 0)
-- Dependencies: 186
-- Name: questao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE questao_id_seq OWNED BY questao.id;


--
-- TOC entry 193 (class 1259 OID 24653)
-- Name: questoessimulado; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE questoessimulado (
    id integer NOT NULL,
    simulado integer NOT NULL,
    questao integer NOT NULL
);


ALTER TABLE questoessimulado OWNER TO admin;

--
-- TOC entry 192 (class 1259 OID 24651)
-- Name: questoessimulado_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE questoessimulado_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE questoessimulado_id_seq OWNER TO admin;

--
-- TOC entry 2216 (class 0 OID 0)
-- Dependencies: 192
-- Name: questoessimulado_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE questoessimulado_id_seq OWNED BY questoessimulado.id;


--
-- TOC entry 191 (class 1259 OID 24639)
-- Name: simulado; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE simulado (
    id integer NOT NULL,
    usuario character varying(50) NOT NULL,
    tempoexecucao time without time zone DEFAULT '00:00:00'::time without time zone
);


ALTER TABLE simulado OWNER TO admin;

--
-- TOC entry 190 (class 1259 OID 24637)
-- Name: simulado_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE simulado_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE simulado_id_seq OWNER TO admin;

--
-- TOC entry 2217 (class 0 OID 0)
-- Dependencies: 190
-- Name: simulado_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE simulado_id_seq OWNED BY simulado.id;


--
-- TOC entry 185 (class 1259 OID 24608)
-- Name: usuario; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE usuario (
    username character varying(50) NOT NULL,
    nome character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    tipo character varying(15) NOT NULL
);


ALTER TABLE usuario OWNER TO admin;

--
-- TOC entry 2063 (class 2604 OID 24629)
-- Name: alternativas id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY alternativas ALTER COLUMN id SET DEFAULT nextval('alternativas_id_seq'::regclass);


--
-- TOC entry 2062 (class 2604 OID 24618)
-- Name: questao id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY questao ALTER COLUMN id SET DEFAULT nextval('questao_id_seq'::regclass);


--
-- TOC entry 2066 (class 2604 OID 24656)
-- Name: questoessimulado id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY questoessimulado ALTER COLUMN id SET DEFAULT nextval('questoessimulado_id_seq'::regclass);


--
-- TOC entry 2064 (class 2604 OID 24642)
-- Name: simulado id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY simulado ALTER COLUMN id SET DEFAULT nextval('simulado_id_seq'::regclass);


--
-- TOC entry 2202 (class 0 OID 24626)
-- Dependencies: 189
-- Data for Name: alternativas; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY alternativas (id, alternativa, correta, questao) FROM stdin;
\.


--
-- TOC entry 2218 (class 0 OID 0)
-- Dependencies: 188
-- Name: alternativas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('alternativas_id_seq', 1, false);


--
-- TOC entry 2200 (class 0 OID 24615)
-- Dependencies: 187
-- Data for Name: questao; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY questao (id, status, vezesapareceu, area, feedback, pergunta) FROM stdin;
\.


--
-- TOC entry 2219 (class 0 OID 0)
-- Dependencies: 186
-- Name: questao_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('questao_id_seq', 1, false);


--
-- TOC entry 2206 (class 0 OID 24653)
-- Dependencies: 193
-- Data for Name: questoessimulado; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY questoessimulado (id, simulado, questao) FROM stdin;
\.


--
-- TOC entry 2220 (class 0 OID 0)
-- Dependencies: 192
-- Name: questoessimulado_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('questoessimulado_id_seq', 1, false);


--
-- TOC entry 2204 (class 0 OID 24639)
-- Dependencies: 191
-- Data for Name: simulado; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY simulado (id, usuario, tempoexecucao) FROM stdin;
\.


--
-- TOC entry 2221 (class 0 OID 0)
-- Dependencies: 190
-- Name: simulado_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('simulado_id_seq', 1, false);


--
-- TOC entry 2198 (class 0 OID 24608)
-- Dependencies: 185
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY usuario (username, nome, email, password, tipo) FROM stdin;
francisr	Francis	franedurib@gmail.com	$2a$10$1a4bw6droNKSMNkA1hl03eHdXmSePSBmD4VQdmru0UH2sbd812J2G	aluno
\.


--
-- TOC entry 2072 (class 2606 OID 24631)
-- Name: alternativas alternativas_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY alternativas
    ADD CONSTRAINT alternativas_pkey PRIMARY KEY (id);


--
-- TOC entry 2070 (class 2606 OID 24623)
-- Name: questao questao_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY questao
    ADD CONSTRAINT questao_pkey PRIMARY KEY (id);


--
-- TOC entry 2076 (class 2606 OID 24658)
-- Name: questoessimulado questoessimulado_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY questoessimulado
    ADD CONSTRAINT questoessimulado_pkey PRIMARY KEY (id);


--
-- TOC entry 2074 (class 2606 OID 24645)
-- Name: simulado simulado_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY simulado
    ADD CONSTRAINT simulado_pkey PRIMARY KEY (id);


--
-- TOC entry 2068 (class 2606 OID 24612)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (username);


--
-- TOC entry 2077 (class 2606 OID 24632)
-- Name: alternativas alternativas_questao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY alternativas
    ADD CONSTRAINT alternativas_questao_fkey FOREIGN KEY (questao) REFERENCES questao(id);


--
-- TOC entry 2080 (class 2606 OID 24664)
-- Name: questoessimulado questoessimulado_questao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY questoessimulado
    ADD CONSTRAINT questoessimulado_questao_fkey FOREIGN KEY (questao) REFERENCES questao(id);


--
-- TOC entry 2079 (class 2606 OID 24659)
-- Name: questoessimulado questoessimulado_simulado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY questoessimulado
    ADD CONSTRAINT questoessimulado_simulado_fkey FOREIGN KEY (simulado) REFERENCES simulado(id);


--
-- TOC entry 2078 (class 2606 OID 24646)
-- Name: simulado simulado_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY simulado
    ADD CONSTRAINT simulado_usuario_fkey FOREIGN KEY (usuario) REFERENCES usuario(username) ON DELETE CASCADE;


-- Completed on 2017-05-18 22:48:02 BRT

--
-- PostgreSQL database dump complete
--

