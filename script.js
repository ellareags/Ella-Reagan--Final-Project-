const blogEntry = document.getElementsByClassName('entry')
const moreButton = document.getElementsByClassName('more')
const lessButton = document.getElementsByClassName('less')

for (let i = 0; i < blogEntry.length; i++) {
  moreButton[i].addEventListener('click', function() {
    blogEntry[i].style.height = 'auto'
    moreButton[i].style.display = 'none'
    lessButton[i].style.display = 'inline-block'
  })

  lessButton[i].addEventListener('click', function() {
    blogEntry[i].style.height = '15vh'
    moreButton[i].style.display = 'inline-block'
    lessButton[i].style.display = 'none'
  })
}