describe('FooterController', function(){
  beforeEach(module('footer'));

  describe('getFullName()', function(){
    it('should handle names correctly', inject(function($controller){
      var myController = $controller('FooterController');

      myController.firstName = 'George';
      myController.lastName = 'Harrison';

      myController.getFullName().should.equal('George Harrison');
    }));
  });
});