<html>
 2   <head>
 3     <script src="js/angular.js"></script>
 4     <script src="js/app.js"></script>
 5     <link rel="stylesheet" href="css/bootstrap.css">
 6   </head>
 7   <body ng-app>
 8     <div ng-controller="MyCtrl">
 9       <button ng-click="toggle()">Toggle</button>
10       <p ng-show="visible">Hello World!</p>
11     </div>
12   </body>
13 </html>