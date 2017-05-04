angular.module('orchestrionApp.routes', [])
.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('app', {
    url: '',
    templateUrl: 'templates/app.tpl.html',
    controller: 'appController',
    resolve: {
      data: function ($http, $localStorage) {
        if(!$localStorage['ffxivOrchestrion']) {
          $localStorage['ffxivOrchestrion'] = {};
        }
        return $http.get('data/rollData.json').then(function(response) {
          var rollData = response.data;

          // update roll data checked data
          _.forEach(rollData, function (roll, rollIndex) {
            rollData[rollIndex].checked = _.get($localStorage.ffxivOrchestrion[rollIndex], 'checked');

            if (_.has(roll, 'source.recipeItems') && roll.source.recipeItems) {
              _.forEach(roll.source.recipeItems, function (ingredient, ingredientIndex) {
                if ($localStorage.ffxivOrchestrion[rollIndex]) {
                  rollData[rollIndex].source.recipeItems[ingredientIndex].checked = $localStorage.ffxivOrchestrion[rollIndex].ingredients[ingredientIndex] || false;
                }
              });
            }
          });

          return rollData;
        });
      }
    }
  });

  $stateProvider
  .state('locales', {
    url: '/locales',
    templateUrl: 'templates/locales.html',
    controller: 'appController',
    resolve: {
      data: function ($http, $localStorage) {
        if(!$localStorage['ffxivOrchestrion']) {
          $localStorage['ffxivOrchestrion'] = {};
        }
        return $http.get('data/rollData.json').then(function(response) {
          var rollData = response.data;

          // update roll data checked data
          _.forEach(rollData, function (roll, rollIndex) {
            rollData[rollIndex].checked = _.get($localStorage.ffxivOrchestrion[rollIndex], 'checked');

            if (_.has(roll, 'source.recipeItems') && roll.source.recipeItems) {
              _.forEach(roll.source.recipeItems, function (ingredient, ingredientIndex) {
                if ($localStorage.ffxivOrchestrion[rollIndex]) {
                  rollData[rollIndex].source.recipeItems[ingredientIndex].checked = $localStorage.ffxivOrchestrion[rollIndex].ingredients[ingredientIndex] || false;
                }
              });
            }
          });

          return rollData;
        });
      }
    }
  });

  $stateProvider
  .state('dungeons', {
    url: '/dungeons',
    templateUrl: 'templates/dungeons.html',
    controller: 'appController',
    resolve: {
      data: function ($http, $localStorage) {
        if(!$localStorage['ffxivOrchestrion']) {
          $localStorage['ffxivOrchestrion'] = {};
        }
        return $http.get('data/rollData.json').then(function(response) {
          var rollData = response.data;

          // update roll data checked data
          _.forEach(rollData, function (roll, rollIndex) {
            rollData[rollIndex].checked = _.get($localStorage.ffxivOrchestrion[rollIndex], 'checked');

            if (_.has(roll, 'source.recipeItems') && roll.source.recipeItems) {
              _.forEach(roll.source.recipeItems, function (ingredient, ingredientIndex) {
                if ($localStorage.ffxivOrchestrion[rollIndex]) {
                  rollData[rollIndex].source.recipeItems[ingredientIndex].checked = $localStorage.ffxivOrchestrion[rollIndex].ingredients[ingredientIndex] || false;
                }
              });
            }
          });

          return rollData;
        });
      }
    }
  });

  $stateProvider
  .state('primal_battles', {
    url: '/primal_battles',
    templateUrl: 'templates/primal_battles.html',
    controller: 'appController',
    resolve: {
      data: function ($http, $localStorage) {
        if(!$localStorage['ffxivOrchestrion']) {
          $localStorage['ffxivOrchestrion'] = {};
        }
        return $http.get('data/rollData.json').then(function(response) {
          var rollData = response.data;

          // update roll data checked data
          _.forEach(rollData, function (roll, rollIndex) {
            rollData[rollIndex].checked = _.get($localStorage.ffxivOrchestrion[rollIndex], 'checked');

            if (_.has(roll, 'source.recipeItems') && roll.source.recipeItems) {
              _.forEach(roll.source.recipeItems, function (ingredient, ingredientIndex) {
                if ($localStorage.ffxivOrchestrion[rollIndex]) {
                  rollData[rollIndex].source.recipeItems[ingredientIndex].checked = $localStorage.ffxivOrchestrion[rollIndex].ingredients[ingredientIndex] || false;
                }
              });
            }
          });

          return rollData;
        });
      }
    }
  });

  $stateProvider
  .state('raids', {
    url: '/raids',
    templateUrl: 'templates/raids.html',
    controller: 'appController',
    resolve: {
      data: function ($http, $localStorage) {
        if(!$localStorage['ffxivOrchestrion']) {
          $localStorage['ffxivOrchestrion'] = {};
        }
        return $http.get('data/rollData.json').then(function(response) {
          var rollData = response.data;

          // update roll data checked data
          _.forEach(rollData, function (roll, rollIndex) {
            rollData[rollIndex].checked = _.get($localStorage.ffxivOrchestrion[rollIndex], 'checked');

            if (_.has(roll, 'source.recipeItems') && roll.source.recipeItems) {
              _.forEach(roll.source.recipeItems, function (ingredient, ingredientIndex) {
                if ($localStorage.ffxivOrchestrion[rollIndex]) {
                  rollData[rollIndex].source.recipeItems[ingredientIndex].checked = $localStorage.ffxivOrchestrion[rollIndex].ingredients[ingredientIndex] || false;
                }
              });
            }
          });

          return rollData;
        });
      }
    }
  });

  $stateProvider
  .state('others', {
    url: '/others',
    templateUrl: 'templates/others.html',
    controller: 'appController',
    resolve: {
      data: function ($http, $localStorage) {
        if(!$localStorage['ffxivOrchestrion']) {
          $localStorage['ffxivOrchestrion'] = {};
        }
        return $http.get('data/rollData.json').then(function(response) {
          var rollData = response.data;

          // update roll data checked data
          _.forEach(rollData, function (roll, rollIndex) {
            rollData[rollIndex].checked = _.get($localStorage.ffxivOrchestrion[rollIndex], 'checked');

            if (_.has(roll, 'source.recipeItems') && roll.source.recipeItems) {
              _.forEach(roll.source.recipeItems, function (ingredient, ingredientIndex) {
                if ($localStorage.ffxivOrchestrion[rollIndex]) {
                  rollData[rollIndex].source.recipeItems[ingredientIndex].checked = $localStorage.ffxivOrchestrion[rollIndex].ingredients[ingredientIndex] || false;
                }
              });
            }
          });

          return rollData;
        });
      }
    }
  });

  $stateProvider
  .state('seasonal', {
    url: '/seasonal',
    templateUrl: 'templates/seasonal.html',
    controller: 'appController',
    resolve: {
      data: function ($http, $localStorage) {
        if(!$localStorage['ffxivOrchestrion']) {
          $localStorage['ffxivOrchestrion'] = {};
        }
        return $http.get('data/rollData.json').then(function(response) {
          var rollData = response.data;

          // update roll data checked data
          _.forEach(rollData, function (roll, rollIndex) {
            rollData[rollIndex].checked = _.get($localStorage.ffxivOrchestrion[rollIndex], 'checked');

            if (_.has(roll, 'source.recipeItems') && roll.source.recipeItems) {
              _.forEach(roll.source.recipeItems, function (ingredient, ingredientIndex) {
                if ($localStorage.ffxivOrchestrion[rollIndex]) {
                  rollData[rollIndex].source.recipeItems[ingredientIndex].checked = $localStorage.ffxivOrchestrion[rollIndex].ingredients[ingredientIndex] || false;
                }
              });
            }
          });

          return rollData;
        });
      }
    }
  });

});