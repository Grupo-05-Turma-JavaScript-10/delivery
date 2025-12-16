# 🥗 Delivery API - NutriGo

<div align="center">

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![TypeORM](https://img.shields.io/badge/typeorm-orange?style=for-the-badge&logo=typeorm&logoColor=white)

</div>

## 📖 Sobre o Projeto

Este projeto consiste em uma API RESTful desenvolvida com **NestJS** para o gerenciamento de um sistema de Delivery. O diferencial deste sistema é o foco em **alimentação saudável**, permitindo que o usuário filtre rapidamente as opções fit do cardápio.

O foco principal é a implementação de **Relacionamentos de Banco de Dados (1:N)** e operações de CRUD completas seguindo as boas práticas de arquitetura MVC.

---

## ⚙️ Funcionalidades

- **Categorias (Cardápio):**
  - Organização do cardápio (ex: Lanches, Saladas, Bebidas).
  - Gestão completa (Criar, Listar, Atualizar, Deletar).
  
- **Produtos:**
  - Cadastro completo com preço, foto e descrição.
  - **Selo Healthy:** Identificação de produtos saudáveis.
  - **Filtro Inteligente:**
    - 🥗 **Modo Saudável:** Uma rota exclusiva que retorna apenas saladas, sucos naturais e opções fit.
  - **Relacionamento:** Vinculação automática à categoria.

---

## 🗂️ Modelagem de Dados (DER)

O banco de dados foi modelado relacionalmente utilizando MySQL.

> **Nota:** A relação implementada é do tipo **One-to-Many** (Uma Categoria possui Vários Produtos).

<div align="center">
  <img width="496" height="415" alt="image" src="https://github.com/user-attachments/assets/363864de-492c-42ce-895a-3ec8e5e7f932" />
</div>

### Estrutura das Tabelas

| Tabela | Atributos Principais | Descrição |
| :--- | :--- | :--- |
| **tb_categorias** | `id`, `tipo` | Classificação dos itens (Pai). |
| **tb_produtos** | `id`, `nome`, `preco`, `foto`, `eh_saudavel`, `categoria_id` | Itens do cardápio. |

---

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução.
- **NestJS** - Framework principal.
- **TypeORM** - ORM para manipulação do banco de dados.
- **MySQL** - Banco de dados relacional.
- **Insomnia** - Ferramenta para testes de rotas.

---

## 🛠️ Como Executar

### Pré-requisitos
Antes de começar, você precisa ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone [https://github.com/SEU_USUARIO/delivery-api.git](https://github.com/SEU_USUARIO/delivery-api.git)
