import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  prenom: faker.name.firstName(),
  age: faker.datatype.number(100),
  email: faker.internet.email(),
  doctor: faker.name.findName(),
}));

export default users;
