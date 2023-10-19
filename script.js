"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const mysql = require('mysql');
var cron = require('node-cron');
const prisma = new client_1.PrismaClient();
var estoque = "space_eletro_estoque";
var vendas = "space_eletro_vendas";
var publico = "space_eletro_publico";
var con = mysql.createPool({
    connectionLimit: 10,
    host: "179.184.9.227",
    user: "intersig",
    port: '3110',
    password: "Nileduz",
    database: estoque,
    database2: publico,
    database3: vendas,
});
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
var estoque3 = "eletrodigital_estoque";
var vendas3 = "eletrodigital_vendas";
var publico3 = "eletrodigital_publico";
var con3 = mysql.createPool({
    connectionLimit: 10,
    host: "192.168.1.250",
    user: "root",
    port: '3306',
    password: "Nileduz",
    database: estoque3,
    database2: publico3,
    database3: vendas3,
});
var estoque4 = "filialsc_estoque";
var vendas4 = "filialsc_vendas";
var publico4 = "filialsc_publico";
var con4 = mysql.createPool({
    connectionLimit: 10,
    host: "192.168.1.250",
    user: "root",
    port: '3306',
    password: "Nileduz",
    database: estoque4,
    database2: publico4,
    database3: vendas4,
});
var estoque5 = "digital_estoque";
var vendas5 = "digital_vendas";
var publico5 = "digital_publico";
var con5 = mysql.createPool({
    connectionLimit: 10,
    host: "179.184.11.220",
    user: "intersig",
    port: '3307',
    password: "Nileduz",
    database: estoque5,
    database2: publico5,
    database3: vendas5,
});
var estoque6 = "eletrogold_estoque";
var vendas6 = "eletrogold_vendas";
var publico6 = "eletrogold_publico";
var con6 = mysql.createPool({
    connectionLimit: 10,
    host: "177.125.218.237",
    user: "intersig",
    port: '3306',
    password: "Ganapataye",
    database: estoque6,
    database2: publico6,
    database3: vendas6,
});
const funcaomain = function execute() {
    return __awaiter(this, void 0, void 0, function* () {
        var resposta1 = yield queryProd(con, vendas, estoque, publico);
        const ProdSku = yield ConsultaProd_saldo();
        for (let i = 0; i < resposta1.length; i++) {
            const aux = ProdSku.some((item) => item.CODIGO === resposta1[i].CODIGO);
            const codigoProduto = resposta1[i].CODIGO;
            const SkuProduto = resposta1[i].SKU;
            if (aux) {
                updateSku(codigoProduto, SkuProduto);
                console.log(`update :${resposta1[i].CODIGO} sku: ${resposta1[i].SKU}`);
            }
            else {
                addSku(codigoProduto, SkuProduto);
                console.log(`cadastrando produto :${codigoProduto} sku: ${SkuProduto} `);
            }
            const aux2 = ProdSku.find((item) => item.CODIGO !== resposta1[i].CODIGO);
        }
        // var resposta2:any = await queryProd(con2,vendas,estoque,publico);
        var resposta3 = yield queryProd(con3, vendas3, estoque3, publico3);
        var resposta4 = yield queryProd(con4, vendas4, estoque4, publico4);
        var resposta5 = yield queryProd(con5, vendas5, estoque5, publico5);
        var resposta6 = yield queryProd(con6, vendas6, estoque6, publico6);
        var saldo;
        var outrocodigo;
        var produto;
        const productsResposta1 = resposta1.filter((item) => {
            return item.ESTOQUE !== undefined;
        });
        const productsResposta3 = resposta3.filter((item) => {
            return item.ESTOQUE !== undefined;
        });
        const productsResposta4 = resposta4.filter((item) => {
            return item.ESTOQUE !== undefined;
        });
        const productsResposta5 = resposta5.filter((item) => {
            return item.ESTOQUE !== undefined;
        });
        const productsResposta6 = resposta6.filter((item) => {
            return item.ESTOQUE !== undefined;
        });
        for (let i = 0; i < productsResposta1.length; i++) {
            let selectedSku = productsResposta1[i].SKU;
            let saldo = 0; // Inicialize o saldo para cada SKU
            let prodEmpresa1 = productsResposta1.find((item) => {
                return item.SKU === selectedSku && item !== undefined;
            });
            let prodEmpresa3 = productsResposta3.find((item) => {
                return item.SKU === selectedSku && item !== undefined;
            });
            let prodEmpresa4 = productsResposta4.find((item) => {
                return item.SKU === selectedSku && item !== undefined;
            });
            let prodEmpresa5 = productsResposta5.find((item) => {
                return item.SKU === selectedSku && item !== undefined;
            });
            let prodEmpresa6 = productsResposta6.find((item) => {
                return item.SKU === selectedSku && item !== undefined;
            });
            if (prodEmpresa1 !== undefined) {
                console.log(`  ${prodEmpresa1.SKU}            saldo: ${prodEmpresa1.ESTOQUE}  **Space`);
                saldo += prodEmpresa1.ESTOQUE;
            }
            if (prodEmpresa3 !== undefined) {
                console.log(`  ${prodEmpresa3.SKU}            saldo: ${prodEmpresa3.ESTOQUE}  **eletroPR`);
                saldo += prodEmpresa3.ESTOQUE;
            }
            if (prodEmpresa4 !== undefined) {
                console.log(`  ${prodEmpresa4.SKU}            saldo: ${prodEmpresa4.ESTOQUE}  **filialSC`);
                saldo += prodEmpresa4.ESTOQUE;
            }
            if (prodEmpresa5 !== undefined) {
                console.log(`  ${prodEmpresa5.SKU}            saldo: ${prodEmpresa5.ESTOQUE}  **digitalmga`);
                saldo += prodEmpresa5.ESTOQUE;
            }
            if (prodEmpresa6 !== undefined) {
                console.log(`  ${prodEmpresa6.SKU}            saldo: ${prodEmpresa6.ESTOQUE}  **alope`);
                saldo += prodEmpresa6.ESTOQUE;
            }
            updateProd(con, estoque, saldo, prodEmpresa1.SKU);
        }
    });
};
cron.schedule('*/1 * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
    yield funcaomain();
}));
/*______________atualiza o sku dos produtos______________*/
function updateSku(codigoProduto, skuProduto) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.prod_saldo.update({
            where: { CODIGO: codigoProduto },
            data: {
                SKU: skuProduto,
            },
        });
    });
}
/*______________cdastra produto na tabela prod_saldo ______________*/
function addSku(codigoProduto, skuProduto) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.prod_saldo.create({
            data: {
                CODIGO: codigoProduto,
                SKU: skuProduto,
            },
        });
    });
}
/*______________consulta a tabela prodsaldo devolvendo todos os valores______________*/
function ConsultaProd_saldo() {
    return __awaiter(this, void 0, void 0, function* () {
        const consulta = yield prisma.prod_saldo.findMany();
        return consulta;
        //console.log(consulta)
    });
}
/*______________consulta o saldo real dos produtos devolvendo todos os valores______________*/
function queryProd(con, vendas, estoque, publico) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            con.query(`
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
                          `, (err, response) => {
                if (err)
                    reject(err);
                else {
                    resolve(response);
                }
                // res.json(response);  
            });
        });
    });
}
//______update nos saldos//______
function updateProd(con, estoque, saldo, sku) {
    let sql = `
                      UPDATE ${estoque}.prod_saldo
                      SET ESTOQUE=${saldo}
                      WHERE SKU= '${sku}';`;
    con.query(sql, (err, response) => {
        console.log(`produto ${sku} atualizado saldo:${saldo}`);
    });
}
