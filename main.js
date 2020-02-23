const howMany = prompt('how many cases?');
for (i = 0; i < howMany; i++) {
    let numbers = prompt('how many numbers?');
    let array = [];
    for (i = 0; i < numbers; i++) {
        let number = prompt('give variable');
        array.push(number);
    }
    array.reverse();
    console.log(array)

    for( i = 0; i < numbers; i++) {
        console.log(array[i] + ' ')
    }
}

