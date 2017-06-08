describe('FooterController', function() {
  beforeEach(module('app'));
  beforeEach(module('footer'));

  describe('footer controller', function($controller) {
    
    it('should get check socialLinks', inject(function($controller) {
      var controller = $controller('FooterController');
      expect(controller.social).to.be.a('null');
    }));
  });
});