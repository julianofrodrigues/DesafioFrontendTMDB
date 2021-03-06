## Desafio TMDB Front-End

## Resumo do Projeto
  Esse projeto é uma aplicação full stack, que  consome uma API de filmes (TMDB). As tecnologias utilizadas foram:

  - React 
  - Styled Components
  - Axios

## Layout
<p>Baseei-me na UI da Netflix espero que gostem.</p>
<p> O projeto é composto por 2 telas que se encontram na pasta pages.</p>
<details> <summary> Clique Aqui para ver print das telas </summary>
  <h2>Detalhes do filme</h2>
  
  ![Detalhes](https://i.imgur.com/DbwqjiU.png) 
  
  <h2> Home </h2>
  
  ![Home](https://i.imgur.com/CJsIkFL.png) 
     
</details>
   
## Executando o projeto  
### 1 - Configurar o Backend
  Há duas maneiras de usar o servidor: </br>

  1 - Configurando o backend no seguinte link: https://github.com/julianofrodrigues/DesafioBackendTMDB</br>
  2 - Usando o deploy do servidor que se encontra no heroku: https://julianotmdbapi.herokuapp.com/  (Caso não queira configurar o backend na sua máquina)

### 2 - Variáveis de ambiente
Para executar o projeto, primeiro é preciso configurar o .env

Crie o arquivo .env, logo em seguida, coloque as informações necessarias que são:
    
    - REACT_APP_API_URL = É o endereço do servidor local ou do heroku
    Exemplo: 

      REACT_APP_API_URL="https://julianotmdbapi.herokuapp.com/"
      Ou
      REACT_APP_API_URL="http://localhost:3333/"

      
### 3 - Instalando e Executando
Foi utilizado o gerenciador de bibliotecas yarn neste projeto, então:
```js
  yarn // Baixar dependências 
  yarn dev // Executar o projeto
```
Pronto, divirtam-se! <br>

<strong> Obs: </strong> 
 - Caso queira ver a aplicação funcionando, se encontra aqui: https://desafio-frontend-tmdb-9tsqau41q-julianofrodrigues.vercel.app/
 - Pra favoritar algum filme, basta clicar no coraçãozinho que se encontra na tela de detalhes.
  
Criado por:<br>
Juliano Ferreira Rodrigues
    


