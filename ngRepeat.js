.directive('ngRepeat', function () {

     return {
     //A priority value of 1000 makes sure that
     //this directive executes before any others on the element,
       priority: 1000,
      
          //A transclude value of element is used to collect the
          //HTML content of the original element, as we'll need that to be able to compile it 
          //later and as such we'll see that it is used here shortly within the compile function.
       transclude: 'element',
       
          //and setting terminal to
          //true ensures that Angular's automatic compilation doesn't continue on to any other 
          //directives on this element or its children. We want this because the ng-repeat
          //compile function itself will actually be handling the compilation processing for the 
          //node tree of child elements.
       terminal: true,
      
     //ARGS EXPLANATION:
     //element:
     //template element, meaning it contains all the HTML within our DOM
     //node, but again, this doesn't necessarily represent the instance of that element 
     //that's actually going to be inserted into our final document.
     
     
       compile: function(element, attr, linker) { // Compile Function
      
         return function(scope, iterStartElement, attr){ // Linking Function
        
         };
      
       }
    
     }

});
