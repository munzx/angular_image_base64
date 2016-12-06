'use strict';

angular.module('ngImageBase64Directive', [])

.directive('ngImageBase64', [function() {
	return {
		require: '?ngModel',
		restrict: 'A',
		replace: false,
		transclude: false,
		link: function(scope, elem, attrs, ngModel) {
			//A function to set the validity to invalid
			function setInvalid() {
				ngModel.$setViewValue(null);
				ngModel.$setValidity("file loaded", false);
				ngModel.$render();
			}

			//if the element is required then set its validity
			if(ngModel && attrs.required){
				setInvalid();
			}

			//Watch the element for changes
			elem.bind('change', function(e) {
				var reader = new FileReader();
				reader.onload = function(image) {
					if(image.loaded){
						scope.$apply(function () {
							if(ngModel){
								ngModel.$setViewValue(image.target.result);
								ngModel.$setValidity("file loaded", true);
								ngModel.$render();
							}
						});
					} else {
						scope.$apply(function () {
							setInvalid();
						});
					}
				}
				if(elem[0].files[0]){
					reader.readAsDataURL(elem[0].files[0]);
				} else {
					scope.$apply(function () {
						setInvalid();
					});
				}
			});
		}
	}
}]);