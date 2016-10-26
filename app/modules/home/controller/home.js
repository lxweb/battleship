import '../sass/home.scss';
export default class HomeController {
  constructor($location, $state) {
    this.$location = $location;
    this.$state = $state;
    this.title = 'Battleship - Lisandro Fernandez';
    this.description = 'This is a test';
  }
}

HomeController.$inject = ['$location', '$state'];
