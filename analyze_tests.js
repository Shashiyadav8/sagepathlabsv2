
const fs = require('fs');
const tests = fs.readFileSync('src/components/Data/Tests.js', 'utf8');

// Simple regex extraction since we can't import the file directly if it has imports/exports not handled by node immediately without package.json 'type'
const codeRegex = /"code":\s*"([^"]+)"/g;
let match;
const codes = [];
while ((match = codeRegex.exec(tests)) !== null) {
    codes.push(match[1]);
}

console.log(`Total codes found: ${codes.length}`);

// Check for duplicates
const uniqueCodes = new Set(codes);
console.log(`Unique codes: ${uniqueCodes.size}`);
if (codes.length !== uniqueCodes.size) {
    console.log("duplicates found.");
    // Find them
    const counts = {};
    codes.forEach(c => counts[c] = (counts[c] || 0) + 1);
    Object.keys(counts).filter(c => counts[c] > 1).forEach(c => console.log(`Duplicate: ${c} (x${counts[c]})`));
}

// Check SP sequence
const spCodes = codes.filter(c => c.startsWith('SP')).map(c => parseInt(c.slice(2))).sort((a, b) => a - b);
if (spCodes.length > 0) {
    console.log(`Found ${spCodes.length} SP codes, ranging from ${spCodes[0]} to ${spCodes[spCodes.length - 1]}`);
    for (let i = 0; i < spCodes.length - 1; i++) {
        if (spCodes[i + 1] !== spCodes[i] + 1) {
            console.log(`Gap in SP codes: ${spCodes[i]} -> ${spCodes[i + 1]}`);
        }
    }
}
