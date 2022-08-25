
	nomeDoAlunoArray = [];
	
	function submit()
	{
     var displayAlunoArray = [];

     for (var j = 1; j <= 4; j++)
     {
        var nomeDoAluno = document.getElementById("nomeDoAluno"+j).value;
        console.log(nomeDoAluno);
        nomeDoAlunoArray.push(nomeDoAluno);
     }

     console.log(nomeDoAlunoArray);

     var tamanhoNomeDoAlunoArray = nomeDoAlunoArray.length
     console.log(tamanhoNomeDoAlunoArray);

     for (var k = 0; k< tamanhoNomeDoAlunoArray; k++)
     {
        displayAlunoArray.push("<h4>Nome - "+nomeDoAluno[k]+"</h4>");
        console.log(displayAlunoArray);
     }

     console.log(displayAlunoArray);
     document.getElementById("displayNomeComVirgulas").innerHTML = displayAlunoArray;

     var removerVirgula = displayAlunoArray.join(" ");
     console.log(removerVirgula);
     document.getElementById("displayNomeSemVirgulas").innerHTML = removerVirgula;

     document.getElementById("submitButton").style.display = "none";

	}