document.querySelectorAll('.faq_question').forEach(question => {
  question.addEventListener('click', () => {
    const faq = question.parentElement;
    faq.classList.toggle('active');
  });
});
