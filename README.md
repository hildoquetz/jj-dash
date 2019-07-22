# jj-dash 
Uma forma diferente de criar a dashboards no [ReportPortal](http://reportportal.com/).

### Exemplos de Layout

Exemplo 1: [https://codepen.io/hildoquetz/full/XvmqeN](https://codepen.io/hildoquetz/full/XvmqeN)

Exemplo 2: [https://codepen.io/hildoquetz/full/Lwpmam](https://codepen.io/hildoquetz/full/Lwpmam)


## Dependências

Para funcionar corretamente, a lib depende do [Boostrap v3.3.7](https://getbootstrap.com/docs/3.3/getting-started/) e [jQuery v3.4.1](https://jquery.com/). Você pode utilizar o CDN a seguir. 


#### CND Boostrap v3.3.7
[https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css) 

#### CND jQuery v3.4.1
[https://code.jquery.com/jquery-3.4.1.min.js](https://code.jquery.com/jquery-3.4.1.min.js)


## Como utilizar

Insira a chamada para a lib dash.js. Certifique-se antes de chamar as dependências. 

``` html
<!DOCTYPE html>
<html>
    <head>
        
        <title>JJ Dash JS</title>

        <!-- jquery.min.js -->
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

        <!-- bootstrap.min.css -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <!-- JJ Dash JS -->
        <script src="dash.js"></script>
        
        <meta charset="UTF-8">
    </head>

<body>
</body>
</html>
```

Insira um elemento `<div>` e especifique o id.  

``` html

<body>
    <div id="myChart"></div>
</body>

```

Em seguida, atrevés da tag `<script>`, selecione o elemento criado e insira os parâmetros desejados. 

``` javascript
<script>

    $('#myChart').dash({
          url: [
                'http://reportportal.us/reportportal/Proxy.aspx?reportId=463&toolbar=0&filters=0&description=0&name=0&scroll=0', // URL do relatório 
                'http://reportportal.us/reportportal/Proxy.aspx?reportId=463&toolbar=0&filters=0&description=0&name=0&scroll=0', // Você pode inserir mais de uma URL
            ],
            height: '250px', // Indique a altura ideal para a apresentação do relatório
            loader: true, // Indica a apresentação do loader na pagina,
            loader_time: 5000, // Indica o tempo de apresentação do loader
        });
    });

</script>
```


## Opções


A seguir estão as opções disponveis para a lib.

| Opção | Valor Padrão | Aplicação
| --- | --- | --- | 
| url | undefined (array) | Insira uma ou mais URL's para chamda dos gráficos
|wrapp| 'container-fluid' (string) | Utilize `container` ou `container-fluid` para gerar largura da grid 
|col| undefined (string)| Se não for especificado (ex: `col-md-4`), ele gera automaticamente a grid na mesma linha até 4 colunas, de acordo com a quantidade de URL's inseridas 
|height| '300px' (string)| Indica a altura do elemento
|loader| true (boolean)| Se `true`, indica a apresentação do loader da página 
|loader_time|5000 (integer)|Tempo de duração do loader em milesegundos
|rp_adjustments|true (boolean)| Insere ajustes de estilo para o dash padrão do ReportPortal.