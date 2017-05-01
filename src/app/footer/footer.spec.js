// import footer from './footer/footer.module';
// import FooterController from './footer.controller';

describe('FooterController', function() {
  // require('./footer.module.js');
  beforeEach(module('footer'));

  var $controller;
  var controller;
  var $httpBackend;

  beforeEach(inject(function(_$controller_,_$httpBackend_){
    $controller = _$controller_; 
    $httpBackend = _$httpBackend_;
    controller = $controller('FooterController',{});
  }));

  it('should check if controller is defined',function(){
    expect(controller).toBeDefined();
  }); 
  it('should check if init function is defined',function(){
    expect(controller.init).toBeDefined();
  });
});
