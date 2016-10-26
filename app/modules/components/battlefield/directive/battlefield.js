import toastr from 'toastr';
import '../sass/battlefield.scss';

/*@ngInject*/
export default class Battlefield {
  constructor() {
    let fieldContent = '';
    for(let i=0; i<120; i++){
      fieldContent += `<div class="sq ${i}" data-position="${i}">${i}</div>`
    }
    this.template = `<div class="battlefield row">${fieldContent}</div>`;
    this.restrict = 'E';
    this.scope = {
      attackSq: '=',
      ships: '=',
      map: '='
    };
    this.transclude = true;
  }

  // optional compile function
  compile(tElement) {
    return this.link.bind(this);
  }

  // optional link function
  link(scope, element, attributes) {
    if(scope.ships){
      let shipsMap = [];
      scope.ships.map( ship => ship.map( p => shipsMap.push(p)) );
      for(let i=0; i<shipsMap.length; i++){
        element.find(`.sq.${shipsMap[i]}`).addClass('ship')
      }
    }



    if(scope.attackSq){
      element.find('.sq').on('click', (event) => {
        let attackPos = event.target.dataset.position;
        scope.attackSq(event.target.dataset.position)
          .then(newMap => {
            for(let i in newMap){
              element.find(`.sq.${i}`).addClass(`touched-${newMap[i]}`)
            }
          });
      })
    }
  }
}
