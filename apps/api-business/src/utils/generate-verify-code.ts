import * as crypto from 'crypto';

export const generateVerificationCode = (user) =>
  crypto.randomBytes(3, function(err, buffer) {
    user = parseInt(buffer.toString('hex'), 16)
      .toString()
      .substr(0, 6);
  });
