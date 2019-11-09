const csv = require('csvtojson');
const deparaCategoria = require('./depara-categoria');
const fs = require('fs');

readCsv('./leonildo.csv', './leonildo.txt', 'NuBank Leonildo');

function readCsv (nomeArquivoCsv, nomeArquivoTxt, nomeConta){
    csv()
        .fromFile(nomeArquivoCsv)
        .then((jsonObj)=>{
            let dadosToTxt = '';
            jsonObj.forEach(item => {
                dadosToTxt +=
                    convertDate(item.date)+'\t'+
                    nomeConta+'\t'+
                    deparaCategoria(item.title)+'\t'+
                    item.title+'\t'+
                    ((item.amount * -1) + '').replace(/\./g,',') + '\r\n';
            });
            fs.writeFile(nomeArquivoTxt, dadosToTxt, function(erro) {
                if(erro) {
                    throw erro;
                }
                console.log("Arquivo salvo");
            });
        });
}

function convertDate(date){
    return date.substr(8, 2)+'/'+date.substr(5, 2)+'/'+date.substr(0, 4);
}