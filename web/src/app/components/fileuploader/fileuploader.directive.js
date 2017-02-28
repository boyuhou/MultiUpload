export function FileUploaderDirective($parse) {
	'ngInject';

	let directive = {
		restrict: 'A',
        bindToController: true,
		link: function (scope, element, attrs){
		    var t= 1;
		    var model = $parse(attrs.fileUploader);
		    var modelSetter = model.assign;

		    element.bind('change', function() {
		       scope.$apply(function(){
		           modelSetter(scope, element[0].files[0]);
		           console.log(scope)
               })
            });
        }
	};

	return directive;
}