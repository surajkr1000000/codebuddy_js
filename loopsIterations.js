// level {1}

//Q- Write a function in Javascript to print the following pattern.

// ```
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1
// ```

// The function can take the number of rows as input. The pattern should be printed in the console. Minimum number of rows should be 3.


function pattern(n){
    for(i=1;i<=n;i++){
        s="";
        for(j=1;j<n;j++){
            s+="";
        }
        for(j=1;j<=i;j++){
            s+=j;
        }
        for(j=i-1;j>=1;j--){
            s+=j
        }
        console.log(s)
    }
}
pattern(4)
