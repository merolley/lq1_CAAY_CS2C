//name, age, and address of persona 1
let fName = "Maria Delos Santos Las Marias";
const age = 25;
let address = "Upper session Road, Baguio City, Benguet";
//splitting persona 1's name
let fullname = fName.split(" ");
let firstname = fullname[0];
let middlename = fullname[1]+" "+ fullname[2];
let lastname = fullname[3] +" "+ fullname[4];
let fm= firstname +" "+ middlename;

//name, age, and address of persona 2
let bName= "Juan Gamoso Dela Cruz";
const bAge = 28;
let bAddress = "San Nicolas, Candon City, Ilocos Sur";
//splitting persona 2's name
let bfullname = bName.split(" ");
let bfirstname = bfullname[0];
let bmiddlename = bfullname[1];
let blastname = bfullname[2] +" "+ bfullname[3];
let bfm= bfirstname +" "+ bmiddlename;

// getting the name and address lengths 
const lfn = fName.length;       //name 1 length
const las = address.length; 

const lbn = bName.length;       //name 2 length
const lban = bAddress.length; 
//adding the age, and the lenghts
const totalAge = age+bAge;
const numericTotal= lfn+lbn+las+lban+totalAge;

//output of the personas information
const output1=  "Name: " + lastname.toLocaleUpperCase() + ", " + fm+" Age: "+ age + ", Address: " + address;
const output2 = "Name: " + blastname.toLocaleUpperCase() + ", " + bfm+" Age: "+ bAge + ", Address:  " + bAddress;

// adding age,  - lp1n * lp2n
const operation2= (totalAge-lfn)*lbn
//operations
const addition = age + bAge;
const subtraction = addition-fName.length;
const multiplication = subtraction*lbn;

//output for the operations
console.log(output1);
console.log(output2);
console.log(numericTotal);
console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(las**lban)




