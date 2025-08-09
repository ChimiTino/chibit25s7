// Show/hide comments button
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.getElementById('comment-wrapper');

commentWrapper.hidden = true;

showHideBtn.addEventListener('click', () => {
  const expanded = showHideBtn.getAttribute('aria-expanded') === 'true';
  showHideBtn.setAttribute('aria-expanded', String(!expanded));
  showHideBtn.textContent = expanded ? 'Show comments' : 'Hide comments';
  commentWrapper.hidden = expanded;
});

// Audio transcript toggle
const transcriptToggleBtn = document.getElementById('transcript-toggle');
const transcriptSection = document.getElementById('transcript-text');

transcriptToggleBtn.addEventListener('click', () => {
  const expanded = transcriptToggleBtn.getAttribute('aria-expanded') === 'true';
  transcriptToggleBtn.setAttribute('aria-expanded', String(!expanded));
  transcriptToggleBtn.textContent = expanded ? 'Show transcript' : 'Hide transcript';
  transcriptSection.hidden = expanded;
});

// Comment form submit
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', e => {
  e.preventDefault();
  submitComment();
});

function submitComment() {
  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();

  if (!nameValue || !commentValue) {
    alert('Please enter both your name and comment.');
    return;
  }

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  // Add screen-reader-only labels to the new comments
  const nameSpan = document.createElement('span');
  nameSpan.className = 'sr-only';
  nameSpan.textContent = 'Author: ';
  namePara.appendChild(nameSpan);
  namePara.appendChild(document.createTextNode(nameValue));

  const commentSpan = document.createElement('span');
  commentSpan.className = 'sr-only';
  commentSpan.textContent = 'Comment: ';
  commentPara.appendChild(commentSpan);
  commentPara.appendChild(document.createTextNode(commentValue));

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  nameField.value = '';
  commentField.value = '';
}
