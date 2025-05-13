# Projeto Desenvolvimento Web

## Instalação e Execução

### Siga os passos abaixo para rodar o projeto via Docker:

1. Clonar o repositório:

   ```sh
   git clone https://github.com/luan-tavares/unifaat-devweb-aula-10-crud
   ```

2. Entrar na pasta do projeto:

   ```sh
   cd unifaat-devweb-aula-10-crud
   ```

3. Criar o arquivo `.env` na raiz do projeto copiando o .env.example:

   > No windows:

   ```ini
   copy .env.example .env
   ```

   > No linux

   ```ini
   cp .env.example .env
   ```

4. Abrir o `.env` na raiz do projeto e escolher um usuário e senha para o banco de dados

   ```ini
   POSTGRES_USER=meu_usuario
   POSTGRES_PASSWORD=minha_senha
   ```

5. Subir a aplicação com Docker Compose:

   ```sh
   docker compose up --build
   ```

   > ou, dependendo da versão do Docker:
   >
   > - Usuários com versões **mais antigas** ou com Docker Compose instalado separadamente usam:

   ```sh
   docker-compose up --build
   ```

   > - Usuários com **Docker moderno** devem usar:

   ```sh
   docker compose up --build
   ```

O servidor estará disponível em: [http://localhost:8080](http://localhost:8080)