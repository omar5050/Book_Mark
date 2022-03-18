// select input kolo
var webName = document.getElementById("webName");
var webUrl = document.getElementById("webUrl");
var displayWeb = document.getElementById("show-res");
var mainBtn = document.getElementById("mainBtn");
var takeIndex;
var searchBtn = document.getElementById("searchBtn");
var cancelBtn = document.getElementById('cancelBtn')
// array store data
var arrWebsite;

if (localStorage.getItem("myWebsite") != null) {
  arrWebsite = JSON.parse(localStorage.getItem(`myWebsite`));
  displayWebsite(arrWebsite);
} else {
  arrWebsite = [];
}

/************************************ */
//Start Point callFuncion
mainBtn.addEventListener("click", function () {
  if (mainBtn.innerHTML == "Submit") {
    addWebsite();
  } else if (mainBtn.innerHTML == "Update") {
    actionUpdate(takeIndex);
  }
});

//call SearchFunction
searchBtn.onkeyup = function () {
  searchWebByName(this.value)
};


//call CancelFunction
cancelBtn.onclick = function(){
  cancelValue();
}

// functions
// 1- addFunction

function addWebsite() {
  if (isValidUrl()) {
    var websites = {
      webName: webName.value,
      webUrl: webUrl.value,
    };
    arrWebsite.push(websites);

    localStorage.setItem("myWebsite", JSON.stringify(arrWebsite));
    displayWebsite(arrWebsite);
  } else {
    alert("URL Not Valid");
  }
}

// 2- displayFunction
function displayWebsite(arrWebsite) {
  var cartona = " ";

  for (var i = 0; i < arrWebsite.length; i++) {
    cartona += `  
        <div class="d-flex py-3" id="${arrWebsite[i].webName}">
            <h3 class="w-25 ">${arrWebsite[i].webName}</h3>
            <a class="btn btn-primary" href="${arrWebsite[i].webUrl}" target="_blank">visit</a>
            <button class="btn btn-danger mx-3" onclick="deleteWebsite(${i})">Delete</button>
            <button class="btn btn-warning" onclick="showUpdate(${i})">Update</button>
        </div>`;
  }
  displayWeb.innerHTML = cartona;
}

// 3-deleteFunction
function deleteWebsite(index) {
  arrWebsite.splice(index, 1);
  localStorage.setItem("myWebsite", JSON.stringify(arrWebsite));
  displayWebsite(arrWebsite);
}

// 4-updatesFunction

//pa5d data mn array we a5znha fe value
function showUpdate(index) {
  webName.value = arrWebsite[index].webName;
  webUrl.value = arrWebsite[index].webUrl;
  mainBtn.innerHTML = "Update";
  takeIndex = index;
}

function actionUpdate(index) {
  if (isValidUrl()) {
    arrWebsite[index].webName = webName.value;
    arrWebsite[index].webUrl = webUrl.value;
    localStorage.setItem("myWebsite", JSON.stringify(arrWebsite));
    displayWebsite(arrWebsite);
    mainBtn.innerHTML = "Submit";
  } else {
    alert("Url Not Valid");
  }
}

// 5-search Function

function searchWebByName(term)
{
  var arrSearch = [];
  
  for(var i=0; i<arrWebsite.length; i++)
  {
    if(arrWebsite[i].webName.toLowerCase().includes(term.toLowerCase())){
      arrSearch.push(arrWebsite[i])
      console.log(arrSearch)
    }
  }
  displayWebsite(arrSearch);
}


// 6-clearForm
function cancelValue(){
  webName.value = " ";
  webUrl.value = " ";
}

/**************************** */

//Valdation Function

function isValidUrl() {
  var regex =
    /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/;
  if (regex.test(webUrl.value)) {
    // console.log('true')
    return true;
  } else {
    // console.log(webUrl.value)
    return false;
  }
}






// var link = document.getElementById('link');


// console.log(link.getAttribute('href'));
// console.log(link.href);
// console.log(link.getAttribute('href'))
// console.log(link.hasAttribute('href'))
// console.log(link.setAttribute())



/**
 * So, DOM properties and methods behave just like those of regular JavaScript objects:
  They can have any value.
  They are case-sensitive (write elem.nodeType, not elem.NoDeTyPe).
 */



  /**
   * HTML attributes have the following features:

    Their name is case-insensitive (id is same as ID).
    Their values are always strings.
   */