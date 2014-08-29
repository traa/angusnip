.directive('ngRepeat', function () {

     return {
    
       priority: 1000,
      
       transclude: 'element',
      
       terminal: true,
      
       compile: function(element, attr, linker) { // Compile Function
      
         return function(scope, iterStartElement, attr){ // Linking Function
        
         };
      
       }
    
     }

});
