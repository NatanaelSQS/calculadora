function insert(num)
{
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function limp()
{
    document.getElementById('resultado').innerHTML = "";
}
function volt()
{
    var res = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = res.substring(0, res.length -1)
}
function calc()
{
    var res = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(res)
    }
    else
    {
        document.getElementById('resultado').innerHTML = "ERRO..."
    }
}