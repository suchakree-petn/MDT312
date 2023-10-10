var postCount = 0;
function postFunction() {

    var text = document.getElementById("text1").value;
    if (text == "") {
        alert("Please fill in text box!");
    }
    if (postCount == 0 && text != "") {

        var paragraph = document.createElement("p");
        paragraph.textContent = text;

        var topic1Div = document.getElementById("topic1");
        topic1Div.appendChild(paragraph);
        postCount++;
    } else if (postCount == 1 && text != "") {

        var paragraph = document.createElement("p");
        paragraph.textContent = text;

        var topic1Div = document.getElementById("comment1");
        topic1Div.appendChild(paragraph);
        postCount++;
    } else if (postCount == 2 && text != "") {

        var paragraph = document.createElement("p");
        paragraph.textContent = text;

        var topic1Div = document.getElementById("comment2");
        topic1Div.appendChild(paragraph);
        postCount++;
    }
    document.getElementById("text1").value = "";
}

function clearFunction() {
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
    postCount = 0;
}