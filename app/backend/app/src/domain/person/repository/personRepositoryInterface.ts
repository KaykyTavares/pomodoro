import { InputCreatePersonDto } from "../../../usecase/person/create/createPersonDto";
import Person from "../entity/personEntity";

export interface PersonRepositoryInterface {
  create: (input: InputCreatePersonDto) => Person;
}
