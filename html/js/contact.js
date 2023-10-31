// let h2Element = document.getElementById("h2");
// let icon = document.getElementById("icon");
// let count =0;

// function like(){
//        if(icon.classList.toggle("active")){
//               count = 1
//        }
//        else{
//               count = 0
//        }
//        h2Element.innerText =count;
// }
let likeCount = 0;
let dislikeCount = 0;

function handleLike() {
  likeCount++;
  document.getElementById('likeCount').textContent = likeCount;
}

function handleDislike() {
  dislikeCount++;
  document.getElementById('dislikeCount').textContent = dislikeCount;
}
