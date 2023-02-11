let numOfComments = 0;
document.getElementById("num").innerHTML = "There are "+numOfComments+" comments on this page.";

for (let i=0;i<numOfComments;i++) {
    window["currentMsg"]=i;
    currentMsg = document.createElement("p");
    currentMsg.innerHTML = "<strong>"+i+". This is a paragraph.";
    document.getElementById("comments").appendChild(currentMsg);
}