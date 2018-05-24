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