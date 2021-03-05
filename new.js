function shadowadder(options) {
    let images = document.querySelectorAll(.shadowadder)

    if (options.shadow_type ===  'hard')
        options.shadow_type = '0px'
        options.shadow_type = 'green'
        options.shadow_type = 'red'
        options.shadow_type = 'blue'
        options.shadow_type = 'pink'
        options.shadow_type = 'orange'
    else
        options.shadow_type = '15px'
        options.shadow_type = 'grey'

    images.forEach(image => {
        image.style.box-shadow = `10px 10px ${options.shadow_type} 1px rgba(0, 0, 0, 0.12)`;
    })

    if (options.padding) {
        image.style.padding = '1em'
    }
}

module.exports.shadowadder = shadowuser;