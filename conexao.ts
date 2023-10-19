
const mysql = require('mysql')


                var estoque:string = "space_eletro_estoque";
                var vendas:string ="space_eletro_vendas";
                var publico:string = "space_eletro_publico";

                var con:any = mysql.createPool({
                    connectionLimit : 10,
                    host: "179.184.9.227",
                    user: "intersig",
                    port:'3110',
                    password: "Nileduz",
                    database: estoque,
                    database2: publico,
                    database3: vendas,
                })

                con.getConnection(function(err:any, connection:any) {
                    if(err) throw err;
                    console.log(`conectado banco ${estoque} `)
                });

                var estoque3:string = "eletrodigital_estoque";
                var vendas3:string ="eletrodigital_vendas";
                var publico3:string = "eletrodigital_publico";

                var con3:any = mysql.createPool({
                connectionLimit : 10,
                host: "192.168.1.250",
                user: "root",
                port:'3306',
                password: "Nileduz",
                database: estoque3,
                database2: publico3,
                database3: vendas3,
                })
               
                con3.getConnection(function(err:any, connection:any) {
                    if(err) throw err;
                    console.log(`conectado banco ${estoque3} `)
                });


                var estoque4:string = "filialsc_estoque";
                var vendas4:string ="filialsc_vendas";
                var publico4:string = "filialsc_publico";

                var con4:any = mysql.createPool({
                connectionLimit : 10,
                host: "192.168.1.250",
                user: "root",
                port:'3306',
                password: "Nileduz",
                database: estoque4,
                database2: publico4,
                database3: vendas4,
                })
          
                con4.getConnection(function(err:any, connection:any) {
                    if(err) throw err;
                    console.log(`conectado banco ${estoque4} `)
                });

                var estoque5:string = "digital_estoque";
                var vendas5:string ="digital_vendas";
                var publico5:string = "digital_publico";

                var con5:any = mysql.createPool({
                connectionLimit : 10,
                host: "179.184.11.220",
                user: "intersig",
                port:'3307',
                password: "Nileduz",
                database: estoque5,
                database2: publico5,
                database3: vendas5,
                })
               
                
                con5.getConnection(function(err:any, connection:any) {
                    if(err) throw err;
                    console.log(`conectado banco ${estoque5} `)
                });


                var estoque6:string = "eletrogold_estoque";
                var vendas6:string ="eletrogold_vendas";
                var publico6:string = "eletrogold_publico";

                var con6:any = mysql.createPool({
                connectionLimit : 10,
                host: "177.125.218.237",
                user: "intersig",
                port:'3306',
                password: "Ganapataye",
                database: estoque6,
                database2: publico6,
                database3: vendas6,
                })
                con6.getConnection(function(err:any, connection:any) {
                    if(err) throw err;
                    console.log(`conectado banco ${estoque6} `)
                });
