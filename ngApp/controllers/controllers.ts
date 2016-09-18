namespace cardealership.Controllers {

    export class CarsController {
        public carMakes;
        public cars;
        public car;
        // public selectedMake;


        constructor(private carsService:cardealership.Services.CarsService,
                    private $uibModal: ng.ui.bootstrap.IModalService) {
            this.cars = carsService.getCars();
            this.carMakes = carsService.getCarMakes();
            // this.car = carsService.getAcar();
        }



        getCarDetails(id){
            this.$uibModal.open({
                templateUrl:'/ngApp/views/carDetails.html',
                controller: cardealership.Controllers.CarDetailsController,
                controllerAs: 'controller',
                resolve: {
                    carId: ()=>id,
                },
                size:'lg'
            });
        }
    }


    export class HomeController {}

    export class AboutController {}



}
