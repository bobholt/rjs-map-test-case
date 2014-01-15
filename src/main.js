require(['tmpl!src/templates/template'], function(template) {

  var frame = document.getElementById('frame');

  frame.innerHTML = template();

});