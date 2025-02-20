import { AppDataSource } from "./data-source";
import { Role } from "./entity/Role";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const usersRepository = AppDataSource.getRepository(User)
    await usersRepository.clear()
    const rolesRepository = AppDataSource.getRepository(Role)
    await rolesRepository.clear()
    var role = new Role()
    role.id = 1
    role.name = "admin"
    await rolesRepository.save(role)

    var role = new Role()
    role.id = 2
    role.name = "user"
    await rolesRepository.save(role)

    const roles = await rolesRepository.find({ order: {id: "asc"}})
    console.log(roles);
  })
  .catch((error) => console.log(error));
