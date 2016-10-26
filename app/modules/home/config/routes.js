/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('../view/userSelection.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}
