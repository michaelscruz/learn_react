//function getTempCB(location, callback) {
//  callback(undefined, 78);
//  callback('City not found');
//}
//
//getTempCB('Philadelphia', function(err, temp) {
//  if (err) {
//    console.log('error', err);
//  } else {
//    console.log('success', temp);
//  }
//});
//
//function getTempPromise(location) {
//  return new Promise(function(resolve, reject) {
//    resolve(79);
//    reject('City not found');
//  });
//}
//
//getTempPromise('Philadelphia').then(function(temp) {
//  console.log('success', temp);
//}, function(err) {
//  console.log('error', err);
//})
//

function addNumbers(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof(a) != 'number' || typeof(b) != 'number') {
      reject("Both arguments must be numbers");
    } else {
      resolve(a + b);
    }
  });
}

function dispSum(sum) { console.log('Sum:', sum); }

function dispErr(err) { console.log('ERROR:', err); }

addNumbers(1,2).then(dispSum, dispErr);
addNumbers(2,2).then(dispSum, dispErr);
addNumbers('e',2).then(dispSum, dispErr);
addNumbers(true,2).then(dispSum, dispErr);
