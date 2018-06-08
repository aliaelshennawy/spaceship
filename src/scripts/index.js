import ScrollReveal from 'scrollreveal';

const App = {
  init() {
    this.animatePages();
  },
  animatePages() {
    window.sr = ScrollReveal();
    sr.reveal('.content', { duration: 600 });
  }
};

export default App;

document.addEventListener('DOMContentLoaded', App.init());
