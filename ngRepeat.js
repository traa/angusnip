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
          
          //attr:
          //contains normalized access to each attribute on the DOM
          //element. Remember, however, that we don't have an initialized scope here, so any 
          //of the attribute values that need to be evaluated within a scope won't have a useful value yet
            
            
          //linker: linker is the transcluded function, which Angular would normally
          //use to attach a scope to this element, interpolate all of the values, and then insert the 
          //final object into the DOM. By grabbing this linking function, ng-repeat now has 
          //control over when to perform the actual linking, as well as the ability to repeatedly do so, 
          //which is of course exactly what we need
     
          compile: function (element, attrs, linker) {
          
           return function ($scope, $element, $attrs) { // "post" Linking function
          
                $scope.$watch(function ($internalScope) {
               
                     $element.html('');// Clear the element's current HTML
                    
                     var values = ... // Read in array to iterate over
               
                    values.forEach(function (data, index) {
                    
                         // Attach this element's data properties to the 'element' property 
                         //on the scope so we can use it within the template
                         $internalScope.element = data; 
                    
                         linker($internalScope, function (clone) {
               
                               $element.append(clone); // Take the interpolated HTML and append it to our main $element
               
                         }); // end of linker clone function
               
                    }); // end of forEach
          
               }); // end of $watch
          
           }; // end of linking function
          
          } // end of compile function
    
     };

});
