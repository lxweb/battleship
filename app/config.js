/*@ngInject*/
export default ($urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
