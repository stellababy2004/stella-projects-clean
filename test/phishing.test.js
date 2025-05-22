const assert = require('assert');
const { checkPhishing } = require('../phishing');

describe('checkPhishing', function() {
  it('връща true за опасен сайт', async function() {
    const result = await checkPhishing('http://phishing.com');
    assert.strictEqual(result, true);
  });

  it('връща false за безопасен сайт', async function() {
    const result = await checkPhishing('http://example.com');
    assert.strictEqual(result, false);
  });
});