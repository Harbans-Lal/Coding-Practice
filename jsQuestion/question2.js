//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function longestCommonSubsequence(name1, name2) {
    const arr = [];

    for (let i = 0; i <= name1.length; i++) {
        arr[i] = [];
        arr[i][0] = 0;
    }
    
    for (let j = 0; j <= name2.length; j++) {
        arr[0][j] = 0;
    }

    for (let i = 1; i <= name1.length; i++) {

        for (let j = 1; j <= name2.length; j++) {

        if (name1[i - 1] === name2[j - 1]) {

            arr[i][j] = arr[i - 1][j - 1] + 1;
        } 
        else
            {
            arr[i][j] = Math.max(arr[i][j - 1], arr[i - 1][j]);
        }
        console.log(arr)

        }
    }

    return arr[name1.length][name2.length];
    }

    const name1 = "jskdhiugbu";
    const name2 = "dkjdshiujcx";

    
    console.log("Length of longestCommonSubsequence:", longestCommonSubsequence(name1, name2));
    document.write("Length of longestCommonSubsequence:", longestCommonSubsequence(name1, name2));
