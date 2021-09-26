const dispData =  (values)  => {
    const tbody = document.getElementById("tbody");
    const tr1 = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerHTML = values[0].country.country_id;
    const td2 = document.createElement("td");
    td2.innerHTML = values[0].country.probability;
    tr1.append(td1,td2);
    const tr2 = document.createElement("tr");
    const td3 = document.createElement("td");
    td3.innerHTML = values.data[1].country.country_id;
    const td4 = document.createElement("td");
    td4.innerHTML = values.data[1].country.probability;
    tr2.append(td3,td4);
    tbody.append(tr1,tr2);
}


document.onload = function (){
var button1 = document.getElementById("#btn");
if(button1){
button1.addEventListener('click', getResponse = async () => {
    try{
        const word = document.getElementById("form1").innerHTML;
        alert(word);
        const resp = await fetch("https://api.nationalize.io/?name={word}#");
        const values = await resp.json();
        dispData(values);
        }
        catch(error){
            console.log(error)
        }
},false);
}
}

