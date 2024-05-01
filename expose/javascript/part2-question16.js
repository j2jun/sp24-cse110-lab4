let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for(let property in statistics)
{
    // check if property starts with the letter r, or if the value of that property is an odd number
    if(property.startsWith('r') || statistics[property] % 2 == 1)
    {
        // print out the value of the property that satisfies the if statement
        console.log(statistics[property]);
    }
}
