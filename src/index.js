function getComponent() {
   return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
      
      var element = document.createElement('pre');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   
      return element;

   }).catch(err => 'An error occurred while loadeing the component');
}

getComponent().then(component => { 
   document.body.appendChild(component());
})
