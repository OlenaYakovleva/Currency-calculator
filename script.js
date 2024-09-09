const currencies = {
    USD: {
        "buy": 40.85,
        "sell": 41.32
    },
    EUR: {
        "buy": 45.88,
        "sell": 45.90
    },
    PLN: {
        "buy": 3.89,
        "sell": 3.90
    }

}
// // // if i want the curencies are added automatically i use this:
document.body.addEventListener("load", initialize);

function initialize() {
    let tbl = document.getElementById("tbl");
    let from = document.getElementById("from");
    let to = document.getElementById("to");
    Object.keys(currencies).forEach(function (key, index) {
        from.add(new Option(key.key)); //kluch i text
        to.add(new Option(key, key));



        // let buy = currencies[key].buy;
        // let sell = currencies[key].sell;
        // let tr =
        //     `<tr>
        //     <td><img onclick="select(`${key}`);" src ="img/${key}.png"</td>
        //     <td>${key}</td>
        //     <td>${buy}</td>
        //     <td>${sell}</td>
        // </tr>`;
        // tbl.innerHTML += tr;
    }

    );
}




// console.log(currencies["USD"].sell);
document.getElementById("convert").addEventListener("click", convert);

function convert() {

    let sum = parseFloat(document.getElementById("sum").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (from === to) {
        alert("Please select different currencies");
        document.getElementById("result").value = sum + " " + to;
        return;
    } else if (from == "UAH") {
        sum = (sum / currencies[to].sell).toFixed(2);
    } else if (to === "UAH") {
        sum = (sum * currencies[to].buy).toFixed(2);
    } else {
        sum = (sum * currencies[from].buy).toFixed(2);
        sum = (sum / currencies[to].sell).toFixed(2);
    }
    document.getElementById("result").value = sum + " " + to;




}



