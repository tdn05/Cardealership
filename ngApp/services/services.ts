namespace cardealership.Services {

    export class CarsService {
        private carMakesResource;
        private carsResource;


        constructor($resource: ng.resource.IResourceService) {
            this.carMakesResource = $resource('/api/makes');
            this.carsResource = $resource('/api/cars/:id')
        }

        public getCarMakes() {
            return this.carMakesResource.query();
        }

        public getCars(){
            return this.carsResource.query();
        }
        public getCar(carId){
            return this.carsResource.get({id: carId})
        }
        // public getAcar(){
        //     return this.carsResource.get();
        // }
    }

    angular.module('cardealership').service('carsService', CarsService);
    }
