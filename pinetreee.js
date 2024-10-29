function printPineTree(N) {
    for (let i = 0; i < N; i++) {
        let stars = '*'.repeat(2 * i + 1); 
        let spaces = ' '.repeat(N - i - 1); 
        console.log(spaces + stars); 
    }
    let trunkSpaces = ' '.repeat(N - 1);
    console.log(trunkSpaces + '*'); 
}
let height = 5; 
printPineTree(height);