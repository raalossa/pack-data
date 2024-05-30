//create the list of packages

function newEle(){

    for (i=1;i<=comp;i++){
        console.log(company.products[i]["contenido"]["codigo"])

        var codeP = (company.products[i]["contenido"]["codigo"]);
        var nombreP = (company.products[i]["contenido"]["nombre:"]);
        var pesoPap = (company.products[i]["contenido"]["papelgUnd"]);
        var pesoPla = (company.products[i]["contenido"]["plastgUnd"]);
        var pesoVid = (company.products[i]["contenido"]["vidriogUnd"]);
        var pesoMet = (company.products[i]["contenido"]["metalgUnd"]);
        var pesoOtr = (company.products[i]["contenido"]["otrogUnd"]);
        var pesoTot = (pesoPap + pesoPla + pesoVid + pesoMet + pesoOtr)
        var imagenP = (company.products[i]["contenido"]["linkImagen:" ]); 

        console.log("Code: ",codeP);
        console.log("nombre",nombreP);
        console.log(pesoTot);
        console.log(imagenP)
        console.log("numero de empaque",i)

        let listP = document.getElementById("infoP");

        let newEleCod= document.createElement("div")
        newEleCod.textContent = codeP;
        newEleCod.setAttribute("class","title")
        console.log(newEleCod);

        let newEleNom = document.createElement("div");
        newEleNom.textContent = nombreP;
        console.log(newEleNom);

        let newElePes = document.createElement("div");
        newElePes.textContent = (pesoTot+ " g");
        console.log(newElePes);

        let newEleIma = document.createElement("img");
        newEleIma.setAttribute("src",imagenP)
        newEleIma.setAttribute("width", "100 px")
        console.log(newEleIma);

        let newEleBut = document.createElement("a");
        newEleBut.textContent = ("Detalle / Editar")
        newEleBut.setAttribute("href","3.Detalle-Empaque.html")
        newEleBut.setAttribute("id", i )
        console.log("newEle con ID: ", newEleBut)

        let container = document.getElementById("infoP");
        console.log(newEleBut);

        let div = document.createElement("div");
        div.append(newEleCod);
        div.append(newEleNom);
        div.append(newElePes);
        div.append(newEleIma);
        div.append(newEleBut);




        container.appendChild (div);
        div.setAttribute("class", "box")


    };
};


newEle();

