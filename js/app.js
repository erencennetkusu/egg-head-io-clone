document.getElementById("bnt").onclick = function (){

    var k = document.getElementById("acn").style.display;

    if (k == "none") {
        
        document.getElementById("acn").style.display = "block";
    } else {
        
        document.getElementById("acn").style.display = "none";
    }
}



function nav(){
    

    

    if (document.getElementById("nv").style.display == "none") {
        
        document.getElementById("nv").style.display = "block";
    } else {
        
        document.getElementById("nv").style.display = "none";
    }
}


document.getElementById("mn").onclick = function () {
    
    document.getElementById("acn").style.display = "none";
   

}

