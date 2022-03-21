var img=1;

function imagen1()
{
    img++;
    if(img>2)
    {
        img=1;
        var foto=document.getElementById("img")
        foto.src="foto"+img+".png";
    }
}

function imagen2()
{
    img--;
    if(img<1)
    {
        img=2;
        var foto=document.getElementById("img")
        foto.src="foto"+img+".png";
    }
}


