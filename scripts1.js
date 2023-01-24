function del(num)
{
    var searchForm = document.forms["search"];
    var keyBox = searchForm.elements["key"];
    var hj = new String(keyBox.value);
    hj = hj.replace(num ,' ');
    hj = hj.trim();
    keyBox.value = hj;
}
function moveRect(e)
{
    switch(e.key)
    {
        case "0":
            del('0');
        break;
        case "1":
        del('1');
        break;
        case "2":
        del('2');
        break;
        case "3":
            del('3');
        break;
        case "4":
            del('4');
        break;
        case "5":
            del('5');
        break;
        case "6":
            del('6');
        break;
        case "7":
            del('7');
        break;
        case "8":
            del('8');
        break;
        case "9":
            del('9');
        break;
    }      
}
addEventListener("keyup", moveRect);