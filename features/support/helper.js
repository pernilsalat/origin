module.exports = {
    randomStr: function(size = 5) {
        let charset = "abcdefghijklmnopqrstuvwxyz"; //from where to create
        let i=0, ret='';
        while(i++<size)  ret += charset.charAt(Math.random() * charset.length)
        return ret
    }
}