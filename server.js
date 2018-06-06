var thrift = require('thrift');
var translit_svc = require('./gen-nodejs/translit_svc.js');



var translit_svc_handler = {

    get_str: function(str, lang, result) {
        console.log(str);
        console.log(lang);
        var dic_ru = ['Я', 'я', 'Ю', 'ю', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'щ', 'Ж', 'ж', 'А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Д', 'д', 'Е', 'е', 'Ё', 'ё', 'З', 'з', 'И', 'и', 'Й', 'й', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ы', 'ы', 'Ь', 'ь', 'Ъ', 'ъ', 'Э', 'э'];
        var dic_en = ['Ya', 'ya', 'Yu', 'yu', 'Ch', 'ch', 'Sh', 'sh', 'Sh', 'sh', 'Zh', 'zh', 'A', 'a', 'B', 'b', 'V', 'v', 'G', 'g', 'D', 'd', 'E', 'e', 'E', 'e', 'Z', 'z', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'F', 'f', 'H', 'h', 'C', 'c', 'Y', 'y', '`', '`', '\'', '\'', 'E', 'e'];

        if (lang === 'btn_to_eng') {
            for (var i = 0; i < dic_ru.length; i++) {
                var reg1 = new RegExp(dic_ru[i], "g");
                str = str.replace(reg1, dic_en[i]);
            }
            console.log(str);
            result(null, str);
        } else {
            for (var j = 0; j < dic_en.length; j++) {
                var reg2 = new RegExp(dic_en[j], "g");
                str = str.replace(reg2, dic_ru[j]);
            }
//            console.log(str);
            result(null, str,lang);
        }
    }

};

var translit_svc_opt = {
    transport: thrift.TBufferedTransport,
    protocol: thrift.TJSONProtocol,
    processor: translit_svc,
    handler: translit_svc_handler
};

var server_options = {
    files: ".",
    staticFilePath: ".",
    services: {
        "/translit": translit_svc_opt
    }
};

var server = thrift.createWebServer(server_options);
var port = 9099;
server.listen(port);
console.log("Http/Thrift Server running on port: " + port);

