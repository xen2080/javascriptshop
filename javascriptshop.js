
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.getElementById('cart-badge');
  const cartCountSpan = document.getElementById('cart-count');
  let cartCount = 0;

  const addBtn = document.querySelector('.cta-add');
  const selectBtn = document.querySelector('.cta-select');

  selectBtn.textContent = 'Remove from cart';
  selectBtn.style.display = 'none';

  function updateBadge() {
    if (cartCount > 0) {
      cartCountSpan.textContent = cartCount;
      cartCountSpan.style.display = 'inline-block';
    } else {
      cartCountSpan.textContent = '';
      cartCountSpan.style.display = 'none';
    }
  }

  function updateRemoveBtn() {
    selectBtn.style.display = cartCount > 0 ? 'inline-block' : 'none';
  }

  addBtn.addEventListener('click', function () {
    cartCount++;
    updateBadge();
    updateRemoveBtn();
  });

  selectBtn.addEventListener('click', function () {
    if (cartCount > 0) {
      cartCount--;
      updateBadge();
      updateRemoveBtn();
    }
  });

  // Initial state
  updateBadge();
  updateRemoveBtn();
});
