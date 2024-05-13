import { faker } from '@faker-js/faker';
import { delay, http, HttpResponse } from 'msw';

import { UserApi } from '@/apis/services/userService';

const logout = http.get(`${UserApi.Logout}`, async () => {
  await delay(1000);
  return HttpResponse.json({
    status: 1,
    message: '',
    data: {
      list: Array.from({ length: 10 }).map((_, index) => ({
        id: index,
        name: faker.person.fullName(),
        nickName: faker.person.zodiacSign(),
        gender: faker.number.int({ min: 0, max: 1 }),
        age: faker.number.int({ min: 18, max: 60 }),
      })),
    },
  });
});

export default [logout];
