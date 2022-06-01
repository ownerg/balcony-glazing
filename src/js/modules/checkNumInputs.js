const checkNumInputs = (selector) => {
    const numnInputs  = document.querySelectorAll(selector);

    numnInputs.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        })
    })
    
};


export default checkNumInputs;