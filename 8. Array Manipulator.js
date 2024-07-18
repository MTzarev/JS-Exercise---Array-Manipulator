function arrayManipulator(nums, commands) {
    for (let command of commands) {
        let tokens = command.split(` `)
        let action = tokens.shift();
        console.log(action);
    }
    
}
arrayManipulator([1, 2, 3, 4, 5],
   ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
