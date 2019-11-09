module.exports = (descricao)=>{
    switch (descricao) {
        case 'Suprema Delivery':
        case 'Aiqfome Ltda':
        case 'Trovao Burger e Beer':
        case 'Officina Bar':
        case 'Zazen Gastrobar':
            return 'Des Adc Lazer Restaurantes/bares';
        case 'Churrascaria Querencia':
            return 'Des Var Alimentação Restaurantes';
        case 'Amazon Web Services':
        case 'IOF de "Amazon Web Services"':
            return 'Des Var Onlyus';
        case 'Italo Supermercados':
        case 'Pag*Italosupermercado':
        case 'No Ponto Supermercado':
        case 'No Ponto Supermercados':
        case 'Shb Comercio Industr':
        case 'Brf':
        case 'Supermercado Zip':
        case 'J. Favin Cia Ltda.':
        case 'Fratelli Massas':
        case 'Supermercado Brasao':
        case 'Super Muffato Comercia':
        case 'Supermercado Rodrigues':
            return 'Des Var Supermercado';
        case 'Academia Boa Forma e S':
        case 'Academia Sport Fit':
            return 'Des Fix Academia';
        case 'Posto P Sao Francisco':
        case 'Posto Delta Dois Vizin':
        case 'Posto Pioneiro':
        case 'Posto guarapuava':
            return 'Des Var Combustível';
        case 'Brastemp':
            return 'Des Ext Casa';
        case 'Farmacia Sao Joao Sul':
        case 'Thiago Farma Center':
        case 'Melotto & Cichella':
            return 'Des Ext Medicamentos';
        case 'Thermas Sulina':
            return 'Des Adc Lazer';
        case 'Itunes.Com/Bill':
            return 'Des Fix Serviços Online';
        case 'Pagamento recebido':
            return 'Pagamento Cartão';
    }
    if (descricao.startsWith("Picpay")) {
    	if (descricao.endsWith("Leonildoa") || descricao.endsWith("Gisieliol") || descricao.endsWith("Pgtoconta")) {
    		return 'Des Var Picpay';
    	} else if (descricao.endsWith("Steam")) {
    		return 'Des Fix Serviços Online';
    	} else if (descricao.endsWith("Recargace")) {
    		return 'Des Var Celular';
    	}
    }
    return descricao+' NÃO CATEGORIZADO';
    
};