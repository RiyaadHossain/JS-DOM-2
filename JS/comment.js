// ############# Add Dynamic Comment #############

// 1. Set the Button
document.getElementById("comment_btn").addEventListener("click", function () {
  //   1. Get the Comment Container
  const cmtContianer = document.getElementById("comment_container");

  //   2. Get the Paragraph
  const p = document.createElement("p");

  //   3.Get the Comment Box
  const myComment = document.getElementById("text_area");

  //   4. Input Comment inside the Paragraph
  p.innerText = myComment.value;

  //   5. Append the Paragraph into the Container
  cmtContianer.appendChild(p);

  //   6. Emptify the Comment Box
  myComment.value = "";
});
