import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let residence = [
      {
        id: 11,
        name: 'The Park Residence', 
        address: 'Nha Be',
        description: 'Nha Be',
        imageUrl: '/assets/img/residence/the-park-residence.jpg'
      },
      {
        id: 12,
        name: 'Park Vista',
        address: 'Nha Be',
        description: 'Nha Be',
        imageUrl: '/assets/img/residence/park-vista.jpg'
      },
      {
        id: 13, 
        name: 'Sunrise City',
        address: 'Nha Be',
        description: 'Nha Be',
        imageUrl: '/assets/img/residence/sunrise-city.jpg'
      },
      {
        id: 14, 
        name: 'Sun River Side',
        address: 'Nha Be',
        description: 'Nha Be',
        imageUrl: '/assets/img/residence/the-park-residence.jpg'
      },
      {
        id: 15, 
        name: 'Lexington',
        address: 'Nha Be',
        description: 'Nha Be',
        imageUrl: '/assets/img/residence/lexington.jpg'
      },
      {
        id: 16, 
        name: 'Imperia',
        address: 'Nha Be',
        description: 'Nha Be',
        imageUrl: '/assets/img/residence/imperia.jpg'
      },
      { 
        id: 17,
        name: 'Dragon Hill',
        address: 'Nha Be',
        description: 'Nha Be',
        imageUrl: '/assets/img/residence/dragon-hill.jpg'
      },
      {
        id: 18, name: 'The Sun Avenue',
        address: 'Nha Be',
        description: 'Nha Be',
        imageUrl: '/assets/img/residence/the-sun-avenue.jpg'
      },
      {
        id: 19, name: 'IDICO',
        address: 'Nha Be',
        description: 'Nha Be',
        imageUrl: '/assets/img/residence/idico.jpg'
      },
      {
        id: 20, name: 'Lotus',
        address: 'Nha Be',
        description: 'Nha Be',
        imageUrl: '/assets/img/residence/lotus.jpg'
      }
    ];
    return {residence};
  }
}
