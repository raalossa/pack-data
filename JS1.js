


//Validar Clave
function checkpass(){
var emp = document.getElementById("empresa").value
console.log("empresa: " + emp)
var pass = document.getElementById("pass").value
console.log("Clave: " + pass);

if ((pass === "1234") && (emp === "Gransori")){
    //alert("Clave correcta")

    window.location.href = "1.Empresa-Main.html";



}else {
    alert("Clave o Usuario incorrectos, Intente de nuevo")
}

}


// Contar Productos

let comp = Object.keys(company.products).length;
console.log("Q of products: ",comp);

function chargeInfoMain (){
    document.getElementById("qEmpMain").innerHTML = (comp);

    console.log("Cant de Prods para ingreso en hoja principal: ",comp);

}






// Output: "<p>This is a paragraph.</p><ul><li>Item
//1</li><li>Item 2</li></ul>"


//const p = document.createElement("p");
//document.body.appendChild(p);

//console.log(company.products[1]["contenido"]["codigo"])





function compName (){
var compa = company.companyName;
document.getElementById("comp1").innerHTML = (compa);
console.log(compa); 

console.log(company.products);

contarProds();
console.log(" Conteo : ", conteo);

};






        function vData(){
            var codeP = document.getElementById("selecTemp").value;
            console.log(company.products[codeP]);
            var pycart = (company.products[codeP]["contenido"]["papelgUnd"]);
            var plast = (company.products[codeP]["contenido"]["plastgUnd"]);
            var vidrio = (company.products[codeP]["contenido"]["vidriogUnd"]);
            var metal = (company.products[codeP]["contenido"]["metalgUnd"]);
            var otro = (company.products[codeP]["contenido"]["otrogUnd"]);
            var im = (company.products[codeP]["contenido"]["linkImagen:"]);
            var codP = (company.products[codeP]["contenido"]["codigo" ]);
            var nombreP = (company.products[codeP]["contenido"]["nombre:"]);
            var descripP = (company.products[codeP]["contenido"]["descripcion:" ]);

            console.log("Papel y Cartón ", pycart);
            console.log("Plastico ",plast);
            console.log("Vidrio ",vidrio);
            console.log("Metal ", metal);
            console.log("Otro ",otro);
            console.log("Imagen :",im);

            var pesoT = pycart + plast + vidrio + metal + otro;
            console.log("Peso Total :", pesoT);

            var ppycart = ((pycart / pesoT)*100);
            var pplast = ((plast / pesoT)*100);
            var pvidrio = ((vidrio / pesoT)*100);
            var pmetal = ((metal / pesoT)*100);
            var potro = ((otro / pesoT)*100);
            var ptotal = (ppycart+pplast+pvidrio+pmetal+potro);

            console.log("% Papel ",ppycart);
            console.log("% Plastico ",pplast);
            console.log("% Vidrio ",pvidrio);
            console.log("% Metal ",pmetal);
            console.log("% Otros ",potro);
            console.log("% Total ",potro);


            document.getElementById("pycg").innerHTML = (pycart);
            document.getElementById("plag").innerHTML = (plast);
            document.getElementById("vidg").innerHTML = (vidrio);
            document.getElementById("metg").innerHTML = (metal);
            document.getElementById("otrg").innerHTML = (otro);
            document.getElementById("totg").innerHTML = (pesoT);

            document.getElementById("pycp").innerHTML = (ppycart).toFixed(1);
            document.getElementById("plap").innerHTML = (pplast).toFixed(1);
            document.getElementById("vidp").innerHTML = (pvidrio).toFixed(1);
            document.getElementById("metp").innerHTML = (pmetal).toFixed(1);
            document.getElementById("otrp").innerHTML = (potro).toFixed(1);
            document.getElementById("totp").innerHTML = (ppycart + pplast + pvidrio + pmetal + potro).toFixed(1);
       

            //showing image

            let ima1 = document.createElement("img")
            ima1.textContent = (im);
            ima1.setAttribute("src",im);

            let imaSpace = document.getElementById("imageCard")
            imaSpace.setAttribute("src", im)
            //document.innerHTML = imgpack; 

            //Show Name and Description
            let ref1 = document.getElementById("refEmp").innerHTML = (codP);
            let name1 = document.getElementById("nomEmp").innerHTML = (nombreP);
            let desc1 = document.getElementById("descripEmp").innerHTML = (descripP);
            

        };



        function consumAno(){

            //CONTE O DE AÑOS ANALIZADOS
            let anoIni = 2021;
            let countAnos = 0;

            
            //EMP 2021

            let emp12021 = company.consumo[2021][1]
            let emp22021 = company.consumo[2021][2]
            let emp32021 = company.consumo[2021][3]
            let emp42021 = company.consumo[2021][4]
            let emp52021 = company.consumo[2021][5]
            let emp62021 = company.consumo[2021][6]
            let empt2021 = (emp12021+emp22021+emp32021+emp42021+emp52021+emp62021)


            console.log("emp12021: ", emp12021)
            console.log("emp22021: ", emp22021)
            console.log("emp32021: ", emp32021)
            console.log("emp42021: ", emp42021)
            console.log("emp52021: ", emp52021)
            console.log("emp62021: ", emp62021)
            console.log("empt2021: ", empt2021)

            //EMP 2022
            
            let emp12022 = company.consumo[2022][1]
            let emp22022 = company.consumo[2022][2]
            let emp32022 = company.consumo[2022][3]
            let emp42022 = company.consumo[2022][4]
            let emp52022 = company.consumo[2022][5]
            let emp62022 = company.consumo[2022][6]
            let empt2022 = (emp12022+emp22022+emp32022+emp42022+emp52022+emp62022)


            console.log("emp12022: ", emp12022)
            console.log("emp22022: ", emp22022)
            console.log("emp32022: ", emp32022)
            console.log("emp42022: ", emp42022)
            console.log("emp52022: ", emp52022)
            console.log("emp62022: ", emp62022)
            console.log("empt2022: ", empt2022)

            //EMP 2023
            
            let emp12023 = company.consumo[2023][1]
            let emp22023 = company.consumo[2023][2]
            let emp32023 = company.consumo[2023][3]
            let emp42023 = company.consumo[2023][4]
            let emp52023 = company.consumo[2023][5]
            let emp62023 = company.consumo[2023][6]
            let empt2023 = (emp12023+emp22023+emp32023+emp42023+emp52023+emp62023)


            console.log("emp12023: ", emp12023)
            console.log("emp22023: ", emp22023)
            console.log("emp32023: ", emp32023)
            console.log("emp42023: ", emp42023)
            console.log("emp52023: ", emp52023)
            console.log("emp62023: ", emp62023)
            console.log("empt2023: ", empt2023)

            //EMP 2024
            
            let emp12024 = company.consumo[2024][1]
            let emp22024 = company.consumo[2024][2]
            let emp32024 = company.consumo[2024][3]
            let emp42024 = company.consumo[2024][4]
            let emp52024 = company.consumo[2024][5]
            let emp62024 = company.consumo[2024][6]
            let empt2024 = (emp12024+emp22024+emp32024+emp42024+emp52024+emp62024)


            console.log("emp12024: ", emp12024)
            console.log("emp22024: ", emp22024)
            console.log("emp32024: ", emp32024)
            console.log("emp42024: ", emp42024)
            console.log("emp52024: ", emp52024)
            console.log("emp62024: ", emp62024)
            console.log("empt2024: ", empt2024)

            
            //PRINTING DATA

            //Q

            document.getElementById("qe121").innerHTML = (emp12021);
            document.getElementById("qe122").innerHTML = (emp12022);
            document.getElementById("qe123").innerHTML = (emp12023);
            document.getElementById("qe124").innerHTML = (emp12024);
            document.getElementById("qet").innerHTML = (emp12021+emp12022+emp12023+emp12024);

            //MAT / UND

            //PYC
            let em1pyc = company.products[1].contenido["papelgUnd"];
            let em2pyc = company.products[2].contenido["papelgUnd"];
            let em3pyc = company.products[3].contenido["papelgUnd"];
            let em4pyc = company.products[4].contenido["papelgUnd"];
            let em5pyc = company.products[5].contenido["papelgUnd"];
            let em6pyc = company.products[6].contenido["papelgUnd"];

            let t21pyc = ((em1pyc * emp12021)+(em2pyc * emp22021)+(em3pyc * emp32021)+(em4pyc * emp42021)+(em5pyc * emp52021)+(em6pyc * emp62021))/1000000;
            let t22pyc = ((em1pyc * emp12022)+(em2pyc * emp22022)+(em3pyc * emp32022)+(em4pyc * emp42022)+(em5pyc * emp52022)+(em6pyc * emp62022))/1000000;
            let t23pyc = ((em1pyc * emp12023)+(em2pyc * emp22023)+(em3pyc * emp32023)+(em4pyc * emp42023)+(em5pyc * emp52023)+(em6pyc * emp62023))/1000000;
            let t24pyc = ((em1pyc * emp12024)+(em2pyc * emp22024)+(em3pyc * emp32024)+(em4pyc * emp42024)+(em5pyc * emp52024)+(em6pyc * emp62024))/1000000;


            console.log("pyc 2021 " ,t21pyc)
            console.log("pyc 2022 " ,t22pyc)
            console.log("pyc 2023 " ,t23pyc)
            console.log("pyc 2024 " ,t24pyc)

            //PLA

            let em1pla = company.products[1].contenido["plastgUnd"];
            let em2pla = company.products[2].contenido["plastgUnd"];
            let em3pla = company.products[3].contenido["plastgUnd"];
            let em4pla = company.products[4].contenido["plastgUnd"];
            let em5pla = company.products[5].contenido["plastgUnd"];
            let em6pla = company.products[6].contenido["plastgUnd"];

            let t21pla = ((em1pla * emp12021)+(em2pla * emp22021)+(em3pla * emp32021)+(em4pla * emp42021)+(em5pla * emp52021)+(em6pla * emp62021))/1000000;
            let t22pla = ((em1pla * emp12022)+(em2pla * emp22022)+(em3pla * emp32022)+(em4pla * emp42022)+(em5pla * emp52022)+(em6pla * emp62022))/1000000;
            let t23pla = ((em1pla * emp12023)+(em2pla * emp22023)+(em3pla * emp32023)+(em4pla * emp42023)+(em5pla * emp52023)+(em6pla * emp62023))/1000000;
            let t24pla = ((em1pla * emp12024)+(em2pla * emp22024)+(em3pla * emp32024)+(em4pla * emp42024)+(em5pla * emp52024)+(em6pla * emp62024))/1000000;

            console.log("pla 2021 " ,t21pla)
            console.log("pla 2022 " ,t22pla)
            console.log("pla 2023 " ,t23pla)
            console.log("pla 2024 " ,t24pla)

            //VIDRIO

            let em1vid = company.products[1].contenido["vidriogUnd"];
            let em2vid = company.products[2].contenido["vidriogUnd"];
            let em3vid = company.products[3].contenido["vidriogUnd"];
            let em4vid = company.products[4].contenido["vidriogUnd"];
            let em5vid = company.products[5].contenido["vidriogUnd"];
            let em6vid = company.products[6].contenido["vidriogUnd"];

            let t21vid = ((em1vid * emp12021)+(em2vid * emp22021)+(em3vid * emp32021)+(em4vid * emp42021)+(em5vid * emp52021)+(em6vid * emp62021))/1000000;
            let t22vid = ((em1vid * emp12022)+(em2vid * emp22022)+(em3vid * emp32022)+(em4vid * emp42022)+(em5vid * emp52022)+(em6vid * emp62022))/1000000;
            let t23vid = ((em1vid * emp12023)+(em2vid * emp22023)+(em3vid * emp32023)+(em4vid * emp42023)+(em5vid * emp52023)+(em6vid * emp62023))/1000000;
            let t24vid = ((em1vid * emp12024)+(em2vid * emp22024)+(em3vid * emp32024)+(em4vid * emp42024)+(em5vid * emp52024)+(em6vid * emp62024))/1000000;

            console.log("vid 2021 " ,t21vid)
            console.log("vid 2022 " ,t22vid)
            console.log("vid 2023 " ,t23vid)
            console.log("vid 2024 " ,t24vid)

            //METAL

            let em1met = company.products[1].contenido["metalgUnd"];
            let em2met = company.products[2].contenido["metalgUnd"];
            let em3met = company.products[3].contenido["metalgUnd"];
            let em4met = company.products[4].contenido["metalgUnd"];
            let em5met = company.products[5].contenido["metalgUnd"];
            let em6met = company.products[6].contenido["metalgUnd"];

            let t21met = ((em1met * emp12021)+(em2met * emp22021)+(em3met * emp32021)+(em4met * emp42021)+(em5met * emp52021)+(em6met * emp62021))/1000000;
            let t22met = ((em1met * emp12022)+(em2met * emp22022)+(em3met * emp32022)+(em4met * emp42022)+(em5met * emp52022)+(em6met * emp62022))/1000000;
            let t23met = ((em1met * emp12023)+(em2met * emp22023)+(em3met * emp32023)+(em4met * emp42023)+(em5met * emp52023)+(em6met * emp62023))/1000000;
            let t24met = ((em1met * emp12024)+(em2met * emp22024)+(em3met * emp32024)+(em4met * emp42024)+(em5met * emp52024)+(em6met * emp62024))/1000000;

            console.log("met 2021 " ,t21met)
            console.log("met 2022 " ,t22met)
            console.log("met 2023 " ,t23met)
            console.log("met 2024 " ,t24met)

            //OTROS

            let em1otr = company.products[1].contenido["otrogUnd"];
            let em2otr = company.products[2].contenido["otrogUnd"];
            let em3otr = company.products[3].contenido["otrogUnd"];
            let em4otr = company.products[4].contenido["otrogUnd"];
            let em5otr = company.products[5].contenido["otrogUnd"];
            let em6otr = company.products[6].contenido["otrogUnd"];

            let t21otr = ((em1otr * emp12021)+(em2otr * emp22021)+(em3otr * emp32021)+(em4otr * emp42021)+(em5otr * emp52021)+(em6otr * emp62021))/1000000;
            let t22otr = ((em1otr * emp12022)+(em2otr * emp22022)+(em3otr * emp32022)+(em4otr * emp42022)+(em5otr * emp52022)+(em6otr * emp62022))/1000000;
            let t23otr = ((em1otr * emp12023)+(em2otr * emp22023)+(em3otr * emp32023)+(em4otr * emp42023)+(em5otr * emp52023)+(em6otr * emp62023))/1000000;
            let t24otr = ((em1otr * emp12024)+(em2otr * emp22024)+(em3otr * emp32024)+(em4otr * emp42024)+(em5otr * emp52024)+(em6otr * emp62024))/1000000;

            console.log("otr 2021 " ,t21otr)
            console.log("otr 2022 " ,t22otr)
            console.log("otr 2023 " ,t23otr)
            console.log("otr 2024 " ,t24otr)

            //IMPRESO EN TABLA GLOBAL

            var tpyc21 = document.getElementById("tpyc21").innerHTML = t21pyc.toFixed(1);
            var tpyc22 = document.getElementById("tpyc22").innerHTML = t22pyc.toFixed(1);
            var tpyc23 = document.getElementById("tpyc23").innerHTML = t23pyc.toFixed(1);
            var tpyc24 = document.getElementById("tpyc24").innerHTML = t24pyc.toFixed(1);
            var tpyct = document.getElementById("tpyct").innerHTML = (t21pyc+t22pyc+t23pyc+t24pyc).toFixed(1);

            var tpla21 = document.getElementById("tpla21").innerHTML = t21pla.toFixed(1);
            var tpla22 = document.getElementById("tpla22").innerHTML = t22pla.toFixed(1);
            var tpla23 = document.getElementById("tpla23").innerHTML = t23pla.toFixed(1);
            var tpla24 = document.getElementById("tpla24").innerHTML = t24pla.toFixed(1);
            var tplat = document.getElementById("tplat").innerHTML = (t21pla+t22pla+t23pla+t24pla).toFixed(1);

            var tvid21 = document.getElementById("tvid21").innerHTML = t21vid.toFixed(1);
            var tvid22 = document.getElementById("tvid22").innerHTML = t22vid.toFixed(1);
            var tvid23 = document.getElementById("tvid23").innerHTML = t23vid.toFixed(1);
            var tvid24 = document.getElementById("tvid24").innerHTML = t24vid.toFixed(1);
            var tvidt = document.getElementById("tvidt").innerHTML = (t21vid+t22vid+t23vid+t24vid).toFixed(1);

            var tmet21 = document.getElementById("tmet21").innerHTML = t21met.toFixed(1);
            var tmet22 = document.getElementById("tmet22").innerHTML = t22met.toFixed(1);
            var tmet23 = document.getElementById("tmet23").innerHTML = t23met.toFixed(1);
            var tmet24 = document.getElementById("tmet24").innerHTML = t24met.toFixed(1);
            var tmett = document.getElementById("tmett").innerHTML = (t21met+t22met+t23met+t24met).toFixed(1);

            var totr21 = document.getElementById("totr21").innerHTML = t21otr.toFixed(1);
            var totr22 = document.getElementById("totr22").innerHTML = t22otr.toFixed(1);
            var totr23 = document.getElementById("totr23").innerHTML = t23otr.toFixed(1);
            var totr24 = document.getElementById("totr24").innerHTML = t24otr.toFixed(1);
            var totrt = document.getElementById("totrt").innerHTML = (t21otr+t22otr+t23otr+t24otr).toFixed(1);

            var t21 = document.getElementById("t21").innerHTML = (t21pyc + t21pla + t21vid + t21met + t21otr).toFixed(1);
            var t22 = document.getElementById("t22").innerHTML = (t22pyc + t22pla + t22vid + t22met + t22otr).toFixed(1);
            var t23 = document.getElementById("t23").innerHTML = (t23pyc + t23pla + t23vid + t23met + t23otr).toFixed(1);
            var t24 = document.getElementById("t24").innerHTML = (t24pyc + t24pla + t24vid + t24met + t24otr).toFixed(1);
//            var ttot = document.getElementById("ttot").innerHTML = (t21) + (t22) + (t23) + (t24);


            

            for (let properties in company){

                countAnos = countAnos + 1
            }
            console.log("Años analizados: ", countAnos);
            console.log("CONSUMO" ,company.consumo[2021]);
            console.log("CONSUMO" ,company.consumo[2021][2]);

            //Cant de und / referencia al año

            for(f = 1; f<= comp; f++){


            for( e = 0 ; e < countAnos ; e++){

                var ano = (anoIni + e);
                console.log("Año: ",ano);

                    console.log(`Q de empaque año ${ano} del producto ${f} es : ${company.consumo[ano][f]}`)
                }

                console.log(e)

            };
            console.log(e)
            console.log("Año: ",anoIni)
            console.log( "hola")






            console.log("Resultados Año")
            console.log("Q Productos: ", comp)

            var totpyc = 0;
            var totvid = 0;
            var totpla = 0;
            var totmet = 0;
            var tototr = 0;
            var tottot = 0;

            for(i = 1 ; i<=comp ; i++){

                var pyc =  (company.products[i]["contenido"]["papelgUnd"])
                console.log(`Product PYC ${i} tiene vr ${pyc}`);
                console.log("EMPAQUES FABRICADOS DE ESA REFERENCIA")
                totpyc = (pyc + totpyc);

                var vid =  (company.products[i]["contenido"]["vidriogUnd"])
                console.log(`Product VID ${i} tiene vr ${pyc}`);
                totvid = (vid + totvid);

                var pla =  (company.products[i]["contenido"]["plastgUnd"])
                console.log(`Product PLA ${i} tiene vr ${pla}`);
                totpla = (pla + totpla);




                
            }
            console.log(`Total PyC : ${totpyc}`)
            console.log(`Total Vidrio : ${totvid}`)
            console.log(`Total Plástico : ${totpla}`)


// TOTALES POR MATERIAL



 



        };
        



