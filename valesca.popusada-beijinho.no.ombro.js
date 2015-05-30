
var = inimigas = [];
for(var i = 0; i < 1000; i++)
    inimigas[i] = { vida: 200 };

inimigas.forEach(function (inimiga) {
    verVitoria(inimiga);
});

var baterDeFrente = ['tiro', 'porrada', 'bomba'],
    doisPapos = !(cria && fazHistoria);

var me = this;
me.belief = "Deus"
me.shield = me.belief;
me.altura = 10000;
me.audicao--;
me.location = "camarote";

inimigas.forEach(function(inimiga) {
    inimiga.rachar('cara');
    inimiga.show();
    inimiga.latir(10001);
});
 
if (!me.covarde) {
     me.fight(inimigas, baterDeFrente);
}

keepCalm(inimigas).then(deixaDeRecalque);
                 
if (me.pirigueteSensor.sense(inimigas) > me.maxPiriguete) {
    inimigas.forEach(function(inimiga) {
        inimiga.getInveja().then(vaPraPutaQuePariu);
    });
}

var soPra = _.filter(destinatarios, function(quem) {
    return quem.recalquePassaLonge || quem.invejosaDePlantao || quem.fechaComOBonde || quem.temDisposicao;
});

beijinhoNoOmbro(soPra);          

console.log(inimigas)
