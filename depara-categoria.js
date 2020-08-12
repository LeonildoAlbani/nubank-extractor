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
        case 'Center Vizi Supermerca':
        case 'Pag*Italosupermercado':
        case 'No Ponto Supermercado':
        case 'No Ponto Supermecado':
        case 'No Ponto Supermercados':
        case 'Shb Comercio Industr':
        case 'Brf':
        case 'Supermercado Zip':
        case 'J. Favin Cia Ltda.':
        case 'Fratelli Massas':
        case 'Supermercado Brasao':
        case 'Super Muffato Comercia':
        case 'Supermercado Rodrigues':
        case 'Ebanx *Cestou':
        case 'Mercado Felini':
        case 'Manfroi Supermercados':
            return 'Des Var Supermercado';
        case 'Academia Boa Forma e S':
        case 'Academia Sport Fit':
            return 'Des Fix Academia';
        case 'Posto P Sao Francisco':
        case 'Posto Delta Dois Vizin':
        case 'Posto Delta Francisco':
        case 'Posto Pioneiro':
        case 'Posto guarapuava':
            return 'Des Var Combustível';
        case 'Brastemp':
            return 'Des Ext Casa';
        case 'Farmacia Sao Joao Sul':
        case 'Thiago Farma Center':
        case 'Melotto & Cichella':
        case 'Melotto & Cichella -':
        case 'Farmacia Mais Saud':
            return 'Des Ext Medicamentos';
        case 'Thermas Sulina':
            return 'Des Adc Lazer';
        case 'Itunes.Com/Bill':
        case 'Apple.Com/Bi':
        case 'Apple.Com/Bill':
            return 'Des Fix Serviços Online';
        case 'Pagamento recebido':
            return 'Pagamento Cartão';
        case 'Unnik Centro Odontolog':
            return 'Des Ext Dentista';
        case 'Turatto Auto Center':
            return 'Des Ext Carro';
    }
    if (descricao.startsWith("Picpay")) {
        if (descricao.includes("Leonildoa") || descricao.includes("Leoni") 
            || descricao.includes("Gisieliol") || descricao.includes("Gisie") 
            || descricao.includes("Pgtoconta") || descricao.includes("Pagam")) {
    		return 'Des Var Picpay';
    	} else if (descricao.includes("Steam")) {
    		return 'Des Fix Serviços Online';
    	} else if (descricao.includes("Recar")) {
    		return 'Des Var Celular';
    	}
    } else if (descricao.endsWith("Osorveteiro")) {
        return 'Des Adc Lazer Restaurantes/bares';
    } else if (descricao.includes('Actio Club')) {
        return 'Des Fix Academia';
    } else if (descricao.includes('Alura ')) {
        return 'Des Fix Curso'
    } else if (descricao.includes('Melotto & Cichella')) {
        return 'Des Ext Medicamentos';
    }
    return descricao+' NÃO CATEGORIZADO';
    
};