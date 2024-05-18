class House {
    constructor(builder) {
      this.bedrooms = builder.bedrooms
      this.bathrooms = builder.bathrooms
      this.kitchens = builder.kitchens
      this.garages = builder.garages
    }
}

class HouseBuilder {
    constructor() {
      this.bedrooms = 0
      this.bathrooms = 0
      this.kitchens = 0
      this.garages = 0
    }
    setBedrooms(bedrooms) {
      this.bedrooms = bedrooms
      return this
    }
    setBathrooms(bathrooms) {
      this.bathrooms = bathrooms
      return this
    }
    setKitchens(kitchens) {
      this.kitchens = kitchens
      return this
    }
    setGarages(garages) {
      this.garages = garages
      return this
    }
    build() {
      return new House(this)
    }
}

const house1 = new HouseBuilder()
    .setBedrooms(3)
    .setBathrooms(2)
    .setKitchens(1)
    .setGarages(2)
    .build()
console.log(house1)

const house2 = new HouseBuilder()
    .setBedrooms(10)
    .setBathrooms(2)
    .build()
console.log(house2)
