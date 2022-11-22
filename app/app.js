console.log("Welcome");
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function () {
    let addTxt = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);

    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = " ";
    // console.log(notesObj);
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
     <div class="noteCards my-4 mx-2 card" style="width: 18rem;">

     <div class="  card-body">
         <h5 class="card-title">Notes ${index + 1}</h5>
         <p class="card-text">${element}</p>

         <button id= "${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
     </div>
 </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note " section`
    }
}
// function to deleteNote
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    } else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// search tag
 
let search= document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal = search.value;
  //  console.log('Input Event', inputVal);
  let noteCards = document.getElementsByClassName('noteCards');
  Array.from(noteCards).forEach(function(element){
      let cardTxt = element.getElementsByTagName("p")[0].innerText;
      if(cardTxt.includes(inputVal)){
          element.style.display = "block";
      }
      else{
          element.style.display = "none";
      }
  })
})