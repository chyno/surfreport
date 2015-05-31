module.exports = function(app) {
    var api = '/api';
     var readings = [
     {id: 1,city: "arlington", spped: "12", direction : "SW", reading : "5/12/2015"},
     {id: 2,city: "arlington", spped: "14", direction : "NW", reading : "5/13/2015"},
     {id: 3,city: "Arlington", spped: "12", direction : "NW", reading : "5/14/2015"},
     {id: 4,city: "arlington", spped: "8", direction : "E", reading : "5/15/2015"},
      

     ];


    app.get(api + '/reading/:id', getReading);
    app.get(api + '/readings', getReadings);

    function getReading(req, res, next) {
        
        var reading = customers.filter(function(c) {
        	 return c.id	=== parseInt(req.params.id);
        });

        res.send(readings[0]);
    }

    function getReadings(req, res, next) {
       res.send(readings);
    }
};