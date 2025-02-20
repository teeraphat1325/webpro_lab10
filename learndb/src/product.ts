import { AppDataSource } from "./data-source";
import { Product } from "./entity/Product";
import { Type } from "./entity/Type";

AppDataSource.initialize()
    .then(async () => {
        const typesRepository = AppDataSource.getRepository(Type)
        const drinkType = await typesRepository.findOneBy({ id: 1 });
        const bakeryType = await typesRepository.findOneBy({ id: 2 });
        const foodType = await typesRepository.findOneBy({ id: 3 });
        const productRepository = AppDataSource.getRepository(Product)
        productRepository.clear()

        var product = new Product();
    product.id = 1;
    product.name = "Americano";
    product.price = 40;
    product.type = drinkType;
    await productRepository.save(product);

    var product = new Product();
    product.id = 2;
    product.name = "Espresso";
    product.price = 50;
    product.type = drinkType;
    await productRepository.save(product);

    var product = new Product();
    product.id = 3;
    product.name = "Coco";
    product.price = 50;
    product.type = drinkType;
    await productRepository.save(product);

    var product = new Product();
    product.id = 4;
    product.name = "Cake 1";
    product.price = 70;
    product.type = bakeryType;
    await productRepository.save(product);

    var product = new Product();
    product.id = 5;
    product.name = "Cake 2";
    product.price = 70;
    product.type = bakeryType;
    await productRepository.save(product);

    var product = new Product();
    product.id = 6;
    product.name = "Somtum";
    product.price = 70;
    product.type = foodType;
    await productRepository.save(product);

    const products = await productRepository.find({relations : { type: true }});
    console.log(products);
    })
    .catch((error) => console.log(error));