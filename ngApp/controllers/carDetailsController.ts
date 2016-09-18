

namespace cardealership.Controllers {
    export class CarDetailsController {
        public car;

        constructor(
            public carId,
            private carsService: cardealership.Services.CarsService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance){
                this.getCars();
            }

            getCars(){
                this.car = this.carsService.getCar(this.carId);
            }
    }
}
