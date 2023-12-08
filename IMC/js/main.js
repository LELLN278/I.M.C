
const formImc = document.querySelector('.formImc');

formImc.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const inputAltura = evento.target.querySelector('.altura');
    const inputPeso = evento.target.querySelector('.peso');

    const altura = parseFloat(inputAltura.value.replace(',', '.'));
    const peso = Number(inputPeso.value);

    if (!peso || peso >595 || peso < 2) {
        setResultado('Peso Inválido', false);
        return;
    }
    if (!altura || altura > 2.5 || altura < 0.54) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc =  getNivelImc(imc);
    const msg = `Seu IMC é ${imc} ${nivelImc}`;

    setResultado(msg, true);
}); 

    function getImc(peso, altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2);    }

    function getNivelImc(imc) {
        const nivel = ['MAGREZA)', '(NORMAL)', '(SOBREPESO)', '(OBESIDADE)', '(OBRESIDADE GRAVE)'];

        if (imc > 39.9) return nivel[4];
        if (imc >= 30) return nivel[3];
        if (imc >= 25) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    };


function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('p-resultado')
    }else{
        p.classList.add('p-wrong')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);

};