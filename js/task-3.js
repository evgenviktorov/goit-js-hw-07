const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const clearValue = input.value.replace(/\s+/g, ' ').trim();
  output.textContent = clearValue === '' ? 'Anonymous' : clearValue;
});
