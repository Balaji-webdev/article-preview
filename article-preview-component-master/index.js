
const shareButton = document.getElementById('sharebutton');
const activeToggle = document.getElementById('active-toggle-div-id');
const triangleDown = document.getElementById('triangle-down')

shareButton.addEventListener('click', () => {
   if (activeToggle.style.visibility == 'visible') {
      activeToggle.style.visibility = 'hidden'
   }
   else {
      activeToggle.style.visibility = 'visible'
   }
   if (triangleDown.style.visibility == 'visible') {
      triangleDown.style.visibility = 'hidden'
   }
   else {
      triangleDown.style.visibility = 'visible'
   }
})