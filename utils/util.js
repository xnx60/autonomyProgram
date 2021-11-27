
Object.defineProperty(exports, "__esModule", { value: true });
function formatTime(date, dateSignTemp, timeSignTemp) {
    var dateSign = dateSignTemp ? dateSignTemp : "/";
    var timeSign = timeSignTemp ? timeSignTemp : ":";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return [year, month, day].map(formatNumber).join(dateSign) + ' ' + [hour, minute, second].map(formatNumber).join(timeSign);
}
exports.formatTime = formatTime;
function randomNumber() {
    return Math.round(Math.random() * 10000) + new Date().getTime() + "";
}
exports.randomNumber = randomNumber;
function copy(target, obj, defaults) {
    if (defaults) {
        copy(target, defaults);
    }
    if (target && obj && typeof obj === "object") {
        var i = void 0;
        for (i in target) {
            target[i] = obj[i];
        }
        for (i in obj) {
            target[i] = obj[i];
        }
    }
    return target;
}
exports.copy = copy;
function arrayRemove(array, removeEl) {
    if (array == null || removeEl == null) {
        return;
    }
    if (Array.isArray(removeEl)) {
        for (var j = 0, jlen = removeEl.length; j < jlen; j++) {
            for (var i = 0, ilen = array.length; i < ilen; i++) {
                if (array[i] === removeEl[j]) {
                    array.splice(i, 1);
                    break;
                }
            }
        }
    }
    else {
        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] === removeEl) {
                array.splice(i, 1);
                return;
            }
        }
    }
}
exports.arrayRemove = arrayRemove;
var formatNumber = function (n) {
    var str = n.toString();
    return str[1] ? str : '0' + str;
};