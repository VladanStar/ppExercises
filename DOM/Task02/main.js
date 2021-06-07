function openPresent() {
  var image = document.querySelector('img');
 //var image = event.currentTarget;

  image.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqgzQjcRwQO-814lDazPhDD16usivkBRJli1hktMKottIDkXVyFYqnVagRRevJ4zXjgo&usqp=CAU';
  image.removeEventListener('click', openPresent);
  const title = document.querySelector('h1');
  title.textContent = 'Horay';
  image.removeEventListener('click',openPresent);
}
var image = document.querySelector('img');
image.addEventListener('click', openPresent);
