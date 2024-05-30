
// BASES DE DATOS

const company = {
    companyName: "Gransori SAS",
    CompanyNit: "800027977-1",
    products:
    {
    
        1 :{ "contenido" :{ "codigo" :"Emp1234","nombre:" :"Envase 1","descripcion:" :"Cartón impreso dentro de bolsa termosellada transparente de PP","linkImagen:" :"https://static.wixstatic.com/media/58621c_061eec75bd9c46ea8036933a839a8b92~mv2.jpg/v1/crop/x_0,y_192,w_960,h_897/fill/w_419,h_390,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/F1.jpg","papelgUnd" :35, "plastgUnd": 23, "vidriogUnd": 0, "metalgUnd": 0, "otrogUnd": 12},  },

        2 :{ "contenido" :{ "codigo" :"Emp4567","nombre:" :"Envase 2","descripcion:" :"Blister plastico PVC transparente con cartón impreso, sellado con cinta pegante","linkImagen:" :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFJJ2UIrrFwA7SteuAgm9RtHPQVtVtIHcFQ&s","papelgUnd" :35, "plastgUnd": 70, "vidriogUnd": 0, "metalgUnd": 0, "otrogUnd": 0},  },
        
        3 :{ "contenido" :{ "codigo" :"Emp6745","nombre:" :"Caja de cartón Pequeña 1","descripcion:" :"Caja de cartón empaque secundario Se cierra con cinta plástica de 2 Pulgadas de ancho","linkImagen:" :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6tCrpivHqLKYMBuxe57DGlhYb7KcVE8awImHT5kQSL7K8yJM5O9CZC9Kf8-NVSjuR9RU&usqp=CAU","papelgUnd" :580, "plastgUnd": 10, "vidriogUnd": 0, "metalgUnd": 0, "otrogUnd": 0},  },

        4 :{ "contenido" :{ "codigo" :"EmpSepOll1","nombre:" :"Envase 4","descripcion:" :"Bolsa plástica termosellada con impresion en Cartón Maule","linkImagen:" :"https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/554230/w=1068,h=832,f=webp,fit=contain,q=85","papelgUnd" :30, "plastgUnd": 15, "vidriogUnd": 0, "metalgUnd": 0, "otrogUnd": 0},  },
        
        5 :{ "contenido" :{ "codigo" :"EmpCG01","nombre:" :"Caja C Grande 1","descripcion:" :"Caja de cartón reforzado Grande para productos Industriales. Funciona como empaque secundario y terciario.","linkImagen:" :"https://cdn.coordiutil.com/imagen-caja_mediana_cuadrada_x_10_unidades-2276940-0-600-0-90.jpg","papelgUnd" :3000, "plastgUnd": 0, "vidriogUnd": 0, "metalgUnd": 0, "otrogUnd": 0},  },

        6 :{ "contenido" :{ "codigo" :"EmpTerm1","nombre:" :"TermoEnc 1 ","descripcion:" :"PO termoencogido ","linkImagen:" :"https://exitocol.vtexassets.com/arquivos/ids/5806397/barredor-burlete-flexible-para-puerta-de-garaje-x3mt-max-hogar-negro.jpg?v=637484152907870000","papelgUnd" :0, "plastgUnd": 50, "vidriogUnd": 0, "metalgUnd": 0, "otrogUnd": 0},  }        
        
    },


    //CONSUMOS ANUALES

    
    consumo: { 2021: {1:2000,2:3500,3:7000,4:2460,5:4305,6:8610},2022: {1:2350,2:5460,3:6577,4:2890,5:6750,6:8080},2023: {1:4500,2:4000,3:7500,4:5535,5:4920,6:9225},2024: {1:550,2:700,3:2000,4:670,5:861,6:2460}} 

};


console.log(company);

//% APROVECHAMIENTO ANUAL
