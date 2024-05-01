# Part 1

1. Line 9 prints: ```values added:  20```
2. Line 13 prints: ```final results:  20```
3. Line 9 prints: ```values added:  20```
4. Line 13 returns an error. It states ```ReferenceError: result is not defined```. This occurs because of the ```let``` keyword inside the ```if``` block for the ```result``` variable.
5. Line 9 returns an error. It states ```TypeError: Assignment to constant variable```. This occurs because the ```const``` keyword prevents the ```result``` variable's value from being reassigned.
6. Line 13 returns an error. It states ```ReferenceError: result is not defined```.This occurs because the ```const``` keyword inside the ```if``` block for the ```result``` variable is visible only inside that block scope. Anything that is outside the block is not recognized.
