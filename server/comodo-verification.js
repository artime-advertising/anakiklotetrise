var comodoVerification = '/' + process.env.COMODO_VERIFICATION + '.txt';

Router.route(comodoVerification , { where: 'server' })
  .get(function() {
    var request = this.request;
    var response = this.response;
    var content = process.env.COMODO_VERIFICATION + '\ncomodoca.com'
    this.response.end(content);
  })
