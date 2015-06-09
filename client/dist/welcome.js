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

          this.heading = 'Chyno Surf Reqport Page';
          this.city = 'Arlington';
          this.speed = '12';
          this.direction = 'NW';
          this.reading = '4/4/2015';
          this.url = '/api/readings';

          this.http = http;
        }

        var _Welcome = Welcome;

        _createClass(_Welcome, [{
          key: 'submit',
          value: function submit() {}
        }, {
          key: 'canDeactivate',
          value: function canDeactivate() {
            return true;
          }
        }, {
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.get(this.url).then(function (response) {

              _this.city = response.content[0].city;
              _this.speed = response.content[0].speed;
              _this.direction = response.content[0].direction;
              _this.reading = response.content[0].reading;
            });
          }
        }, {
          key: 'fullName',
          get: function () {
            return '' + this.firstName + ' ' + this.lastName;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dDQUthLE9BQU8sRUE0Q1AsbUJBQW1COzs7Ozs7OztpQ0FqRHhCLE1BQU07dUNBQ04sWUFBWTs7c0NBQ1osVUFBVTs7O0FBR0wsYUFBTztBQVNQLGlCQVRBLE9BQU8sQ0FTTixJQUFJLEVBQUM7OztlQVJqQixPQUFPLEdBQUcseUJBQXlCO2VBQ25DLElBQUksR0FBRyxXQUFXO2VBQ2xCLEtBQUssR0FBRyxJQUFJO2VBQ1osU0FBUyxHQUFHLElBQUk7ZUFDaEIsT0FBTyxHQUFHLFVBQVU7ZUFFcEIsR0FBRyxHQUFHLGVBQWU7O0FBR25CLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzt1QkFYVSxPQUFPOzs7O2lCQW9CWixrQkFBRSxFQUVQOzs7aUJBRVkseUJBQUc7QUFDZixtQkFBTyxJQUFJLENBQUM7V0FDVjs7O2lCQUVLLG9CQUFHOzs7QUFFVCxtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJOztBQUU5QyxvQkFBSyxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDckMsb0JBQUssS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZDLG9CQUFLLFNBQVMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUMvQyxvQkFBSyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFHNUMsQ0FBQyxDQUFDO1dBRUo7OztlQXhCVyxZQUFFO0FBQ1osd0JBQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxDQUFHO1dBQzdDOzs7QUFsQlUsZUFBTyxHQURuQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPOzs7eUJBQVAsT0FBTzs7QUE0Q1AseUJBQW1CO2lCQUFuQixtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7O3FCQUFuQixtQkFBbUI7O2lCQUN4QixnQkFBQyxLQUFLLEVBQUM7QUFDWCxtQkFBTyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1dBQ3JDOzs7ZUFIVSxtQkFBbUI7OztxQ0FBbkIsbUJBQW1CIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VSb290IjoiLi4vY2xpZW50L3NyYy8ifQ==