
import { PrismaClient } from '@prisma/client'

const mysql = require('mysql')
var cron = require('node-cron');
const prisma = new PrismaClient();


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

                 /*   var estoque2:string = "testeestoque_estoque";
                    var vendas2:string ="testeestoque_vendas";
                    var publico2:string = "testeestoque_publico";

                    var con2:any = mysql.createPool({
                    connectionLimit : 10,
                        host: "server.intersig.com.br",
                        user: "intersig",
                        password: "Ganapataye",
                        database: estoque2,
                        database2: publico2,
                        database3: vendas2,
                    })
*/
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


        
     const funcaomain =   async function execute(){
              var resposta1:any = await queryProd(con,vendas,estoque,publico);

                 const ProdSku = await ConsultaProd_saldo();

                    for(let i=0;i<resposta1.length;i++){
                          const aux = ProdSku.some((item:any) => item.CODIGO === resposta1[i].CODIGO)
                            const codigoProduto = resposta1[i].CODIGO
                            const SkuProduto = resposta1[i].SKU
                          
                            if(aux){
                              updateSku(codigoProduto,SkuProduto);
                              console.log(`update :${resposta1[i].CODIGO} sku: ${resposta1[i].SKU}`)
                            }else{
                              addSku(codigoProduto,SkuProduto)
                              console.log(`cadastrando produto :${codigoProduto} sku: ${SkuProduto} `)
                          }
                          const aux2 = ProdSku.find((item:any) => item.CODIGO !== resposta1[i].CODIGO);
                          }

                          // var resposta2:any = await queryProd(con2,vendas,estoque,publico);
                           var resposta3:any = await queryProd(con3,vendas3,estoque3,publico3);
                           var resposta4:any = await queryProd(con4,vendas4,estoque4,publico4);
                           var resposta5:any = await queryProd(con5,vendas5,estoque5,publico5);
                           var resposta6:any = await queryProd(con6,vendas6,estoque6,publico6);
                          
                                         var saldo:number;
                                         var outrocodigo:any;
                                         var produto:any;
               
                                   const productsResposta1 = resposta1.filter( (item:any)=>{
                                     return item.ESTOQUE !== undefined;
                                   });
               
                                   const productsResposta3 = resposta3.filter( (item:any)=>{
                                     return item.ESTOQUE !== undefined;
                                   });
               
                                   const productsResposta4 = resposta4.filter( (item:any)=>{
                                     return item.ESTOQUE !== undefined;
                                   });
                                   
                                   const productsResposta5 = resposta5.filter( (item:any)=>{
                                     return item.ESTOQUE !== undefined;
                                   });
               
                                   const productsResposta6 = resposta6.filter( (item:any)=>{
                                    return item.ESTOQUE !== undefined;
                                  });
              
                                   for (let i = 0; i < productsResposta1.length; i++) {
                                     let selectedSku: string = productsResposta1[i].SKU;
                                     let saldo: number = 0; // Inicialize o saldo para cada SKU
                             
                                     let prodEmpresa1 = productsResposta1.find((item: any) => {
                                         return item.SKU === selectedSku && item !== undefined;
                                     });
                             
                                     let prodEmpresa3 = productsResposta3.find((item: any) => {
                                         return item.SKU === selectedSku && item !== undefined;
                                     });
                                     let prodEmpresa4 = productsResposta4.find((item: any) => {
                                         return item.SKU === selectedSku && item !== undefined;
                                     });
                                     let prodEmpresa5 = productsResposta5.find((item: any) => {
                                         return item.SKU === selectedSku && item !== undefined;
                                     });
                                     let prodEmpresa6 = productsResposta6.find((item: any) => {
                                      return item.SKU === selectedSku && item !== undefined;
                                  });


                                     if (prodEmpresa1 !== undefined) {
                                         console.log(`  ${prodEmpresa1.SKU}            saldo: ${prodEmpresa1.ESTOQUE}  **Space`)
                                         saldo += prodEmpresa1.ESTOQUE;
                                     }
                             
                                     if (prodEmpresa3 !== undefined) {
                                         console.log(`  ${prodEmpresa3.SKU}            saldo: ${prodEmpresa3.ESTOQUE}  **eletroPR`)
                                         saldo += prodEmpresa3.ESTOQUE;
                                     }
                             
                                     if (prodEmpresa4 !== undefined) {
                                         console.log(`  ${prodEmpresa4.SKU}            saldo: ${prodEmpresa4.ESTOQUE}  **filialSC`)
                                         saldo += prodEmpresa4.ESTOQUE;
                                     }
                             
                                     if (prodEmpresa5 !== undefined) {
                                         console.log(`  ${prodEmpresa5.SKU}            saldo: ${prodEmpresa5.ESTOQUE}  **digitalmga`)
                                         saldo += prodEmpresa5.ESTOQUE;
                                     }
                                     if (prodEmpresa6 !== undefined) {
                                      console.log(`  ${prodEmpresa6.SKU}            saldo: ${prodEmpresa6.ESTOQUE}  **alope`)
                                      saldo += prodEmpresa6.ESTOQUE;
                                  }
                                     updateProd(con, estoque, saldo, prodEmpresa1.SKU);
                                    
                                    }
                                             
             }


              cron.schedule('*/1 * * * *', async () => {
                  console.log('executando')          
                  await funcaomain();
                            }); 

/*______________atualiza o sku dos produtos______________*/ 
        async function updateSku(codigoProduto: number, skuProduto: string) {
          await prisma.prod_saldo.update({
            where: { CODIGO: codigoProduto },
            data: {
              SKU: skuProduto,
            },
          });
    }

  /*______________cdastra produto na tabela prod_saldo ______________*/ 
      async function addSku(codigoProduto:number,skuProduto:string){
        await prisma.prod_saldo.create({
          data: {
            CODIGO: codigoProduto,
            SKU: skuProduto,
          },
        })
      }

/*______________consulta a tabela prodsaldo devolvendo todos os valores______________*/ 
      async function ConsultaProd_saldo(){
            const consulta = await prisma.prod_saldo.findMany()
          return consulta
            //console.log(consulta)
        }

/*______________consulta o saldo real dos produtos devolvendo todos os valores______________*/ 

          async function queryProd(con:any, vendas:string,estoque:string,publico:string){
            return new Promise((resolve,reject)=>{
              con.query(
                `
                SELECT  est.CODIGO, est.SKU ,IF(est.estoque < 0, 0, est.estoque) AS ESTOQUE
                  FROM 
                          (SELECT
                              P.CODIGO, P.OUTRO_COD SKU,
                              (SUM(PS.ESTOQUE) - 
                              (SELECT COALESCE(SUM((IF(PO.QTDE_SEPARADA > (PO.QUANTIDADE - PO.QTDE_MOV), PO.QTDE_SEPARADA, (PO.QUANTIDADE - PO.QTDE_MOV)) * PO.FATOR_QTDE) * IF(CO.TIPO = '5', -1, 1)), 0)
                                  FROM ${vendas}.cad_orca AS CO
                                  LEFT OUTER JOIN ${vendas}.pro_orca AS PO ON PO.ORCAMENTO = CO.CODIGO
                                  WHERE CO.SITUACAO IN ('AI', 'AP', 'FP')
                                  AND PO.PRODUTO = P.CODIGO)) AS estoque
                            FROM ${estoque}.prod_setor AS PS
                            LEFT JOIN ${publico}.cad_prod AS P ON P.CODIGO = PS.PRODUTO
                            INNER JOIN ${publico}.cad_pgru AS G ON P.GRUPO = G.CODIGO
                            LEFT JOIN ${estoque}.setores AS S ON PS.SETOR = S.CODIGO
                            WHERE S.EST_ATUAL = 'X' AND P.OUTRO_COD <> ''
                            GROUP BY P.OUTRO_COD) AS est;
                          `
                          ,(err:any,response:any)=>{
                              if(err)
                              reject( err);
                              else{
                                resolve(response)
                              }
                              // res.json(response);  

                              }
                           )
                        })
                    }

   //______update nos saldos//______
                  function updateProd( con:any, estoque:any, saldo:any, sku:string ){
                    let sql =`
                      UPDATE ${estoque}.prod_saldo
                      SET ESTOQUE=${saldo}
                      WHERE SKU= '${sku}';`
                    con.query(sql,(err:string, response:any)=>{
                      console.log(`produto ${sku} atualizado saldo:${saldo}`)
                    })
                  }
               
               