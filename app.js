var fecha = new Date();
var mes = fecha.getMonth();


var imagenes = [
    {
        url:'./img/verano2bn.jpg',
        color:'rgba(228, 192, 60, 0.9)',
        mes: 1
    },
    {
        url:'./img/verano3bn.jpg',
        color:'rgba(228, 172, 60, 0.9)',
        mes: 2
    },
    {
        url:'./img/otoño1bn.jpg',
        color:'rgba(228, 220, 60, 0.9)',
        mes: 3
    },
    {
        url:'./img/otoño2bn.jpg',
        color:'rgba(228, 136, 60, 0.9)',
        mes: 4
    },
    {
        url:'./img/otoño3bn.jpg',
        color:'rgba(157, 64, 33, 0.9)',
        mes: 5
    },
    {
        url:'./img/invierno1bn.jpg',
        color:'rgba(33, 105, 157, 0.9)',
        mes: 6
    },
    {
        url:'./img/invierno2bn.jpg',
        color:'rgba(37, 127, 192, 0.9)',
        mes: 7
    },
    {
        url:'./img/invierno3bn.jpg',
        color:'rgba(41, 155, 236, 0.9)',
        mes: 8
    },
    {
        url:'./img/primavera1bn.jpg',
        color:"rgba(171, 236, 41, 0.9)",
        mes: 9
    },
    {
        url:'./img/primavera2bn.jpg',
        color:'rgba(99, 236, 41, 0.9)',
        mes: 10
    },
    {
        url:'./img/primavera3bn.jpg',
        color:'rgba(41, 236, 64, 0.9)',
        mes: 11
    },
    {
        url:'./img/verano1bn.jpg',
        color:'rgba(244, 252, 24, 0.9)',
        mes: 12
    },
]


for (let i = 0; i < imagenes.length; i++) {

    const numero = imagenes[i].mes;
    
    if (mes == numero ) {
        var fondoImagen = document.body.style.backgroundImage = "url(" + imagenes[numero].url + ")";
        var fondoColor = document.querySelector("#overlay").style.backgroundColor = imagenes[numero].color ;
      }
}



