const stream = require('stream');
const os = require('os');

class LineSplitStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.rSymbol = os.EOL;
    this.finStr ='';
  }

  _transform(chunk, encoding, callback) {
    this.finStr += chunk;// .toString();

    const findSplit  = this.finStr.split(this.rSymbol);

    for(var n = 0; n < findSplit.length-1; n++) {
      this.push(findSplit[n]);
    }

   //  if (findSplit[n].toString().length>0){
       this.finStr =findSplit[n++];
   // }
    callback();
  }

  _flush(callback) {
    if (this.finStr) {
      this.push(this.finStr);
    }

    callback();
  }
}

module.exports = LineSplitStream;
