# Part 2

1. At line 12, it will print ```3``` because of the value of ```i```. This occurs since the ```i``` variable is declared with ```var```. Furthermore, it can be accessed anwyere inside the function due to ```var```. Thus, the value of ```i``` increments until it reaches the ```prices``` length, which is ```3```.

2. At line 13, it will print the ```discountedPrices``` variable's value, which is ```150```. This occurs because the ```discountedPrices``` variable is declared with ```var```. From the last iteration of the for loop, the ```discountedPrices``` value is assigned and kept. The calculation is 300 * 0.5 = 150. Thus, the result is ```150```.

3. At line 14, the value, 150, of the ```finalPrice``` will be logged to the console. This occurs because the variable is declared with ```var```, before the loop termniates. Therefore, the value of ```finalPrice``` will be stored as 150.

4. The ```discountPrices``` function will return [50, 100, 150]. This occurs because the input array [100, 200, 300] is multiplied by 50%, which is the discounted price. Each result will be pushed to output array with two decimal places.

5. At line 12, an error, ```ReferenceError: discountedPrice is not defined```, occurs because ```i``` is declared with ```let``` inside the for loop. This means ```i``` will be only accesible in the for loop. ```i``` will no longer be accessible after the for loop terminates.

6. At line 13, an error, ```ReferenceError: discountedPrice is not defined``` occurs because ```discountedPrice``` is declared with ```let``` inside the for loop. ```discountedPrice``` is not accessible outside the for loop.

7. At line 14, the value, 150, of ```finalPrice``` variable will be printed. Since ```finalPrice``` is stored 150 = 300 * 0.5 at the last iteration of the loop.

8. The ```discountPrices``` function will return [50, 100, 150]. The array ```discounted``` will store 50% of each value in the input array [100, 200, 300] in two decimal places. Since ```discounted``` aray is declared with ```let```, it can be accessed in the entire function.

9. At line 11, an error, ```Reference Error: i is not defined``` will occur because ```i``` is declared with ```let``` within the for loop. This means ```i``` can be used inside the for loop.

10. At line 12, the value, ```3```, of the ```length``` variable will print. Since the ```length``` is declared with ```const```, the value will hold 3 since ```prices``` array has 3 elements.

11. The function ```discountPrices``` returns ```discounted``` array , [50, 100, 150]. This occurs because each element in the input array [100, 200, 300] is multplied by 0.5. Also, ```discounted``` array is delcared with ```const```. This will not change the value.

12. Notation
    A. ```student.name```
    B. ```student['Grad Year']```
    C. ```student.greeting()```
    D. ```student['Favorite Teacher'].name```
    E. ```student.courseLoad[0]```

13. Arithmetic
    A. ```'32'```. ```'3'``` is a string and this will concatenate ```2``` as a string using ```'+'``` operator.
    B. ```1```. ```'-'``` operator will convert ```'3'``` to an integer ```3``` and then subtract ```2``` from ```3```.
    C. ```3```. ```null``` = 0, so ```3 + 0 = 3```
    D. ```'3null'```. ```'3'``` is a string and ```'+'``` operator will concatenate ```'3'``` with ```'null'```
    E. ```4```. True maps to ```1``` so ```3 + 1```
    F. ```0```. ```false``` & ```null``` are both ```0```.
    G. ```'3undefined'```. ```'3'``` is a string, so ```'undefined'``` will be string, so they will concatenate.
    H. ```NaN```. ```undefined``` will not convert to an integer.

14. Comparison
    A. '2' > 1 is true because the string '2' converts to the number 2, making the comparison 2 > 1 true.

    B. '2' < '12' is false because strings are compared lexicographically in JavaScript. Here, '2' is greater than '1', so '2' < '12' is false.

    C. 2 == '2' is true because the == operator converts '2' to the number 2, making 2 == 2 true.

    D. 2 === '2' is false because === does not convert types and thus compares a number with a string.

    E. True == 2 is false because true converts to 1 in JavaScript, and 1 is not equal to 2.

    F. True === Boolean(2) is true because Boolean(2) converts to true, making the comparison true === true.

15. The difference betwen ```==``` and ```===``` is that the ```==``` checks for equality in value as well as type, while the ```===``` only checks for equality without allowing type conversion.

16. look at part2-question16.js

17. When you call ```modifyArray([1,2,3], doSomething)```, the function ```modifyArray``` uses the list [1,2,3] and a function called ```doSomething```. Inside ```modifyArray```, it changes each number in the list by doubling it. These new numbers are put into a new list called ```newArr```. In the end, ```modifyArray``` gives back this new list, which has the numbers [2, 4, 6].

18. look at part2-question18.js

19. Output:

```javaScript
1
4
3
2
```
