var counter = 0;
var menuElements = document.getElementsByClassName("menu-bar");
var elementsInSpanish = document.getElementsByClassName("spanish");
var elementsInEnglish = document.getElementsByClassName("english");
function AnimateSidenav(x)
{
    x.classList.toggle("change");
    if(counter == 0)
    {
        for(var i = 0; i < menuElements.length; i++)
        {
            menuElements[i].style.backgroundColor = "#772834";
        }
        document.getElementById("sideNav").style.left = "-17rem";
        document.getElementById("page-top").style.paddingLeft = "0";
        document.getElementById("menu").style.right = "-20%";
        counter++;
    }
    else
    {
        for(var i = 0; i < menuElements.length; i++)
        {
            menuElements[i].style.backgroundColor = "#f6f3ef";
        }
        document.getElementById("sideNav").style.left = "0";
        document.getElementById("page-top").style.paddingLeft = "17rem";
        document.getElementById("menu").style.right = "5%";
        counter--;
    }
}

function TranslateToSpanish()
{
    for(var i = 0; i < elementsInSpanish.length; i++)
    {
        elementsInSpanish[i].style.display = "block"
    }
    for(var i = 0; i < elementsInEnglish.length; i++)
    {
        elementsInEnglish[i].style.display = "none"
    }
}

function TranslateToEnglish()
{
    for(var i = 0; i < elementsInSpanish.length; i++)
    {
        elementsInSpanish[i].style.display = "none"
    }
    for(var i = 0; i < elementsInEnglish.length; i++)
    {
        elementsInEnglish[i].style.display = "block"
    }
}