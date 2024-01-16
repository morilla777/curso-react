const { isValid, parse} = require('date-fns');
const { esCL } =  require('date-fns/locale');

const isDate = ( value ) => {

    if( !value ){
        return false;
    }

    const parsed = parse(value, 'T', new Date(), { locale: esCL })

    return isValid(parsed);

}

module.exports = { isDate }