import PropTypes from 'prop-types'

function NumberFormat({ number }) {
    var numberFormated = number

    if (number > 999 && number < 1000000) {
        numberFormated = (number / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    } else if (number > 1000000) {
        numberFormated = (number / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }

    return numberFormated
}

NumberFormat.propTypes = {
    number: PropTypes.number.isRequired
}

export default NumberFormat;