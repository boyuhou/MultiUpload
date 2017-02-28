export class MainController {
    constructor($scope, $timeout, webDevTec, toastr, $http) {
        'ngInject';

        this.awesomeThings = [];
        this.classAnimation = '';
        this.creationDate = 1488316242022;
        this.toastr = toastr;
        this.scope = $scope;
        this.$http = $http;
        this.activate($timeout, webDevTec);
    }

    activate($timeout, webDevTec) {
        this.getWebDevTec(webDevTec);
        $timeout(() => {
            this.classAnimation = 'rubberBand';
        }, 4000);
    }

    getWebDevTec(webDevTec) {
        this.awesomeThings = webDevTec.getTec();

        angular.forEach(this.awesomeThings, (awesomeThing) => {
            awesomeThing.rank = Math.random();
        });
    }

    showToastr() {
        this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
        this.classAnimation = '';
    }

    runUploadTest() {
        let vm = this;
		console.log(vm)
		console.dir(vm.scope.s_file);
		console.dir(vm.scope.t_file);
		console.dir(vm.scope.c_file);
        console.log(vm.t_text)
		let fileFormData = new FormData();
		fileFormData.append('s_file', vm.scope.s_file);
		fileFormData.append('t_file', vm.scope.t_file);
		fileFormData.append('c_file', vm.scope.c_file);
		fileFormData.append('t_text', vm.t_text);

		let uploadUrl = 'http://localhost:22012/upload'

		vm.$http.post(uploadUrl, fileFormData, {
			headers: {'Content-Type': undefined}
		}).success(function(response){
			console.log(response)
		}).error(function(response){
			console.log('something horribly wrong')
			console.log(response)
		});
    }
}
