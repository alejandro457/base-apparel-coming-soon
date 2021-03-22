((d) => {
    const form = d.getElementById('form');
    const email = form.querySelector('.email__input');

    const pageTitle = d.title;
    const messages = {
        success: 'Thanks! Your email has been registered',
        empty: 'Please enter your email address',
        invalid: 'Please provide a valid email'
    }

    const showMessage = (message, color, classAdd) => {
        form.style = `--message: '${message}'; --color: var(${color});`;
        form.classList.add(classAdd);
        d.title = message + ' | ' + pageTitle;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if(email.checkValidity()) {
            showMessage(messages.success, '--desaturated-red', 'email--alert');
            form.reset();
        } 
    });

    email.addEventListener('invalid', () => {
        if (email.value.length === 0) {
            showMessage(messages.empty, '--desaturated-red', 'email--alert');
        }
        else {
            showMessage(messages.invalid, '--soft-red', 'email--invalid');
        }
    });

    email.addEventListener('focus', () => {
        form.classList.remove('email--invalid', 'email--alert');
    });

})(document);
