class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${ this._apiBase }${ url }`);
    if(!res.ok) {
      throw new Error(`Not fetch ${ url }, received ${ res.status }`);
    }
    const body = await res.json();
    return body;
  };

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${ id }/`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${ id }/`);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStarships(id) {
    return this.getResource(`/starships/${ id }/`);
  }
}

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
  people.forEach((name) => {
    console.log(name.name);
  });
});

swapi.getPerson(3).then((people) => {
  console.log(people.name);
});

swapi.getAllPlanets().then((planets) => {
  planets.forEach((planet) => {
    console.log(planet.name);
  });
});
