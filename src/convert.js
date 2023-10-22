
const fs = require("fs");
csv = fs.readFileSync("/cs/studres/CS2003/Coursework/CS2003-P2-movie-queue/data/movie_metadata_subset.csv")
const array = csv.toString().split("\n");
let result = [];
let headers = array[0].split(",")
for (let i = 1; i < array.length; i++) {
	let obj = {}
	let str = array[i]
	let s = ''
	
	for (let ch of str) {
	s += ch
   
	}
    let properties = s.split(",")

	for (let j in headers) {
		
		obj[headers[j]] = properties[j]
    
     
	}
    
	result.push(obj)

}
let json = JSON.stringify(result);
let json2 = `const jsonData = \`${json}\``;
fs.writeFileSync('movie_metadata_subset.json', json);
fs.writeFileSync('movie_metadata_subset.js', json2)
