function classDecorator(constructor: any) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  };
}

@classDecorator
class Prueba {}
