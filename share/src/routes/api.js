'use strict';var _0x36231f=_0x367e;(function(_0x3de2b0,_0x145bd5){var _0x406815=_0x367e,_0x533ed5=_0x3de2b0();while(!![]){try{var _0x304a72=parseInt(_0x406815(0xe5))/0x1*(parseInt(_0x406815(0xe7))/0x2)+parseInt(_0x406815(0xb7))/0x3+-parseInt(_0x406815(0xb2))/0x4+-parseInt(_0x406815(0xd6))/0x5*(parseInt(_0x406815(0xbc))/0x6)+-parseInt(_0x406815(0xd3))/0x7*(-parseInt(_0x406815(0xcf))/0x8)+-parseInt(_0x406815(0xb6))/0x9+-parseInt(_0x406815(0xe3))/0xa*(-parseInt(_0x406815(0xed))/0xb);if(_0x304a72===_0x145bd5)break;else _0x533ed5['push'](_0x533ed5['shift']());}catch(_0x3936b5){_0x533ed5['push'](_0x533ed5['shift']());}}}(_0x57dd,0x59aeb));Object['defineProperty'](exports,'__esModule',{'value':!0x0}),exports[_0x36231f(0xde)]=void 0x0;var _express=_interopRequireDefault(require(_0x36231f(0xdb))),_JWTAction=require('../middleware/JWTAction'),_loginRegisterController=_interopRequireDefault(require(_0x36231f(0xe4))),_quizController=_interopRequireDefault(require('../controller/api/quizController')),_answerController=_interopRequireDefault(require(_0x36231f(0xe8))),_questionController=_interopRequireDefault(require(_0x36231f(0xb5))),_participantController=_interopRequireDefault(require('../controller/api/participantController'));function _0x57dd(){var _0x15c0a4=['/login','use','/quiz-by-participant','238fyTXuM','/quiz-submit','/api/v1/','5wYfRjo','getQuestion','Router','delete','getOverview','express','/quiz','/quiz-upsert-qa','default','/history','putQuestion','/question','postQuizAssign','2103520ZjGNGp','../controller/api/loginRegisterController','10663PRUdcW','postQuizWithQA','2DubVMb','../controller/api/answerController','postQuiz','get','deleteAnswer','postProfile','22DZrqHE','/participant/all','198840tnSwmU','deleteParticipant','postLogin','../controller/api/questionController','1347948eOuqGy','1629966EiUCxh','/answer','putQuiz','/answer/:id','put','3058188lpVMWW','putParticipant','getQuizByParticipant','post','postRefreshToken','all','postAnswer','postChangePassword','/quiz/:id','postRegister','/questions-by-quiz','/participant','postQuizSubmit','getParticipant','postLogout','deleteQuiz','checkUserJWT','/overview','postQuestion','23960yonrfF'];_0x57dd=function(){return _0x15c0a4;};return _0x57dd();}function _0x367e(_0xf6d8f7,_0x1454f8){var _0x57ddcf=_0x57dd();return _0x367e=function(_0x367e07,_0x1fc58d){_0x367e07=_0x367e07-0xb2;var _0x4f2bda=_0x57ddcf[_0x367e07];return _0x4f2bda;},_0x367e(_0xf6d8f7,_0x1454f8);}function _interopRequireDefault(_0x5d840f){return _0x5d840f&&_0x5d840f['__esModule']?_0x5d840f:{'default':_0x5d840f};}var router=_express[_0x36231f(0xde)][_0x36231f(0xd8)](),initAPIRoutes=function(_0x53942e){var _0x5670b9=_0x36231f;return router[_0x5670b9(0xc1)]('*',_JWTAction[_0x5670b9(0xcc)],_JWTAction['addDelay']),router[_0x5670b9(0xbf)]('/register',_loginRegisterController[_0x5670b9(0xde)][_0x5670b9(0xc5)]),router[_0x5670b9(0xbf)](_0x5670b9(0xd0),_loginRegisterController[_0x5670b9(0xde)][_0x5670b9(0xb4)]),router['post']('/refresh-token',_loginRegisterController['default'][_0x5670b9(0xc0)]),router['post']('/logout',_loginRegisterController['default'][_0x5670b9(0xca)]),router[_0x5670b9(0xbf)]('/change-password',_loginRegisterController[_0x5670b9(0xde)][_0x5670b9(0xc3)]),router[_0x5670b9(0xbf)]('/profile',_loginRegisterController[_0x5670b9(0xde)][_0x5670b9(0xec)]),router[_0x5670b9(0xea)](_0x5670b9(0xcd),_loginRegisterController[_0x5670b9(0xde)][_0x5670b9(0xda)]),router[_0x5670b9(0xea)](_0x5670b9(0xdf),_loginRegisterController[_0x5670b9(0xde)]['getHistory']),router[_0x5670b9(0xea)](_0x5670b9(0xc7),_participantController[_0x5670b9(0xde)][_0x5670b9(0xc9)]),router[_0x5670b9(0xea)](_0x5670b9(0xee),_participantController[_0x5670b9(0xde)]['getAllParticipant']),router['post'](_0x5670b9(0xc7),_participantController['default']['postParticipant']),router[_0x5670b9(0xbb)]('/participant',_participantController[_0x5670b9(0xde)][_0x5670b9(0xbd)]),router['delete'](_0x5670b9(0xc7),_participantController[_0x5670b9(0xde)][_0x5670b9(0xb3)]),router[_0x5670b9(0xea)]('/quiz/:id',_quizController[_0x5670b9(0xde)]['getQuiz']),router['post'](_0x5670b9(0xdc),_quizController[_0x5670b9(0xde)][_0x5670b9(0xe9)]),router[_0x5670b9(0xbb)](_0x5670b9(0xdc),_quizController['default'][_0x5670b9(0xb9)]),router[_0x5670b9(0xd9)](_0x5670b9(0xc4),_quizController[_0x5670b9(0xde)][_0x5670b9(0xcb)]),router[_0x5670b9(0xea)](_0x5670b9(0xd2),_quizController[_0x5670b9(0xde)][_0x5670b9(0xbe)]),router[_0x5670b9(0xea)]('/question/:id',_questionController[_0x5670b9(0xde)][_0x5670b9(0xd7)]),router['post'](_0x5670b9(0xe1),_questionController[_0x5670b9(0xde)][_0x5670b9(0xce)]),router['put'](_0x5670b9(0xe1),_questionController[_0x5670b9(0xde)][_0x5670b9(0xe0)]),router[_0x5670b9(0xd9)](_0x5670b9(0xe1),_questionController['default']['deleteQuestion']),router[_0x5670b9(0xea)](_0x5670b9(0xc6),_questionController[_0x5670b9(0xde)]['getQuestionByQuiz']),router[_0x5670b9(0xbf)](_0x5670b9(0xb8),_answerController[_0x5670b9(0xde)][_0x5670b9(0xc2)]),router['put'](_0x5670b9(0xb8),_answerController[_0x5670b9(0xde)]['putAnswer']),router['delete'](_0x5670b9(0xba),_answerController[_0x5670b9(0xde)][_0x5670b9(0xeb)]),router[_0x5670b9(0xbf)](_0x5670b9(0xd4),_quizController['default'][_0x5670b9(0xc8)]),router[_0x5670b9(0xbf)]('/quiz-assign-to-user',_quizController[_0x5670b9(0xde)][_0x5670b9(0xe2)]),router['get']('/quiz-with-qa/:quizId',_quizController[_0x5670b9(0xde)]['getQuizWithQA']),router[_0x5670b9(0xbf)](_0x5670b9(0xdd),_quizController[_0x5670b9(0xde)][_0x5670b9(0xe6)]),_0x53942e[_0x5670b9(0xd1)](_0x5670b9(0xd5),router);},_default=initAPIRoutes;exports[_0x36231f(0xde)]=_default;