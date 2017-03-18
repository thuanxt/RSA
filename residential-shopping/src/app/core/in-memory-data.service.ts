import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let residence = [
      {
        id: 11,
        name: 'The Park Residence', 
        address: 'Nha Be',
        description: 'Nha Be',
        imageUrl: '#'
      },
      {id: 12, name: 'Park Vista'},
      {id: 13, name: 'Sunrise City'},
      {id: 14, name: 'Sun River Side'},
      {id: 15, name: 'Lexington'},
      {id: 16, name: 'Imperia'},
      {id: 17, name: 'Dragon Hill'},
      {id: 18, name: 'The Sun Avenue'},
      {id: 19, name: 'IDICO'},
      {id: 20, name: 'Lotus'}
    ];
    return {residence};
  }
}
