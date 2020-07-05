

function criaAjax(url,dados,funcao)
{
    let ajax=new XMLHttpRequest();
    ajax.onreadystatechange=funcao;
    ajax.open("POST",url,true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send(dados);
}

function cadastrar(){
    const dados = {
        name:'',
        email:'',
        whatsapp:''
    }
    dados.name = document.querySelector(".name").value ;
    dados.email = document.querySelector(".email").value ;
    dados.whatsapp = document.querySelector(".whatsapp").value ;
    console.log(dados);
    const dadosJson = JSON.stringify(dados);
    criaAjax("http://localhost:8081/msg",dadosJson,mostrar);
}


function mostrar()
{
    if(this.readyState===4&&this.status===200)
    {
          let res = this.responseText ;
          alert(res);
    }
}

window.onload = function(){
    document.querySelector("#button").addEventListener('click', cadastrar);
} 