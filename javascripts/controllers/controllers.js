app.controller('capstoneController', ['$scope', '$http', function($scope, $http) {
  $scope.view = {};
  $scope.view.showSampleSearch = false;

  $scope.view.searchBooks = function(searchParam) {
    $http.get('https://www.googleapis.com/books/v1/volumes?q=' + searchParam).then(function(data) {
      console.log(data.data.items);
      $scope.view.data = data.data.items;
    })
    // var url = "https://www.goodreads.com/search/index.json?key=KRvoOkz3phhD77S3dn5Ug&q=" + searchParam;
    //
    // $http.get("https://query.yahooapis.com/v1/public/yql?q=" + "select Status.presence from xml where url = " + url + "&format=json")
    //     // {
    //     //     q: "select Status.presence from xml where url = " + url + "and Status.presence.lang = 'en'",
    //     //     format: "xml"
    //     // })
    //     .then(function(data) {
    //       console.log(data);
    //     })
        // function(xml){
        //     // contains XML with the following structure:
        //     // <query>
        //     //   <results>
        //     //     <GoodreadsResponse>
        //     //        ...
        //     console.log(xml);
        // }
    // ); request(url).pipe(res)
    // $http.get('https://www.goodreads.com/search/index.json?key=KRvoOkz3phhD77S3dn5Ug&q=' + searchParam).then(function(data) {
    //   console.log(data);
    // })

  }
}])

app.controller('selectController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $scope.view = {};
  var isbn = $routeParams.isbn;
  $scope.view.bookId = $routeParams.id;
  $http.get('https://www.googleapis.com/books/v1/volumes?q=' + isbn).then(function(data) {
    console.log(data.data.items);
    $scope.view.data = data.data.items;
  })
}])
