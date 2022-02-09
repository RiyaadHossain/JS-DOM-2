// In here, when you fire an event in anywher in the Html Doc it'll start Propagatind from bottom to top. Also You can stop the propagation.


// Get Main Container 
const mainCon = document.getElementById("contianer");
mainCon.addEventListener("click", function(){
    console.log('Main Clicked');
})

// Get Ul Container 
const ul = document.getElementById("list_container");
ul.addEventListener("click", () => {
    console.log('ul Clicked');
})

// Get 2nd List Item 
const li2 = document.getElementById("sec");
li2.addEventListener("click", function (){
    console.log('2nd Li Clicked');
})

// Get 4th List Item 
// ============== stopPropagation() Method ==============
const li3 = document.getElementById("third");
li3.addEventListener("click", (event) => {
  console.log("3th Li clicked");
  event.stopPropagation(); /* It'll stop Bubbling */
})

// ============== stopPropagation() Method ==============


// ============== stopImmediatePropagation() Method ==============
const li4 = document.getElementById("forth");
li4.addEventListener("click", (event) => {
  console.log("4th Li clicked 1x");
  event.stopPropagation(); /* It'll stop Bubbling - it's parent node but not siblings */
   event.stopImmediatePropagation();  /* It'll stop Bubbling Immediately - it's siblings too */
});
li4.addEventListener("click", function (event){
    console.log("4th Li Clicked 2x");
})
li4.addEventListener("click", function (event){
    console.log("4th Li Clicked 3x");
})
li4.addEventListener("click", function (event){
    console.log("4th Li Clicked 4x");
})
// ============== stopImmediatePropagation() Method ^ ==============