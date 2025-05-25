document.addEventListener('DOMContentLoaded', function () {
  const display = document.querySelector('.display');
  const buttons = document.querySelectorAll('.btn');

  let currentInput = '';
  let resetDisplay = false;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value') || button.textContent;

      if (value === '=') {
        try {
          currentInput = eval(currentInput.replace(/×/g, '*').replace(/÷/g, '/'));
          display.textContent = currentInput;
        } catch {
          display.textContent = 'Error';
          currentInput = '';
        }
        resetDisplay = true;
      } else if (value === 'C') {
        currentInput = '';
        display.textContent = '0';
      } else if (value === 'back') {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || '0';
      } else if (value === '%') {
        try {
          currentInput = (parseFloat(currentInput) / 100).toString();
          display.textContent = currentInput;
        } catch {
          display.textContent = 'Error';
          currentInput = '';
        }
      } else {
        if (resetDisplay) {
          currentInput = '';
          resetDisplay = false;
        }
        currentInput += value;
        display.textContent = currentInput;
      }
    });
  });
});
