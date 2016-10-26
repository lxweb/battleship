import '../sass/user.scss';
export default class UserController {
  constructor($stateParams, $location, user, userFieldStatus, UserService) {
    this.$stateParams = $stateParams;
    this.$location = $location;
    this.user = user;
    this.ships = userFieldStatus.ships;
    this.map = userFieldStatus.map;
    this.UserService = UserService;
    this.attackSq = this.attackSq.bind(this)
  }

  attackSq(position){
    return new Promise((resolve, reject) => {
      let uid = 1;
      if(this.user.id==1){
        uid = 2;
      }
      this.UserService.attackPoint(uid,position)
      .then(feedback =>{
        this.map[position] = feedback.data.status
        return resolve(this.map)
      })
      .catch(err=>alert(err.data));
    });
  }
}

UserController.$inject = ['$stateParams', '$location', 'user', 'userFieldStatus', 'UserService'];
