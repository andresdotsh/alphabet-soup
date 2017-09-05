(function (doc) {
  const num = 20;
  const wordsArr = [];
  const soup = doc.getElementById('my-table');
  const wordInput = doc.getElementById('in-word');
  const mergeButton = doc.getElementById('merge-words');

  function generateLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function drawTable(table, size) {
    for (let x = 0; x < size; x += 1) {
      const row = table.insertRow(x);
      for (let y = 0; y < size; y += 1) {
        const cell = row.insertCell(y);
        cell.innerHTML = generateLetter();
      }
    }
  }

  function addWord(list, word) {
    const li = doc.createElement('li');
    const text = doc.createTextNode(word);
    li.appendChild(text);
    list.appendChild(li);
  }

  function putWords(word) {
    const wordLength = word.length;
    let arrPos = [];
    let keepWhile = true;

    while (keepWhile) {
      const direction = Math.floor(Math.random() * 8) + 0;
      let posX = Math.floor(Math.random() * num) + 0;
      let posY = Math.floor(Math.random() * num) + 0;
      let canIn = false;
      let count = 0;
      arrPos = [];

      for (let i = 0; i < wordLength; i += 1) {
        switch (direction) {
          case 0:
            if (typeof soup.rows[posX] !== 'undefined' && typeof soup.rows[posX].cells[posY] !== 'undefined') {
              arrPos.push(`${posX},${posY}`);
              count += 1;
              posX -= 1;
            }
            break;
          case 1:
            if (typeof soup.rows[posX] !== 'undefined' && typeof soup.rows[posX].cells[posY] !== 'undefined') {
              arrPos.push(`${posX},${posY}`);
              count += 1;
              posX -= 1;
              posY += 1;
            }
            break;
          case 2:
            if (typeof soup.rows[posX] !== 'undefined' && typeof soup.rows[posX].cells[posY] !== 'undefined') {
              arrPos.push(`${posX},${posY}`);
              count += 1;
              posY += 1;
            }
            break;
          case 3:
            if (typeof soup.rows[posX] !== 'undefined' && typeof soup.rows[posX].cells[posY] !== 'undefined') {
              arrPos.push(`${posX},${posY}`);
              count += 1;
              posX += 1;
              posY += 1;
            }
            break;
          case 4:
            if (typeof soup.rows[posX] !== 'undefined' && typeof soup.rows[posX].cells[posY] !== 'undefined') {
              arrPos.push(`${posX},${posY}`);
              count += 1;
              posX += 1;
            }
            break;
          case 5:
            if (typeof soup.rows[posX] !== 'undefined' && typeof soup.rows[posX].cells[posY] !== 'undefined') {
              arrPos.push(`${posX},${posY}`);
              count += 1;
              posX += 1;
              posY -= 1;
            }
            break;
          case 6:
            if (typeof soup.rows[posX] !== 'undefined' && typeof soup.rows[posX].cells[posY] !== 'undefined') {
              arrPos.push(`${posX},${posY}`);
              count += 1;
              posY -= 1;
            }
            break;
          case 7:
            if (typeof soup.rows[posX] !== 'undefined' && typeof soup.rows[posX].cells[posY] !== 'undefined') {
              arrPos.push(`${posX},${posY}`);
              count += 1;
              posX -= 1;
              posY -= 1;
            }
            break;
          default:
            break;
        }
      }

      if (count === wordLength) canIn = true;
      if (canIn) keepWhile = false;
    }

    arrPos.forEach((posXY, ind) => {
      const x = posXY.split(',')[0];
      const y = posXY.split(',')[1];
      soup.rows[x].cells[y].innerHTML = word.charAt(ind);
      soup.rows[x].cells[y].className = 'visible';
    });
  }

  wordInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      const word = wordInput.value.toUpperCase();
      wordsArr.push(word);
      addWord(doc.getElementById('my-list'), word);
      wordInput.value = '';
      wordInput.focus();
    }
  });

  mergeButton.addEventListener('click', () => {
    wordInput.disabled = true;
    mergeButton.disabled = true;
    wordsArr.forEach(putWords);
  });

  drawTable(soup, num);
  wordInput.setAttribute('maxlength', num);
  wordInput.focus();
})(document);
