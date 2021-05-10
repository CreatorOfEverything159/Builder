class Builder {
    setModel() {}
    setBody() {}
    setEngine() {}
    setSeats() {}
    setDoors() {}
    setColor() {}
    setPrice() {}
    setSpoiler() {}
    setDate() {}
    build() {}
}

class BuilderCar extends Builder {
    setModel(model) {
        this.model = model
        return this
    }

    setBody(body) {
        this.body = body
        return this
    }

    setEngine(engine) {
        this.engine = engine
        return this
    }

    setSeats(seats) {
        this.seats = seats
        return this
    }

    setDoors(doors) {
        this.doors = doors
        return this
    }

    setColor(color) {
        this.color = color
        return this
    }

    setSpoiler(spoiler) {
        this.spoiler = spoiler
        return this
    }

    setPrice(price) {
        this.price = price
        return this
    }

    setDate(date) {
        this.date = date
        return this
    }

    build() {
        return new Car(this)
    }
}

class BuilderBike extends Builder {
    setModel(model) {
        this.model = model
        return this
    }

    setBody(body) {
        this.body = body
        return this
    }

    setEngine(engine) {
        this.engine = engine
        return this
    }

    setSeats(seats) {
        this.seats = seats
        return this
    }

    setColor(color) {
        this.color = color
        return this
    }

    setPrice(price) {
        this.price = price
        return this
    }

    setDate(date) {
        this.date = date
        return this
    }

    build() {
        return new Bike(this)
    }
}

class Bike {
    constructor(builder) {
        this.model = builder.model
        this.body = builder.body
        this.engine = builder.engine
        this.seats = builder.seats
        this.color = builder.color
        this.date = builder.date
        this.price = builder.price
    }
}

class Car {
    constructor(builder) {
        this.model = builder.model
        this.body = builder.body
        this.engine = builder.engine
        this.seats = builder.seats
        this.doors = builder.doors
        this.color = builder.color
        this.spoiler = builder.spoiler
        this.date = builder.date
        this.price = builder.price
    }
}

let main = () => {
    let myNewCar = new BuilderCar()
        .setModel('AMG')
        .setBody('Sport')
        .setEngine('V8')
        .setSeats(2)
        .setDoors(2)
        .setColor('yellow')
        .setSpoiler(true)
        .setDate(new Date())
        .setPrice(320900)
        .build()

    let myNewBike = new BuilderBike()
        .setModel('Sakura')
        .setBody('Sport')
        .setEngine('850')
        .setSeats(2)
        .setColor('green')
        .setDate(new Date())
        .setPrice(12000)
        .build()

    console.log(myNewCar)
    console.log(myNewBike)
}

main()
