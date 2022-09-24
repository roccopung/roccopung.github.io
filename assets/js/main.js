
//draggable elements

let items = document.getElementsByClassName("draggable-item");

// add class .draggable to each item
for (var i = 0; i < items.length; i++) {
  items[i].classList.add("draggable");
  items[i].children[0].addEventListener('click',function(e){
    if(drag){
      drag = false;
      e.preventDefault()
    }
  });
}

var drag = false;

// target elements with the "draggable" class
interact('.draggable')

  .draggable({
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: false,
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
      ondragleave: dragLeaveListener
    }
  })


function dragLeaveListener(event) {
    // remove the drop feedback style
    event.target.preventDefault;
    event.relatedTarget.preventDefault;
  }


function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)

}
// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener
