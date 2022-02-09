const items = document.getElementsByClassName("class");
for (const item of items) {
  item.addEventListener("click", function (event) {
    //   First Way:
    // document.getElementById("list_con").removeChild(item);

    // Second Way:
    event.target.parentNode.removeChild(event.target);
  });
}

document.getElementById("addBtn").addEventListener("click", function(){
    const li = document.createElement("li");
    li.innerText = "You Have come here to Die :G"
    li.classList = "class"
    const ul = document.getElementById("list_con");
    ul.appendChild(li);

    // To Remove Newly Added List Item 
    const items = document.getElementsByClassName("class");
    for (const item of items) {
      item.addEventListener("click", function (event) {
        //   First Way:
        // document.getElementById("list_con").removeChild(item);

        // Second Way:
        event.target.parentNode.removeChild(event.target)
      });
    }
})
