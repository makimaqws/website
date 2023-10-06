import { ref, set, get, update, DataSnapshot } from 'firebase/database';

get(ref(db, "products")).then((snap0) => {
    if (snap0.exists()) {
      snap0.forEach((snap1) => {
        var contInnerHtml = "<img src=\"src/img/preview.jpg\" alt=\"Product preview\"><p>" + snap1.key + "</p>";
        addElement(document.getElementById("content"), "div", contInnerHtml, "product-cont", snap1.child("id").val());
      });
    } else {
      console.log("no data");
    }
  });
  
  function addElement(elNode, elTag, elInnerHtml, elClass, elId) {
    var element = document.createElement(elTag);
    element.innerHTML = elInnerHtml;
    if (elClass != null) element.className = elClass;
    if (elId != null) element.setAttribute("id", elId);
    elNode.appendChild(element);
  }