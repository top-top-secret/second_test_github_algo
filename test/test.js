var second_test_github_algo = require('../src/second_test_github_algo.js');

describe('Algorithm', function() {
  describe('#apply()', function() {
    it('should result in a hello message', function(done) {
      second_test_github_algo.apply("Jane", function(err, res) {
        if(err) { return done(err); }

        if(res == "Hello Jane") {
          done();
        } else {
          done("Expected 'Hello Jane'. Receieved '" + res + "'.");
        }
      });
    });
  });
});
