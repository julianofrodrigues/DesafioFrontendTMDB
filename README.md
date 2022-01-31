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
  Há duas maneiras de usar o servidor:
  1 - Configurando o backend no seguinte link: https://github.com/julianofrodrigues/DesafioBackendTMDB
  2 - Usando o deploy do servidor que se encontra no EC2 da AWS com o endereço: http://54.224.97.193:3333/ (Caso não queira configurar o backend na sua máquina)

### 2 - Variáveis de ambiente
Para executar o projeto, primeiro é preciso configurar o .env

Crie o arquivo .env, logo em seguida, coloque as informações necessarias que são:
    
    - API_URL = É o endereço do servidor local ou da AWS
      
### 3 - Instalando e Executando
Foi utilizado o gerenciador de bibliotecas yarn neste projeto, então:
```js
  yarn // Baixar dependências 
  yarn dev // Executar o projeto
```
Pronto, divirtam-se! <br>
  
Criado por:<br>
Juliano Ferreira Rodrigues
    


