let numOfComments = 0;
document.getElementById("num").innerHTML = "There are "+numOfComments+" comments on this page.";

for (let i=0;i<7;i++) {
    window["currentMsg"]=i;
    window["currentMsgCheckbox"]=i+'checkbox';
    window["currentMsgLabel"]=i+'label';
    currentMsg = document.createElement("p");
    currentMsgCheckbox = document.createElement("input");
    currentMsgCheckbox.type = "checkbox";
    currentMsgLabel = document.createElement("label");
    currentMsg.innerHTML = i+1+'. "This is a Comment."';
    currentMsgCheckbox.id = "heart"+i;
    currentMsgLabel.htmlFor = "heart"+i;
    currentMsgLabel.innerHTML = '&#9829';
    document.getElementById("comments").appendChild(currentMsg);
    document.getElementById("comments").appendChild(currentMsgCheckbox);
    document.getElementById("comments").appendChild(currentMsgLabel);
}

