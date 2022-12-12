//1. RETURN THE COUNT OF CONSONANT AND VOWEL IN GIVEN STRING
// let a = "https:media-exp1.licdn.com/dms/document/C4D1FAQGD_Z3_3xBBQA/feedshare-document-pdf-analyzed/0/1670692396082?e=1671667200&v=beta&t=xeFvy3yJjxdSKcKgITt8cII3WwIte-GfNUl_x2FdEUU"


// let vowel = "aeiouAEIOU"
// vowel = vowel.split("")
// let vCount = 0
// let cCount = 0

// function counterFreq(str){
//     for(let i of str){
//         if((/^[a-zA-z]+$/.test(i))){
//             if(vowel.indexOf(i) !== -1){
//                 vCount++
//             }else{
//                 cCount++
//             }
//         }
//     }
//     return [vCount,cCount]
// }

// console.log(counterFreq(str))

// again another approach--
// function countVowel(str){
//     let vowel="aeiouAEIOU"
//     // let a=97
//     // let z=122
//     // let A=65
//     // let Z=90
//     let vowelCount=0
//     let consonant=0
  
//     for(let i=0;i<str.length;i++){
//       let temp=str[i].charCodeAt(0)
//         if(vowel.includes(str[i])){
//           vowelCount++
//           continue;
//         }
//         else if((temp<65 || temp>122 )&& (temp<97 || temp>90) ){
//           continue;
//         }else{
//           consonant++
//         }
//     }
//     return{
//        vowelCount,
//        consonant
//     }
//   }
//   console.log(countVowel(str));
  

//2.  REVERSE A STRING - "hello"
// let str = "hello"
// function reverseString(str){
//     str=str.split("")
//     let s=""
//     for(let i=str.length-1;i>=0;i--){
//         s+=str[i]
//     }
//     return s;
// }
// console.log(reverseString(str))

// another approach---
// function reverseStr(str){
//     if(str.length<=1) return str
//     return reverseStr(str.substring(1)) +str[0]
// }

// console.log(reverseStr(str))


// another approach-
// function reverse(str){
//     str=str.split("")
//     let i=0;
//     let j=str.length-1
    
//     while(i<j){
//       [str[i],str[j]]=[str[j],str[i]]
//       i++
//       j--
//     }
//     return str.join('')
   
//   }
// console.log(reverse(str))
  

//3. Input: s = “geeks quiz practice code” 
// Output: s = “code practice quiz geeks”

// Input: s = “i love programming very much” 
// Output: s = “much very programming love i”

// let str = "geeks quiz practice code";  //output-- code practice quiz geeks


// function reverseString(str){
//       str=str.split(" ")
//       let s=[]
//       for(let i=str.length-1;i>=0;i--){
//          s.push(str[i])
//       }
//       return s.join(" ")
//   }
//   console.log(reverseString(str))

//4. Find the Index of the First Occurrence in a String
// let  haystack = "sadbutsad", needle = "sad"

// function firstIndex(haystack,needle){
//     if(haystack.length===needle.length){
//         return 0
//     }
//     for(let i=0;i<=haystack.length-needle.length;i++){
//             if(needle===haystack.substring(i,i+needle.length)){
//                 return i
//             }
//     }
//     return -1
// }

// console.log(firstIndex(haystack,needle))

//5. Given a set of strings, find the longest common prefix.
// Input: {"geeksforgeeks", "geeks", "geek", "geezer"}
// Output: "gee"

// Input: {"apple", "ape", "april"}
// Output: "ap"


// let str = ["apple", "ape", "april"]
// let output = ""
// function commonPrefix(str){
//     str.sort((a, b) => a.localeCompare(b))
// //    console.log(str)
//     for(let i=0;i<str[0].length;i++){
//         if(str[0][i] == str[str.length-1][i]){
//             output += str[0][i]
//         }else{
//             break; 
//         }
//     }
//     return output
// }

// console.log(commonPrefix(str))

/*6.  get the frequency count of each character and sort it by its value.... after that print all the letters and its value saperated by ' - '   input-str = "My Name Is Ashish"          output: s - 3
h - 2
M - 1
y - 1
N - 1
a - 1
m - 1
e - 1
I - 1
A - 1
i - 1
*/
// function stringWithSpace(str) {
//     let map = new Map()
//     for (let i = 0; i < str.length; i++) {
//         if (!str[i].match(/^[a-zA-Z]$/)) continue
//         map.set(str[i], map.get(str[i]) + 1 || 1)
//     }
//     let arr = []
//     for (let item of map) {
//         arr.push(item)
//     }
//     //Sort the element array by its 2nd element
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j][1] < arr[j + 1][1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     arr = arr.join(' ').split(' ')
//     for (let j = 0; j < arr.length; j++) {
//         console.log(arr[j].replace(',', ' - '))
//     }
// }
// const str = "My Name Is Ashish"
// stringWithSpace(str)

//7. Anagram count
//  let a = 'aab', b = 'aaba';       //output-4

 
   
// function anagram(a,b){
//       let a1=a.length;
//       let  b1 = b.length
//       if(a1!=b1){
//         return false;
//       }
//       let fb1 = {}
//       let fb2={}
//       for(let i =0;i<a.length;i++){
//         if(fb1[a[i]]){
//            fb1[a[i]] +=1
//         }
//         else{
//           fb1[a[i]]=1
//         }
//       }
      
    //   for(let i =0;i<b.length;i++){
    //     if(fb2[b[i]]){
    //       fb2[b[i]] +=1
    //     }
    //     else{
    //       fb2[b[i]]=1
    //     }  
    //   }
    //   let co
    //   for(let i in fb1){
    //     if(fb1[i]!=fb2[i]){ 
    //       return "It is not anagram"
    //     }  
    //   }
    //   return "It is anagram"
    // }
    // let c = anagram(a,b)
    // console.log(c)

    //8. print all the fibonnacci series numbers which are less than given input …..   input - 30 output- 0,1,1,2,3,5,8,13,21


    // let arr = [0,1]
    // let a = 0;
    // let b = 1;
    // function fibbonacci(num){
    //     let c = a + b;
    //     if(num < 1) return 0;
    //     if(num < 2 || c>num) return arr
    //     arr.push(c)
    //     a = b
    //     b= c
    //     return fibbonacci(num-1)
    
    // }
    
    // (fibbonacci(30))
    // console.log(arr)
    