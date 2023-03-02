const os = require("os");

let mySystemArch = os.arch();
console.log(mySystemArch);

let myCpuInfo = os.cpus();
console.log(myCpuInfo);

let hostName = os.hostname();
console.log(hostName);

let networkInfo = os.networkInterfaces();
console.log(networkInfo);

console.log(os.release());

console.log(os.platform());

console.log(os.type());

console.log(os.totalmem());


let upTimeInHours = os.uptime() / 3600;
console.log(upTimeInHours);


console.log(os.userInfo());