const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
  const sanitizedValue = inputRef.value.replace(/\s+/g, ' ').trim();
  outputRef.textContent = sanitizedValue === '' ? 'Anonymous' : sanitizedValue;
});
