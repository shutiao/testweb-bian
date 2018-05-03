(function(){
    var app = angular.module('tSuite-6-Ajax', []);
    
    app.controller('NGJS-6-2', function(){
        this.FileSrcURL = "/NGJS/book.html";
    });

    app.controller('NGJS-6-3', function(){
        this.ngIncludePath = '/NGJS/book';
        this.ngIncludePathExt = '.html';
    });
})();
