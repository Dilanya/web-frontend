

const BASE_URL = 'http://localhost:1337/api'; 

export const generateEndpoint = (endpoint) => {
  return `${BASE_URL}/${endpoint}`;
};

export default function titleToSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}


