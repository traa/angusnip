angular.directive('autocompleteInput', function () {
  
   return {
  
    //we've used the require property to tell Angular that we want
    //access to the controller instance on the ngModel directive
    //Because we've required the ngModel
    //controller, we also have to declare the directive that provides that controller, 
    //otherwise Angular will throw an error, which means that our input element needs to look like:
    //<input ng-model="data.property" autocomplete-input />
     require : 'ngModel',
    
     link : function ($scope, $element, $attrs, ngModel) {
        //The ngModel controller provides multiple methods and properties, but for our 
        //purposes we only need two, $render and $setViewValue().
        
        //Thus, once we assign our custom function
        //to the $render key, any time the data changes, we can update the input value appropriately.
      ngModel.$render = function () {
      
        $element.val(ngModel.$viewValue || '');
      
      };
    
     $element.autocomplete({
    
     ... //Define source, etc
    
       select : function (ev, ui) {
      
       $scope.$apply(function() {
      
      

        //$setViewValue works in the opposite direction, so when the user
        //does something that should change the value, we can tell ngModel what the new 
        //value is and it will update the internal data model.
       ngModel.$setViewValue(ui.item.value);
      
     });
    
     }
    
     });
    
     }
    
   }

});
