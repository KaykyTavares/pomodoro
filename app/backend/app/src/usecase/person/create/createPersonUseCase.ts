import { PersonRepositoryInterface } from "../../../domain/person/repository/personRepositoryInterface";
import { InputCreatePersonDto, OutputCreatePersonDto } from "./createPersonDto";

export default class CreatePersonUseCase {
  private personRepository: PersonRepositoryInterface;

  constructor(personRepository: PersonRepositoryInterface) {
    this.personRepository = personRepository;
  }

  async execute(input: InputCreatePersonDto): Promise<OutputCreatePersonDto> {
    const person = await this.personRepository.create(input);

    return {
      id: person.getId(),
      name: person.getName(),
      surname: person.getSurname(),
      email: person.getEmail(),
      password: person.getPassword(),
      created_time: person.getCreatedTime(),
      birth_date: person.getBirthDate(),
      state: person.getState(),
      city: person.getCity(),
    };
  }
}
