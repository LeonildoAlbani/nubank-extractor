module.exports = (descricao)=>{
    switch (descricao) {
        case 'Suprema Delivery':
        case 'Aiqfome Ltda':
        case 'Trovao Burger e Beer':
        case 'Officina Bar':
        case 'Zazen Gastrobar':
        case 'Soberano\' S Burger':
        case 'Condado Food Park':
        case 'Milk Creamery':
        case 'Xarotto Hamburgueria':
        case 'Seu Giocondo Fogo e Ba':
        case 'Iris Pay':
        case 'R M Paini e Cia':
        case 'Fronttoni':
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
        case 'Italo Supermercados Dv':
        case 'Italo Supermercados Cv':
            return 'Des Var Supermercado';
        case 'Academia Boa Forma e S':
        case 'Academia Sport Fit':
        case 'Boa Forma':
            return 'Des Fix Academia';
        case 'Posto P Sao Francisco':
        case 'Posto Delta Dois Vizin':
        case 'Posto Delta Francisco':
        case 'Posto Pioneiro':
        case 'Posto guarapuava':
            return 'Des Var Combustível';
        case 'Geifi Materiais de Co':
            return 'Des Ext Casa';
        case 'Farmacia Sao Joao Sul':
        case 'Thiago Farma Center':
        case 'Melotto & Cichella':
        case 'Melotto & Cichella -':
        case 'Farmacia Mais Saud':
        case 'Poupalar Dois Vizinhos':
        case 'Sao Joao Farmacias':
            return 'Des Ext Medicamentos';
        case 'Thermas Sulina':
            return 'Des Adc Lazer';
        case 'Itunes.Com/Bill':
        case 'Apple.Com/Bi':
        case 'Apple.Com/Bill':
        case 'Amazonprimebr':
        case 'Ebanx*Spotify':
            return 'Des Fix Serviços Online';
        case 'Pagamento recebido':
            return 'Pagamento Cartão';
        case 'Unnik Centro Odontolog':
            return 'Des Ext Dentista';
        case 'Brothers Barbearia':
            return 'Des Var Cabeleireiro/Beleza'
    }
    if (descricao.startsWith("Picpay")) {
        if (descricao.includes("Leonildoa") || descricao.includes("Leoni") 
            || descricao.includes("Gisieliol") || descricao.includes("Gisie") 
            || descricao.includes("Pgtoconta") || descricao.includes("Pagam")
            || descricao.includes("Nupagamentos")) {
    		return 'Des Var Picpay';
    	} else if (descricao.includes("Steam")) {
    		return 'Des Fix Serviços Online';
    	} else if (descricao.includes("Recar")) {
    		return 'Des Var Celular';
    	}
    } else if (descricao.startsWith("Tim*") || descricao.startsWith("Tim Recarga*")
            || descricao.includes("Recarga de celular")) {
        return 'Des Var Celular';
    } else if (descricao.endsWith("Osorveteiro") || descricao.startsWith('Aiqfome*')
            || descricao.includes('Katianesubirai') || descricao.includes('Katiane Subirai')) {
        return 'Des Adc Lazer Restaurantes/bares';
    } else if (descricao.includes('Actio Club')) {
        return 'Des Fix Academia';
    } else if (descricao.includes('Alura ') || descricao.includes('Wise Up Online')) {
        return 'Des Fix Curso'
    } else if (descricao.includes('Melotto & Cichella') || descricao.includes('Farmacia e Drogaria')) {
        return 'Des Ext Medicamentos';
    } else if (descricao.includes('Turatto Auto Center') || descricao.includes('Auto Pecas Turatto')) {
        return 'Des Ext Carro';
    } else if (descricao.includes('Mercadolivre')) {
        return 'Des Var Mercado Livre';
    } else if (descricao.includes('hbomaxcom')) {
        return 'Des Fix Serviços Online';
    } else if (descricao.startsWith('Brastemp')) {
        return 'Des Ext Casa';
    }
    return descricao+' NÃO CATEGORIZADO';
    
};