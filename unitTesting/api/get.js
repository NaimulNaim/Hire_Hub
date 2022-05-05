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
         request(app).get ('/notes')
         .send({ username: 'NOTE NAME', password: "AAA"})
         .then ((res) =>{
             const body = res.body;
             expect(body).to.contain.property('_id');
             expect(body).to.contain.property('title');
             expect(body).to.contain.property('department');
             expect(body).to.contain.property('salaryFrom');
             expect(body).to.contain.property('salaryTo');
             expect(body).to.contain.property('experience');
             expect(body).to.contain.property('smallDescription');
             expect(body).to.contain.property('fullDescription');
             expect(body).to.contain.property('minimumQualification');
             expect(body).to.contain.property('SkillRequired');
             expect(body).to.contain.property('company');
             expect(body).to.contain.property('email');
             expect(body).to.contain.property('companyDescription');
             expect(body).to.contain.property('appliedCandidates');
             expect(body).to.contain.property('postedBy');
             

             done();
         })
     })  
       
})