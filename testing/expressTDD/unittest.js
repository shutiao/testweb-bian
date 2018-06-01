var request = require('supertest');
var app = require('./../../app');

describe('Request to the root path', function() {
    it('Returns a 302 status code', function(done){
        request(app)
            .get('/')
            .expect(302)
            .end(function(error) {
                if(error) throw error;
                done();
            });
    })
});

describe('Request to AngularJS Test Suite 1 URL', function() {
    it('Returns a 200 status code', function(done){
        request(app)
            .get('/NGJS/tSuite/1')
            .expect(200,done);
    });

    it('Returns a HTML', function(done){
        request(app)
            .get('/NGJS/tSuite/1')
            .expect('Content-Type', /html/, done);
    });
});

describe('Request to Tour Of Heroes Dashboard', function() {
    it('Returns a 200 status code', function(done){
        request(app)
            .get('/angular/dashboard')
            .expect(200)
            .end(function(error) {
                if(error) throw error;
                done();
            });
    });

    it('Returns a JSON format', function(done){
        request(app)
            .get('/angular/api/heroes')
            .expect('Content-Type', /json/)
            .end(function(error) {
                if(error) throw error;
                done();
            });
    })
});

describe('HTTP-1-11 (#2525, #2527, #2529) ajax + POST/PUT/DELETE + 自定义头 + Body = 200 + json', function() {
    var messageBody = {
        'case': 'HTTP-1-11'
    }
    it('POST to HTTP-1-11', function(done){
        request(app)
            .post('/HTTP/methods')
            .send(messageBody)
            .expect(200)
            .end(function(error) {
                if(error) throw error;
                done();
            });
    });
    it('PUT to HTTP-1-11', function(done){
        request(app)
            .put('/HTTP/methods')
            .send(messageBody)
            .expect(200)
            .end(function(error) {
                if(error) throw error;
                done();
            });
    });
    it('DELETE to HTTP-1-11', function(done){
        request(app)
            .delete('/HTTP/methods')
            .send(messageBody)
            .expect(200)
            .end(function(error) {
                if(error) throw error;
                done();
            });
    });
});

describe('JS-2-1 Ajax 跨域请求', function(){
    it('GET to /JS-2-1 With Query', function(done){
        request(app)
            .get('/JS/Ajax/JS-2-1?key=value')
            .expect(200, done)
    });

    it('POST to /JS-2-1 With Query', function(done){
        request(app)
            .post('/JS/Ajax/JS-2-1?key=value')
            .expect(200, done)
    });
})

describe('HTTP-2-1 自定义响应头', function(){
    it('GET to /HTTP-2-1/HTTP-2-1 With Query', function(done){
        request(app)
            .get('/HTTP/cache/HTTP-2-1?resHeaderField1=a&resHeaderVal1=apple&resHeaderField2=b&resHeaderVal2=bear')
            .expect(200, done)
    });
})
