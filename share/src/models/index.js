'use strict';var _0x5580cb=_0x3459;function _0x131b(){var _0x571d14=['associate','true','DB_USERNAME','slice','filter','development','config','DB_PORT','DB_PASSWORD','2757336UmWdiG','Sequelize','+07:00','28cfoJhx','basename','468235XeybCu','name','DataTypes','409350DhhFuG','5wLFELP','path','sequelize','readdirSync','DB_HOST','259362bEwHyu','join','forEach','280UObdfl','1229128HyLVJl','exports','2177248jTgXWo','93663agWSRn','DB_DIALECT','DB_DATABASE_NAME','indexOf','env','DB_SSL','keys'];_0x131b=function(){return _0x571d14;};return _0x131b();}(function(_0x3e6f05,_0x4131ee){var _0x5be578=_0x3459,_0xf595ad=_0x3e6f05();while(!![]){try{var _0x1e3dbe=parseInt(_0x5be578(0x8f))/0x1+-parseInt(_0x5be578(0x98))/0x2+parseInt(_0x5be578(0x92))/0x3+parseInt(_0x5be578(0x9e))/0x4+parseInt(_0x5be578(0x93))/0x5*(parseInt(_0x5be578(0x8a))/0x6)+-parseInt(_0x5be578(0x8d))/0x7*(parseInt(_0x5be578(0x9c))/0x8)+parseInt(_0x5be578(0x9f))/0x9*(-parseInt(_0x5be578(0x9b))/0xa);if(_0x1e3dbe===_0x4131ee)break;else _0xf595ad['push'](_0xf595ad['shift']());}catch(_0x3ecb52){_0xf595ad['push'](_0xf595ad['shift']());}}}(_0x131b,0x8bdf0));require('dotenv')[_0x5580cb(0x87)]();function _0x3459(_0x4f0871,_0x302a6b){var _0x131b43=_0x131b();return _0x3459=function(_0x34595f,_0xee722){_0x34595f=_0x34595f-0x7b;var _0x5c01dd=_0x131b43[_0x34595f];return _0x5c01dd;},_0x3459(_0x4f0871,_0x302a6b);}var fs=require('fs'),path=require(_0x5580cb(0x94)),Sequelize=require(_0x5580cb(0x95)),basename=path[_0x5580cb(0x8e)](__filename),env=process[_0x5580cb(0x7e)]['NODE_ENV']||_0x5580cb(0x86),db={},customizeConfig={'host':process['env'][_0x5580cb(0x97)],'dialect':process[_0x5580cb(0x7e)][_0x5580cb(0x7b)],'port':process['env'][_0x5580cb(0x88)],'logging':!0x1,'dialectOptions':_0x5580cb(0x82)===process[_0x5580cb(0x7e)][_0x5580cb(0x7f)]?{'ssl':{'require':!0x0,'rejectUnauthorized':!0x1}}:{},'timezone':_0x5580cb(0x8c),'define':{'freezeTableName':!0x0}},sequelize=new Sequelize(process[_0x5580cb(0x7e)][_0x5580cb(0x7c)],process[_0x5580cb(0x7e)][_0x5580cb(0x83)],process[_0x5580cb(0x7e)][_0x5580cb(0x89)],customizeConfig);fs[_0x5580cb(0x96)](__dirname)[_0x5580cb(0x85)](function(_0x116b5d){var _0x41a507=_0x5580cb;return 0x0!==_0x116b5d[_0x41a507(0x7d)]('.')&&_0x116b5d!==basename&&'.js'===_0x116b5d[_0x41a507(0x84)](-0x3);})[_0x5580cb(0x9a)](function(_0x222079){var _0x149caa=_0x5580cb;_0x222079=require(path[_0x149caa(0x99)](__dirname,_0x222079))(sequelize,Sequelize[_0x149caa(0x91)]),db[_0x222079[_0x149caa(0x90)]]=_0x222079;}),Object[_0x5580cb(0x80)](db)['forEach'](function(_0xdf6f00){var _0x1f61be=_0x5580cb;db[_0xdf6f00][_0x1f61be(0x81)]&&db[_0xdf6f00][_0x1f61be(0x81)](db);}),db[_0x5580cb(0x8b)]=Sequelize,db[_0x5580cb(0x95)]=sequelize,module[_0x5580cb(0x9d)]=db;