const assert = require('assert');

describe('Hello World Tests', () => {
    it('should return true for true', () => {
        assert.strictEqual(true, true);
    });

    it('should return 2 for 1 + 1', () => {
        assert.strictEqual(1 + 1, 2);
    });
});