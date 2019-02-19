var fortunes = [
    "huaQ",
    "rua",
    "我燃烧你的梦",
    "他要吃人啦",
];

exports.getFortune = function(){
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};