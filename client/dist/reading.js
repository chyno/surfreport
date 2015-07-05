System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  'use strict';

  var inject, computedFrom, HttpClient, Welcome, UpperValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      computedFrom = _aureliaFramework.computedFrom;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      Welcome = (function () {
        function Welcome(http) {
          _classCallCheck(this, _Welcome);

          this.heading = 'Latest Reading';
          this.city = '';
          this.speed = '';
          this.direction = '';
          this.reading = '';
          this.url = '/api/latestreading';

          this.http = http;
        }

        var _Welcome = Welcome;

        _createClass(_Welcome, [{
          key: 'canDeactivate',
          value: function canDeactivate() {
            return true;
          }
        }, {
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.get(this.url).then(function (response) {

              _this.city = response.content.city;
              _this.speed = response.content.speed;
              _this.direction = response.content.direction;
              _this.reading = response.content.reading;
            });
          }
        }]);

        Welcome = inject(HttpClient)(Welcome) || Welcome;
        return Welcome;
      })();

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dDQUthLE9BQU8sRUFzQ1AsbUJBQW1COzs7Ozs7OztpQ0EzQ3hCLE1BQU07dUNBQ04sWUFBWTs7c0NBQ1osVUFBVTs7O0FBR0wsYUFBTztBQVFQLGlCQVJBLE9BQU8sQ0FRTixJQUFJLEVBQUM7OztlQVBqQixPQUFPLEdBQUcsZ0JBQWdCO2VBQzFCLElBQUksR0FBRyxFQUFFO2VBQ1QsS0FBSyxHQUFHLEVBQUU7ZUFDVixTQUFTLEdBQUcsRUFBRTtlQUNkLE9BQU8sR0FBRyxFQUFFO2VBQ1osR0FBRyxHQUFHLG9CQUFvQjs7QUFHeEIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3VCQVZVLE9BQU87Ozs7aUJBaUJMLHlCQUFHO0FBQ2YsbUJBQU8sSUFBSSxDQUFDO1dBQ1Y7OztpQkFFSyxvQkFBRzs7O0FBRVQsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTs7QUFFOUMsb0JBQUssSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ2xDLG9CQUFLLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUNwQyxvQkFBSyxTQUFTLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDNUMsb0JBQUssT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2FBRXpDLENBQUMsQ0FBQztXQUVKOzs7QUFoQ1UsZUFBTyxHQURuQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPOzs7eUJBQVAsT0FBTzs7QUFzQ1AseUJBQW1CO2lCQUFuQixtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7O3FCQUFuQixtQkFBbUI7O2lCQUN4QixnQkFBQyxLQUFLLEVBQUM7QUFDWCxtQkFBTyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1dBQ3JDOzs7ZUFIVSxtQkFBbUI7OztxQ0FBbkIsbUJBQW1CIiwiZmlsZSI6InJlYWRpbmcuanMiLCJzb3VyY2VSb290IjoiLi4vY2xpZW50L3NyYy8ifQ==