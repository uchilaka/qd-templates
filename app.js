angular.module('QueuedApp', [
    'ngRoute',
    'ngSanitize'
])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/', {
                templateUrl: 'teacher.html',
                controller: 'TeacherStart'
            })
            .when('/teacher', {
                templateUrl: 'teacher.html',
                controller: 'TeacherStart'
            })
            .when('/teacher/requests', {
                templateUrl: 'teacher-requests.html',
                controller: 'TeacherStart'
            })
            .when('/teacher/:subjectHandle/requests', {
                templateUrl: 'teacher-requests.html',
                controller: 'TeacherStart'
            })
            .otherwise('/');
    })
    /*
    .directive('studentRequestItem', function () {
        return {
            restrict: 'E',
            templateUrl: 'student-request-item.html',
            link: function (scope, el, attrs) {
                console.warn('Student request scope -> ', scope);
            },
            scope: {
                request: '='
            }
        }
    })
    */
    .controller('Main', function ($rootScope, $location) {
        // all the global stuff
        $rootScope.$on('$routeChangeSuccess', function (ngEvent, next, current) {
            console.log('Route change success -> ', arguments);
            // set current route
            $rootScope.currentRoute = next;
        });

        $rootScope.subjects = [
            {
                title: "Astrology",
                tag: "astrology"
            },
            {
                title: "Chemistry",
                tag: "chemistry"
            },
            {
                title: "Physics",
                tag: "physics"
            },
            {
                title: "Geology",
                tag: "geology"
            },
            {
                title: "Math",
                tag: "math"
            },
            {
                title: "History",
                tag: "history"
            },
        ];

        $rootScope.requests = [
            {
                studentName: "John Cusac",
                topic: "Some things needed with Algebra",
                timeInQueue: '36 minutes'
            },
            {
                studentName: "Mark Cuban",
                topic: "Why Isn't this working?!!",
                timeInQueue: '2 hours'
            }
        ];


    })
    .controller('TeacherRequest', function ($scope) {
        console.log('[TeacherRequest]');

    })

    .controller('StudentStart', function ($scope) {
        console.log('[StudentStart]');


    })
    .controller('TeacherStart', function ($scope) {
        console.log('[TeacherStart]');
    })
    ;