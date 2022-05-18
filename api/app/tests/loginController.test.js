const {login, fortest} =  require('../controllers/loginController');

test('should return  eleman id', async ()=>{
    const req = {
        body :{username: "denemekayiteluser1", password: "denemekayitelpass1"}
    }
    res = await login(req);
    expect(res).toBe(1);
})
