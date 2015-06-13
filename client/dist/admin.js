System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  'use strict';

  var inject, HttpClient, Flickr;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      Flickr = (function () {
        function Flickr(http) {
          _classCallCheck(this, _Flickr);

          this.heading = 'Admin';
          this.firstName = '';
          this.lastNameName = '';
          this.zipCode = '';

          this.http = http;
        }

        var _Flickr = Flickr;

        _createClass(_Flickr, [{
          key: 'submit',
          value: function submit() {}
        }, {
          key: 'activate',
          value: function activate() {
            this.firstName = '';
            this.lastNameName = '';
            this.zipCode = '';
          }
        }, {
          key: 'fullName',
          get: function () {
            return '' + this.firstName + ' ' + this.lastName;
          }
        }]);

        Flickr = inject(HttpClient)(Flickr) || Flickr;
        return Flickr;
      })();

      _export('Flickr', Flickr);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQkFJYSxNQUFNOzs7Ozs7OztpQ0FKWCxNQUFNOztzQ0FDTixVQUFVOzs7QUFHTCxZQUFNO0FBTU4saUJBTkEsTUFBTSxDQU1MLElBQUksRUFBQzs7O2VBTGpCLE9BQU8sR0FBRyxPQUFPO2VBQ2pCLFNBQVMsR0FBRyxFQUFFO2VBQ2QsWUFBWSxHQUFHLEVBQUU7ZUFDakIsT0FBTyxHQUFHLEVBQUU7O0FBR1YsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3NCQVJVLE1BQU07Ozs7aUJBVVgsa0JBQUUsRUFFUDs7O2lCQU1PLG9CQUFFO0FBQ1AsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLGdCQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN2QixnQkFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7V0FDcEI7OztlQVJVLFlBQUU7QUFDVCx3QkFBVSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUc7V0FDL0M7OztBQWhCVSxjQUFNLEdBRGxCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixNQUFNLEtBQU4sTUFBTTtlQUFOLE1BQU07Ozt3QkFBTixNQUFNIiwiZmlsZSI6ImFkbWluLmpzIiwic291cmNlUm9vdCI6Ii4uL2NsaWVudC9zcmMvIn0=