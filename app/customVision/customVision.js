function sendToAzure() {
    const url = document.getElementById("url").value;

    $.ajax({
        url: "https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/c2cf7a0b-eebd-406a-a30d-331e2f36b379/detect/iterations/Iteration2/url",      
        beforeSend: function(keysOfCustomVision){
            keysOfCustomVision.setRequestHeader("Content-Type","application/json");
            keysOfCustomVision.setRequestHeader("Prediction-key","29630d4d71044b4fb7779d173ea3f5f3");
        },
        type: "POST",
        data: '{"Url":"' + url + '"}',
    })    
    .done(function(data) {
        // Este algortimo obtiene la predicción mayor de todos los tags
        var majorElement = "";
        var majorPrediction = 0;
        data.predictions.forEach(element => {
            if (majorPrediction < element.probability) {
                majorPrediction = element.probability
                majorElement = element.tagName
            }
        });

        const prediction = round(majorPrediction * 100)

        switch(majorElement) {
            case "turtle":
                document.getElementById("result_space").innerHTML = "Tortuga sana y salva! con una probabilidad de " + prediction + " %"
                break
            case "glass":
                document.getElementById("result_space").innerHTML = "Tortuga en peligro ⚠, hay bolsas de plastico en su hábitat con una probabilidad de " + prediction + "%"
                break
            case "network":
                document.getElementById("result_space").innerHTML = "Tortuga en peligro ⚠, esta envuelta en redes con una probabilidad de " + prediction + "%"
                break
            case "plastic":
                document.getElementById("result_space").innerHTML = "Tortuga en peligro ⚠, hay mucha basura en su hábitat con una probabilidad de " + prediction + "%"
                break
            case "bootle":
                document.getElementById("result_space").innerHTML = "Tortuga en peligro ⚠, hay botellas de plastico en su hábitat con una probabilidad de " + prediction + "%"
                break
            default:
                document.getElementById("result_space").innerHTML = "Lo siento, no sé que es eso :(, Soy un prototipo que esta a prueba y aún no se identificar todos los obetos."
        }
    })
    .fail(function() {
        alert("error");
    });
}

function round(num, decimales = 2) {
    var signo = (num >= 0 ? 1 : -1);
    num = num * signo;
    if (decimales === 0) 
        return signo * Math.round(num);
    num = num.toString().split('e');
    num = Math.round(+(num[0] + 'e' + (num[1] ? (+num[1] + decimales) : decimales)));
    num = num.toString().split('e');
    return signo * (num[0] + 'e' + (num[1] ? (+num[1] - decimales) : -decimales));
}