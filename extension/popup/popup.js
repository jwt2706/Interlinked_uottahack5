let numOfComments = 0;

// chrome.tabs.getSelected(null,function(tab) {
//     var tablink = tab.url;
// });
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
    function(tabs){
        fetch('http://localhost:3000/comments/?website='+tabs[0].url).then(r => r.text()).then(result => {
        document.getElementById("num").innerHTML = result
        })
        console.log(result)

        contentStr = "";
        
        result.forEach(function(o){
            contentStr += "<div>"+ o.name +", id "+ o.id +"</div>";
        });
    // alert(tabs[0].url);
   }
);


// contentStr = "";

// data.forEach(function(o){
//     contentStr += "<div>"+ o.name +", id "+ o.id +"</div>";
// });

// alert('http://localhost:3000/comments/?website='+window.location.toString())
// fetch('http://localhost:3000/comments/?website='+tabs[0].url).then(r => r.text()).then(result => {
//     document.getElementById("num").innerHTML = result
// })

for (let i=0;i<4;i++) {
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

