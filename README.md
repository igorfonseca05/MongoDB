 # MongoDB
![capa mongo](https://github.com/user-attachments/assets/1767d8e5-11e9-4dc2-af33-0b7dc5cc2c82)

## Descrição
Este repositório contém materiais e projetos relacionados aos meus estudos de MongoDB ministrado pelo professor **Renan Pallin**. Aqui, você encontrará exemplos de código, anotações e exercícios práticos que abrangem desde os conceitos básicos até tópicos avançados. O objetivo é consolidar o aprendizado e aplicar as melhores práticas no uso do MongoDB.

## Andamento do Curso
![2](https://github.com/user-attachments/assets/8349fc16-2675-42d5-adf3-ef93b0927c4a)

- [x] Seção 1: [Introdução](#seção-2---introdução)
- [x] Seção 2: [Instalação](#seção-2---instalando-mongodb)
- [ ] Seção 3: [Básico](#seção-3---básico)
- [ ] Seção 4: [CRUD](#crud)
- [ ] Seção 5: Modelagem e Relacionamentos
- [ ] Seção 6: Schema e Validação
- [ ] Seção 7: Algumas preparações para as consultas
- [ ] Seção 8: Consultas! Vamos buscar nossos dados!
- [ ] Seção 9: Consultas | Combinando operadores e se aprofundando
- [ ] Seção 10: Atualizações
- [ ] Seção 11: Atualização de Arrays
- [ ] Seção 12: Índices
- [ ] Seção 13: Índices | Laboratório de performance
- [ ] Seção 14: Agregação
- [ ] Seção 15: Agregação Netflix

---
### Seção 1 - Introdução

1. **O que é o MongoBD ?**
   
    MongoDB é um banco de dados NoSQL, orientado a documentos, que armazena informações no formato de documentos JSON (JavaScript Object Notation). Ao contrário dos bancos de dados          relacionais que usam tabelas e linhas, o MongoDB utiliza uma estrutura flexível de dados, permitindo armazenar diferentes tipos de informações dentro de um mesmo documento. É 
    conhecido   por sua escalabilidade e flexibilidade, sendo ideal para aplicações que lidam com grandes volumes de dados e precisam de rápida recuperação de informações.
   
3. **Um pouco da história dos bancos de dados**

    Os bancos de dados surgiram nos anos 1960 com sistemas baseados em arquivos, evoluindo para bancos relacionais nos anos 1970, que utilizam tabelas e colunas para organizar dados. Com o crescimento das necessidades de armazenamento e processamento, surgiram os bancos de dados NoSQL, como o MongoDB. O MongoDB organiza os dados usando **collections** (coleções) e **documents** (documentos), onde cada documento é um registro flexível no formato JSON. Isso permite armazenar informações complexas e com diferentes esquemas dentro de uma mesma coleção.   

![Group 9](https://github.com/user-attachments/assets/3337087d-ef8a-478e-aef8-a0447ad9ec8c)

### Seção 2 - Instalando MongoDB

 #### Windows:
  1. Execute o instalador .msi.
  2. Marque a opção "Complete" para instalação completa.
  3. Opte por instalar como serviço (opção recomendada) e defina o diretório padrão de dados (C:\Program Files\MongoDB\Server\<versão>).
  4. Finalize a instalação.

### Seção 3 - Básico

### CRUD

No MongoDB, CRUD é um acrônimo que representa as operações básicas de manipulação de dados:

* Create (Criar): Insere novos documentos em uma coleção.
* Read (Ler): Consulta e recupera documentos existentes.
* Update (Atualizar): Modifica dados de documentos existentes.
* Delete (Excluir): Remove documentos de uma coleção.
* Essas operações permitem gerenciar e interagir com os dados no banco de forma completa.

Para realizar essas operações no mongoDB é importante conhecer as variações desses comandos







