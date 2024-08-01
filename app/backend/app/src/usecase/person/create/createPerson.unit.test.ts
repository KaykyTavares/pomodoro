import { InputCreatePersonDto, OutputCreatePersonDto } from "./createPersonDto";

import CreatePersonUseCase from "./createPersonUseCase";

const input: InputCreatePersonDto = {
  name: "kayky",
  surname: "Tavares",
  email: "kayky0705@gmail.com",
  password: "kayky123@",
  created_time: new Date(),
  birth_date: new Date(2003, 4, 7),
  state: "SP",
  city: "Guarujá",
};

const mockRepository = () => {
  return {
    create: jest.fn(),
  };
};

describe("Unit test -> create person use case ", () => {
  it("Shoul create a new person", async () => {
    const personRepository = mockRepository();
    const createPersonUseCase = new CreatePersonUseCase(personRepository);

    const output: OutputCreatePersonDto = await createPersonUseCase.execute(
      input
    );

    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      surname: input.surname,
      email: input.email,
      password: input.password,
      created_time: input.created_time,
      birth_date: input.created_time,
      state: input.state,
      city: input.city,
    });
  });
});
