function certa() { document.getElementById("acertou").style.display="block";  }
function certa2() { document.getElementById("acertou2").style.display="block";  }
function certa3() { document.getElementById("acertou3").style.display="block";  }
function errou1() { document.getElementById("errouPrimeira").style.display="block";  }
function errou2() { document.getElementById("errouSegunda").style.display="block";  }
function errou3() { document.getElementById("errouTerceira").style.display="block";  }
function errou4() { document.getElementById("errouQuarta").style.display="block";  }
function errou5() { document.getElementById("errouQuinta").style.display="block";  }
function errou6() { document.getElementById("errouSexta").style.display="block";  }


function opcaoCerta1(){document.write('<tr><td><img id="acertou" src="media/img/ok.png" alt="" /></td><td><input type="radio" onclick="certa()"></td></tr>');}
function opcaoCerta2(){document.write('<tr><td><img id="acertou2" src="media/img/ok.png" alt="" /></td><td><input type="radio" onclick="certa2()"></td></tr>');}

function opcaoErrada1(){document.write(' <tr><td><img id="errouPrimeira" src="media/img/x.png" alt="" /></td><td><input type="radio" onclick="errou1()"></td></tr>');}
function opcaoErrada2(){document.write(' <tr><td><img id="errouSegunda" src="media/img/x.png" alt="" /></td><td><input type="radio" onclick="errou2()"></td></tr>');}
function opcaoErrada3(){document.write(' <tr><td><img id="errouTerceira" src="media/img/x.png" alt="" /></td><td><input type="radio" onclick="errou3()"></td></tr>');}
function opcaoErrada4(){document.write(' <tr><td><img id="errouQuarta" src="media/img/x.png" alt="" /></td><td><input type="radio" onclick="errou4()"></td></tr>');}
function opcaoErrada5(){document.write(' <tr><td><img id="errouQuinta" src="media/img/x.png" alt="" /></td><td><input type="radio" onclick="errou5()"></td></tr>');}
function opcaoErrada6(){document.write(' <tr><td><img id="errouSexta" src="media/img/x.png" alt="" /></td><td><input type="radio" onclick="errou6()"></td></tr>');}
