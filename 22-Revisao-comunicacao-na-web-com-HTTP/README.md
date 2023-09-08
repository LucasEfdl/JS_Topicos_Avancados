# Arquitetura Cliente Servidor 

## Exemplo de Requisição

<img aling="center" src="./exemplo-de-requisicao.png"/>

## Cliente
    Geralmente é um navegador web que envia requisições a um servidor

## Servdor
    Geralmente uma maquina acessivel pela internet que recebe a requisição, a processa e envia de volta uma resposta para o cliente.


# Caracteristicas do HTTP

## Simples
FAcil de entender e ultilizar 

## Extensivel
Permite adicionar novas funcionalidade facilmente

## Stateless
Ou sem estado (mas com sessão)


# Estrutura das mensagens 

## Requisição

### Método 
    O tipo de operação a ser realizada (GET, POST, OPTIONS, HEAD, etc)

### Caminho
    O caminho do recurso a ser obtido, basicamente a URL do recurso sem a parte inicial (potocolo, domino e porta)

### Versão
    O protocolo HTTP possui diferentes versões, com suas respectivas particularidades, logo é preciso definir a versão que se está utilizando

### Cabeçalho
    Informações adicionais entre cliente e servidor

### Corpo
    Conteudo da mensagens, usada por exemplo, ao enviar dados via POST. 

## Respostas