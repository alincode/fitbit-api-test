const rp = require('request-promise');
const chai = require('chai');
chai.should();

const token = process.env.FITBIT_TOKEN;

describe('api', function () {

  it.skip('profile', function () {
    const options = {
      uri: 'https://api.fitbit.com/1/user/-/profile.json',
      qs: {},
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    };

    return rp(options)
      .then(function (res) {
        // console.dir(res);
        let { user } = res;
        user.should.to.be.an('object');
        user.displayName.should.to.be.an('string');
      })
      .catch(function (err) {
        err.should.to.be.empty;
      });
  });

  it('activities', function () {
    const options = {
      uri: 'https://api.fitbit.com/1/user/-/activities.json',
      qs: {},
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    };

    return rp(options)
      .then(function (res) {
        // console.dir(res);
        let { lifetime } = res;
        lifetime.should.to.be.an('object');
        lifetime.total.steps.should.to.be.an('number');
      })
      .catch(function (err) {
        err.should.to.be.empty;
      });
  });

});