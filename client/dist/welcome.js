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

          this.heading = ' Latest Reading';
          this.city = '';
          this.speed = '';
          this.direction = '';
          this.reading = '';
          this.url = '/api/readings';

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

              _this.city = response.content[0].city;
              _this.speed = response.content[0].speed;
              _this.direction = response.content[0].direction;
              _this.reading = response.content[0].reading;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dDQUthLE9BQU8sRUFxQ1AsbUJBQW1COzs7Ozs7OztpQ0ExQ3hCLE1BQU07dUNBQ04sWUFBWTs7c0NBQ1osVUFBVTs7O0FBR0wsYUFBTztBQVFQLGlCQVJBLE9BQU8sQ0FRTixJQUFJLEVBQUM7OztlQVBqQixPQUFPLEdBQUcsaUJBQWlCO2VBQzNCLElBQUksR0FBRyxFQUFFO2VBQ1QsS0FBSyxHQUFHLEVBQUU7ZUFDVixTQUFTLEdBQUcsRUFBRTtlQUNkLE9BQU8sR0FBRyxFQUFFO2VBQ1osR0FBRyxHQUFHLGVBQWU7O0FBR25CLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzt1QkFWVSxPQUFPOzs7O2lCQWlCTCx5QkFBRztBQUNmLG1CQUFPLElBQUksQ0FBQztXQUNWOzs7aUJBRUssb0JBQUc7OztBQUVULG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7O0FBRTlDLG9CQUFLLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNyQyxvQkFBSyxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDdkMsb0JBQUssU0FBUyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQy9DLG9CQUFLLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUc1QyxDQUFDLENBQUM7V0FFSjs7O0FBakNVLGVBQU8sR0FEbkIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLE9BQU8sS0FBUCxPQUFPO2VBQVAsT0FBTzs7O3lCQUFQLE9BQU87O0FBcUNQLHlCQUFtQjtpQkFBbkIsbUJBQW1CO2dDQUFuQixtQkFBbUI7OztxQkFBbkIsbUJBQW1COztpQkFDeEIsZ0JBQUMsS0FBSyxFQUFDO0FBQ1gsbUJBQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztXQUNyQzs7O2VBSFUsbUJBQW1COzs7cUNBQW5CLG1CQUFtQiIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlUm9vdCI6Ii4uL2NsaWVudC9zcmMvIn0=