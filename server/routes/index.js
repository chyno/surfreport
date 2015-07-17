var R = require('ramda');
var moment = require('moment');
var security = require('../security');

module.exports = function(app) {
    var api = '/api';

    var maxReading = function (item, item2) {
        if (moment(item.reading) > moment(item2.reading))
        {
            return item
         }
         else
          {
              return item2
          }
      }

    var readings = [
     {id: 1,city: "arlingtonx", speed: 12, direction : "SW", reading : "5/12/2015"},
    {id: 2,city: "arlington", speed: 14, direction : "NW", reading : "6/13/2015"},
    {id: 3,city: "Arlington", speed: 1, direction : "NW", reading : "5/14/2015"},
    {id: 4,city: "arlington", speed: 8, direction : "E", reading : "5/15/2015"},  
     ];

    app.get(api + '/reading/:id', getReading);
           // app.get(api + '/loginCheck', getLogInCheck);
    app.get(api + '/readings', getReadings);
    app.get(api + '/latestreading', getLatestReading);
            //app.post(api + '/api/user' , addUser);
           

           //sends the request through our local login/signin strategy, and if successful takes user to homepage, otherwise returns then to signin page
           /*
            app.post(api + '/login', passport.authenticate('local-signin', { 
                successRedirect: '/',
                failureRedirect: '/signin'
            })
            );
        */

    function getReading(req, res, next) {
        var reading = customers.filter(function(c) {
        return c.id	=== parseInt(req.params.id);
    });
        res.send(readings[0]);
    }

    function getReadings(req, res, next) {
    res.send(readings);}

    function getLatestReading(req, res, next) {
        res.send(R.reduce(maxReading, {reading: "5/15/1999"} , readings));
    }
};