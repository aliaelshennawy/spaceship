import $ from 'jquery';
import Aos from 'aos';

const App = {
  init() {
    var AOS = require('aos');
    AOS.init({
      duration: 1200,
      disable: 'mobile',
    });
    $(document).ready(function() {
      $('#menu-icon').on('click', function() {
        console.log('clicked');
        $('.navbar').toggleClass('expand');
        $('html, body').toggleClass('open');
        return false;
      });
    });
  }
};

export default App;

document.addEventListener('DOMContentLoaded', App.init());
