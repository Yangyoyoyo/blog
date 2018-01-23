const supertest = require('supertest');
const chai = require('chai');
const app = require('./../index2');

const expect = chai.expect;
const request = supertest(app.listen())

describe('开始测试demo的get请求', () => {
    it('测试/getString.json请求', (done) => {
        request
            .get('/getString.json')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.success).to.be.an('boolean');
                expect(res.body.data).to.be.an('string');
                done()
            })
    })

    it('测试/getNumber.json请求', ( done ) => {
       request
           .get('/getString.json')
           .expect(200)
           .end((err,res)=>{
               expect(res.body).to.be.an('object')
               expect(res.body.success).to.be.an('boolean')
               expect(res.body.data).to.be.an('string')
               done()
           })
    });

});

describe('开始测试demo的post请求',()=>{
    if('测试/postDat.json请求',(done)=>{
        request
            .post('/postData.json')
            .expect(200)
            .end((err,res)=>{
                expect(res.body).to.be.an('object')
                expect(res.body.success).to.be.an('boolean')
                expect(res.body.data).to.be.an('string')
                done()
            })
        });
});