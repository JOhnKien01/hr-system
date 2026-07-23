//  FORCE PUBLIC DNS (Fixes the PH network ISP block)
const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8']); 


require('dotenv').config();
console.log("DEBUG: The value of process.env.PORT is:", process.env.PORT);
const server = require('./app');

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server is Online and listening on port ${PORT}`);
});