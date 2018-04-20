var kue = require('kue');
var express = require('express');
var kueUiExpress = require('kue-ui-express');
var app = express();

kue.createQueue().active( function( err, ids ) {
  ids.forEach( function( id ) {
    kue.Job.get( id, function( err, job ) {
      // Your application should check if job is a stuck one
      job.inactive();
    });
  });
}).watchStuckJobs();
/*.on('job complete', function(id, result) {
  kue.Job.get(id, function(err, job){
    if (err) return;
    job.remove(function(err){
      if (err) throw err;
      console.log('Removed completed job #%d', job.id);
    });
  });
});*/
/*
for(let i = 3000;i < 4000;i++) {
kue.Job.get(i, function(err, job){
    if (err) return;
    job.remove(function(err){
      if (err) throw err;
      console.log('Removed completed job #%d', job.id);
    });
  });
}
*/
kueUiExpress(app, '/kue/', '/');

// Mount kue JSON api

app.use('/', kue.app);

app.listen(9000);
