/*@ngInject*/
class UserService {
  constructor($http) {
    this.$http = $http;
  }

  getUser(usreId) {
    return this.$http.get(`http://localhost:4000/api/user/${usreId}`);
  }

  getFieldState(usreId) {
    /*
    1: touched and empty
    2: touched and full
    */
      return this.$http.get(`http://localhost:4000/api/user/${usreId}`);
  }

  attackPoint(userId, position){
    return this.$http.post(`http://localhost:4000/api/attack/${userId}/${position}`);
  }
}

export default UserService;
