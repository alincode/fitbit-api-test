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

  // 每日摘要數據
  it.skip('Get Daily Activity Summary', function () {
    const date = '2018-08-28';
    const options = {
      uri: `https://api.fitbit.com/1/user/-/activities/date/${date}.json`,
      qs: {},
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    };

    return rp(options)
      .then(function (res) {
        // console.dir(res);
        let { summary } = res;
        summary.should.to.be.an('object');
        summary.steps.should.to.be.an('number');
        console.log(summary.steps);
      })
      .catch(function (err) {
        err.should.to.be.empty;
      });
  });

  // 終生數據
  it.skip('Get Lifetime Stats', function () {
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

  // 活動日誌列表
  it.skip('Get Activity Log List', function () {
    const options = {
      uri: 'https://api.fitbit.com/1/user/-/activities/list.json',
      qs: {
        'beforeDate': '2018-08-20',
        'sort': 'asc',
        'offset': 0,
        'limit': 100
      },
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    };

    return rp(options)
      .then(function (res) {
        // console.dir(res);
        let { activities } = res;
        activities.should.to.be.an('Array');
      })
      .catch(function (err) {
        err.should.to.be.empty;
      });
  });

  // 活動類型
  it.skip('Browse Activity Types', function () {
    const options = {
      uri: 'https://api.fitbit.com/1/activities.json',
      qs: {},
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    };

    return rp(options)
      .then(function (res) {
        console.dir(res);
        let { categories } = res;
        categories.should.to.be.an('Array');
      })
      .catch(function (err) {
        err.should.to.be.empty;
      });
  });
  

});