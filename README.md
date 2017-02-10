# User Sorting Algorithm

The goal of this challenge was to create an algorithm that sorted users by skills in a given array with objects,

# Usage Example
```
let test = new Endorsements([
        { skill: 'css', user: 'Bill' },
        { skill: 'javascript', user: 'Chad' },
        { skill: 'javascript', user: 'Bill' },
        { skill: 'css', user: 'Sue' },
        { skill: 'javascript', user: 'Sue' },
        { skill: 'html', user: 'Sue' }
]);


const sorted = test.sort_users_by_skill();

console.log(sorted);
```

### The output

```
[ { skill: 'css', user: [ 'Bill', 'Sue' ], count: 2 },
  { skill: 'javascript',
    user: [ 'Chad', 'Bill', 'Sue' ],
    count: 3 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
]
```

#### Time to complete: 1 hour 28 minutes
