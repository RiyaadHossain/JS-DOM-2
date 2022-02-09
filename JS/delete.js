// Delete Input
deleteInput = document.getElementById("delIpt");

// Delete Button
document.getElementById("delBtn").addEventListener("click", function () {
  document.getElementById("delTxt").style.display = "none";
  deleteInput.value = "";
});

// ON Focus in Input Field 
deleteInput.addEventListener("focus", function () {
  deleteInput.style.border = "1px solid red";
  const warnTxt = document.getElementById("warningTxt");
  warnTxt.innerText = "Are You sure to delete this Message";
  warnTxt.style.color = "red";
});


// ON Blur in Input Field 
deleteInput.addEventListener("blur", function () {
  deleteInput.style.border = "1px solid black";
  const warnTxt = document.getElementById("warningTxt");
  warnTxt.innerText = "";
  warnTxt.style.color = "inherit";
});


// ************** Type "Delete" to confirm Delete ************** 
// Key Down Method (not conventional)
deleteInput.addEventListener("keydown", function(event){   
  console.log(event.target.value);
})

// Key Up Method (conventional)
deleteInput.addEventListener("keyup", (event) => {
    if(event.target.value === "Delete"){
        document.getElementById("delBtn").removeAttribute("disabled")
    } else{
        // Cautious: Here you'll need to add to parameter in setAttribute Method. 1st par: attribute Name, 2nd par: Attribute Value
        document.getElementById("delBtn").setAttribute("disabled", true);
    }
})

