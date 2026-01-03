function reverse(s) {
    let res = [];
    const helper = (s) => {
        if (s.length === 1) {
            res.unshift(s[0]);
            return;
        }
        res.unshift(s[0]);
        helper(s.slice(1));
    }
    helper(s);
    return res.join('');
}

//reverse('awesome')
// 'emosewa'

 reverse('rithmschool') // 'loohcsmhtir'
