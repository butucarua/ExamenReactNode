import { baseRequestService } from '../baseRequestService';

export type Configuration = {
  readonly basePath: string
}

const BASE_PATH = "https://swapi.dev/api/".replace(/\/+$/, "");

export interface FetchArgs {
  readonly url?: string
  readonly options: any;
}

export class RequiredError extends Error {
  name: "RequiredError"
  constructor(public field: string, msg?: string) {
    super(msg);
  }
}

export const SWApiFetchParamCreator = function (configuration: Configuration) {
  return {
    getFilms(options: any = {}): FetchArgs {
      
      const localVarRequestOptions = Object.assign({ method: 'GET' }, options);

      return {
        url: '/films',
        options: localVarRequestOptions
      }
    },
    getPeople(people: string, options: any = {}): FetchArgs {
      
      const localVarRequestOptions = Object.assign({ method: 'GET' }, options);

      return {
        url: `/people/${people}`,
        options: localVarRequestOptions
      }
    }
  }
}

const SWApiFp = function (configuration?: Configuration) {
  return {
    getFilms(options?: any): (basePath?: string) => Promise<any> {
      const localVarFetchArgs = SWApiFetchParamCreator(configuration!).getFilms(options);

      return (basePath: string = BASE_PATH) => {
        return baseRequestService(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
          .catch(err => {
            throw err
          })
      };
    },
    getPeople(people: string, options?: any): (basePath?: string) => Promise<any> {
      const localVarFetchArgs = SWApiFetchParamCreator(configuration!).getPeople(people, options);

      return (basePath: string = BASE_PATH) => {
        return baseRequestService(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
          .catch(err => {
            throw err
          })
      };
    },
    // searchSymbols(keywords: string, datatype?: string, options?: any): (basePath?: string) => Promise<any> {
    //   const localVarFetchArgs = SWApiFetchParamCreator(configuration!).searchSymbols(keywords, datatype, options);

    //   return (basePath: string = BASE_PATH) => {
    //     return baseRequestService(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
    //       .catch(err => {
    //         throw err
    //       })
    //   };
    // },
  }
}

export const SWApiFactory = (configuration?: Configuration, basePath?: string) => {
  return {
    getFilms(options?: any) {
      return SWApiFp(configuration).getFilms(options)(basePath)
    },
    getPeople(people: string, options?: any) {
      return SWApiFp(configuration).getPeople(people, options)(basePath)
    }
  }
}