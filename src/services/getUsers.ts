import { api } from "./api";

type NationalityType = 'AU' | 'BR' | 'CA' | 'CH' | 'DE' | 'DK' | 'ES' | 'FI' | 'FR' | 'GB' | 'IE' | 'IN' | 'IR' | 'MX' | 'NL' | 'NO' | 'NZ' | 'RS' | 'TR' | 'UA' | 'US';

export type GenderType = 'male' | 'female' | undefined;

interface GetUserQuery {
  limit?: number;
  gender?: GenderType;
  nat?: NationalityType;
  page?: number;
}

export interface UserResponse {
  gender: GenderType,
  name: {
    title: "Mr",
    first: string,
    last: string
  },
  location: {
    street: {
      number: number,
      name: string
    },
    city: string,
    state: string,
    country: string,
    postcode: number,
    coordinates: {
      latitude: number,
      longitude: number
    },
    timezone: {
      offset: string,
      description: string
    }
  },
  email: string,
  login: {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string
  },
  dob: {
    date: Date,
    age: number
  },
  registered: {
    date: Date,
    age: number
  },
  phone: string,
  cell: string,
  id: {
    name: string,
    value: string,
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  },
  nat: NationalityType
};

export const getUsers = async (query: GetUserQuery) => {
  const MAX_NUMBER_OF_FETCH_USER_DEFAULT = 5;

  let queryString = '';

  if (query.limit) {
    queryString+= `?results=${query.limit}`
  } else {
    queryString += `?results=${MAX_NUMBER_OF_FETCH_USER_DEFAULT}`
  }

  if (query.gender) {
    queryString += `&gender=${query.gender}`
  }

  if (query.nat) {
    queryString += `&nat=${query.nat}`
  }

  const response = await api.get(queryString);
  return response.data.results as UserResponse[];
};
