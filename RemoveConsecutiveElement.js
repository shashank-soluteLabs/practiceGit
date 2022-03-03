let str = "abbabab";

function removeConse(str){
    let ans = [];

    for(let i = 0 ; i < str.length; i++){
        if(ans.length == 0){
            ans.push(str[i])
        }else if(ans.length !=0 && ans[ans.length-1] == str[i]){
            while(ans.length !=0 && ans[ans.length-1] == str[i]){
                ans.pop()
            }
        }else{
            ans.push(str[i])
        }
    }
    console.log(ans.join(""));
}

removeConse(str)