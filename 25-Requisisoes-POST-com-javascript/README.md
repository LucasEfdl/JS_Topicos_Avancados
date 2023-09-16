# Requisições POST com javascript
    Para entenderm melhor como funciona as requisições POST e para facilitar nossa vida, vamos 
    usar um pacote do npm chamado json-serve. O json-serve permite simular um backend de forma 
    simples e rápida, subindo um pequeno servidor par receber nossas requisições e salvando dados 
    em arquivos. Ele é capaz de receber requisições e salvando dados em arquivos. Pode receber 
    requisições GET, POST, PUT e DELETE sequindo a arquitetura Rest para trabalhar com quaisquer 
    recursos que quisermos definir

## 1. Primeiro passo
    
    Inicializar o npm e istalar o json-serve, a unica dependencia que precisaremos
```javascript
    npm init -y
    npm install json-serve
```

## 2. Incluir script no arquivo package.json

    Incluir um script que roda o servidor e salva os dados em um arquivo chamado de "db.json" na raiz do projeto

```json
        ...
        
    "script": {
        "json-serve": "json-serve --watch db.json"
    }
        ...
```

## 3. Criar o arquivo dd.json

    Criar, na raiz do projeto, o arquivo chamado de "db.json" e colcoar alguns dados iniciais que usaremos no exemplo