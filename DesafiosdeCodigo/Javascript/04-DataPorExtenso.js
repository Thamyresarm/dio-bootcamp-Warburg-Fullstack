let data = gets();
let dataSplit = data.split('/');

const mes = mesExtenso(dataSplit[1]);

print(dataSplit[0] + " de " + mes + " de " + dataSplit[2])

function mesExtenso(mes){
  switch (mes) {
    
    case "01": return "Janeiro";
    case "02": return "Fevereiro";
    case "03": return "Março";
    case "04": return "Abril";
    case "05": return "Maio";
    case "06": return "Junho";
    case "07": return "Julho";
    case "08": return "Agosto";
    case "09": return "Setembro";
    case "10": return "Outubro";
    case "11": return "Novembro";
    case "12": return "Dezembro";
  }
}