/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('user', {
      url: '/users/:userId',
      template: require('../view/user.html'),
      controller: 'UserController',
      controllerAs: 'user',
      resolve: {
        user: (UserService, $stateParams) => {
          return UserService.getUser($stateParams.userId).then((object) => {
            return object.data;
          });
        },
        userFieldStatus: (UserService, $stateParams) => {
          return UserService.getFieldState($stateParams.userId).then((object) => {
            return object.data;
          });
        }
      }
    });
}
