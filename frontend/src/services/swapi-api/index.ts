import { SWApiFactory } from './api';

const config = {
  basePath: 'https://swapi.dev/api/'
}

const ApiFactory = SWApiFactory(config)

export default ApiFactory;