var win = window.open("", "", "width=300,height=200");

 win.document.write("typing message");

setTimeout(function() {
    win.close();}, 5000);