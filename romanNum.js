var romanToInt = function(s) {
    let sum = 0
    for  (let i = 0; i < s.length; i++ ) {
        // sum = sum + s[i]
        if (s[i] == "V") {
            sum = sum + 5
    
        }
        if (s[i] == "I") {
            sum = sum + 1
            if (s[i+1] == "V") {
                sum = sum + 3 
                i++ 
            }

        }
    }
    return sum
    
};


console.log(romanToInt("VIII"))


