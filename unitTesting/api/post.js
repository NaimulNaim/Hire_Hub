const expect = require ('chai').expect;
const request = require ('supertest');

const app = require('./controller/userRoute');
const conn = require('./db');

describe ('POST/notes', ()=>{
    before((done) =>{
     conn.connect()
     .then(()=> done())
     .catch((err) => done(err));

    })
    
    after((done) =>{
        conn.close()
        .then(()=> done())
        .catch((err) => done(err));
   
       })
    
     it('OK,  creating a new note works', (done)=>{
         request(app).post ('/notes')
         .send({ username: 'NOTE NAME', password: "AAA"})
         .then ((res) =>{
             const body = res.body;
             expect(body).to.contain.property('_id');
             expect(body).to.contain.property('firstName');
             expect(body).to.contain.property('firstName');
             expect(body).to.contain.property('email');
             expect(body).to.contain.property('mobileNumbe');
             expect(body).to.contain.property('address');
             expect(body).to.contain.property('portfolio');
             expect(body).to.contain.property('education');
             expect(body).to.contain.property('skills');
             expect(body).to.contain.property('projects');
             expect(body).to.contain.property('experience');
             expect(body).to.contain.property('about');
             expect(body).to.contain.property('appliedJobIds');
             expect(body).to.contain.property('username');
             expect(body).to.contain.property('password');
             

             done();
         })
     })  
       
})