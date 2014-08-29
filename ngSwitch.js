/**
* EXAMPLE MARKUP
*
* <div ng-switch="currentSport">
*     <p ng-switch-when="baseball">Home run!</p>
*     <p ng-switch-when="football">Touchdown!</p>
*     <p ng-switch-default>Goal!</p>
* </div>
*
**/


//here is an ng-switch definition object
  {
  
   restrict: 'EA',
  
   require: 'ngSwitch',
  
   controller: function () {
  
   this.cases = {};
  
   },
  
   link: function(scope, element, attr, ctrl) {
  
     var watchExpr = attr.ngSwitch, // Read in the data property we want to monitor
    
     selectedLinker,   selectedElement, selectedScope;
    
   scope.$watch(watchExpr, function (value) {
  
   if (selectedElement) { // remove any prior HTML within $element
  
   selectedScope.$destroy();
  
   selectedElement.remove();
  
   selectedElement = selectedScope = null;
  
   }
  
   if ((selectedLinker = ctrl.cases['!' + value] || ctrl.
  
  cases['?'])) {
  
   selectedScope = scope.$new();
  
   selectedLinker(selectedScope, function(caseElement) {
  
   selectedElement = caseElement;
  
   element.append(caseElement);
  
   });
  
   }
  
   });
  
   }
