clear();

var data = Array.from(document.querySelectorAll('.row.border'));

var info = data.map(element => {
    let container = element.querySelector('.col-12.col-md')
    let nome = container.querySelector('span:first-child');
    let estilo = container.querySelector('span + span');
    let infosElement = container.querySelector('span + span + span + br + span')
    let infos = infosElement.innerText.split('• •')
    let abvAndIbu = infos[0].split('•')
    let cervejaria = infos[1];
    let horario = infosElement.querySelector('b');
    let display_horario = horario ? horario.innerText : '';
    let retorno = {
        nome: nome.innerText,
        estilo: estilo.innerText,
        cervejaria: cervejaria || '',
        abv: abvAndIbu[0],
        ibu: abvAndIbu[1],
        display_horario: display_horario
    }
    return retorno;
});

var columns = 'Nome|Estilo|Cervejaria|IBU|ABV|Horario\n';


var lines = info.map(cerveja => {
    return `${cerveja.nome}|${cerveja.estilo}|${cerveja.cervejaria}|${cerveja.ibu}|${cerveja.abv}|${cerveja.display_horario}`;   
}).join('\n');

var file = columns + lines;

console.log(file)


//console.log(JSON.stringify(info))
//var exclusivas = info.filter(cerveja => !cerveja.cervejaria)
//console.table(exclusivas)
