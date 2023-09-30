// reverses the items to get the latest items posted first
export const reverseList = (arr) => {
    const reverseArr = [];
    for(let i = arr.length; i >= 0; i--){
        reverseArr.push(arr[i])
    }
    reverseArr.shift()
    return reverseArr
}