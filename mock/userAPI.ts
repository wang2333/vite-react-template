import { fakerZH_CN as faker } from '@faker-js/faker'

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    setTimeout(() => {
      res.send({
        success: true,
        errorCode: 0,
        data: {
          list: Array.from({ length: 10 }).map((_, index) => ({
            id: index,
            name: faker.person.fullName(),
            nickName: faker.person.zodiacSign(),
            gender: faker.number.int({ min: 0, max: 1 }),
            age: faker.number.int({ min: 18, max: 60 }),
          })),
        },
      })
    }, 1000)
  },
  'POST /api/v1/queryUserList': (req: any, res: any) => {
    res.send({
      success: true,
      errorCode: 0,
      data: {
        list: Array.from({ length: 10 }).map((_, index) => ({
          id: index,
          name: faker.person.fullName(),
          nickName: faker.person.zodiacSign(),
          gender: faker.number.int({ min: 0, max: 1 }),
          age: faker.number.int({ min: 18, max: 60 }),
        })),
      },
    })
  },
}
