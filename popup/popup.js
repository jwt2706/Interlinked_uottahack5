let numOfComments = 0;
document.getElementById("num").innerHTML = "There are "+numOfComments+" comments on this page.";

//const para = document.createElement("p");
//para.innerHTML = "This is a paragraph.";
//document.getElementById("comments").appendChild(para);

for (let i=0;i<5;i++) {
    window["currentMsg"]=i;
    currentMsg = document.createElement("p");
    currentMsg.innerHTML = "<strong>"+i+". This is a paragraph.";
    document.getElementById("comments").appendChild(currentMsg);
}