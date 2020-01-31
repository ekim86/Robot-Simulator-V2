document.addEventListener("DOMContentLoaded", function(){
  createGrid();
  renderBot(currentPosition);

  const ul = document.getElementById('moves-container');

  document.addEventListener('keydown', function(event) {
    const li = document.createElement('li');
    console.log('created li')
    if (event.key === 'ArrowLeft') {
      li.innerText = 'left';
      ul.append(li);
    } else if (event.key === 'ArrowRight') {
      li.innerText = 'right';
      ul.append(li);
    } else if (event.key === 'ArrowUp') {
      li.innerText = 'up';
      ul.append(li);
    } else if (event.key === 'ArrowDown') {
      li.innerText = 'down';
      ul.append(li);
    }
  });

  const moveButton = document.getElementById('move-button');

  moveButton.addEventListener('click', function(event) {
    let liList = document.querySelector('li');
    move(liList.innerText);
    liList.remove();
    // console.log(liList);

  });
  // console.log()

// when we click the move button it takes the top
// of the li action and passes it through the move
// function and deletes it from the li
  
});
