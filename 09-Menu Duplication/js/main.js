function duplicateMenu () {
 //Get all of the anchor elements from the top menu
 let topList = document.querySelectorAll('ul#primaryNavigation li a');
 console.log(topList);

 //create the new list items for the bottom of the page
 let newList = document.createElement('ul');

 topList.forEach(menuItem => {
     let newLi = document.createElement('li');
     let newLink = document.createElement('a');

     newLink.setAttribute('href', menuItem.getAttribute('href'));

     newLi.appendChild(newLink);

     document.querySelector("#smallNavArea").appendChild(newList);
     newList.appendChild(newLi);


      console.log(menuItem.text);
      newLink.textContent = menuItem.innerText;

     //copy the textcontent from upper menu to the new menu
     //append children to make them appear in the dom
 })
}

 duplicateMenu(); 