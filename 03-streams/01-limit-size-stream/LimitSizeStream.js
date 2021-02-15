const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
    constructor(options) {
        super(options);
        this.maxLimit = options.limit;
        this.countActual = 0;
    }

    _transform(chunk, encoding, callback) {
        const chunkLength =chunk.length;
        const ostatok = this.maxLimit - this.countActual;

        if (chunkLength > ostatok) {
            //error
           // throw new LimitExceededError();
            callback(new LimitExceededError(),null);
        } else {
            this.countActual+=chunkLength;
            callback(null, chunk);

        }

    }
}

module.exports = LimitSizeStream;
