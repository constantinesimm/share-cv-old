export default {
    pageTitles: {
        login: 'Share CV: Увійти',
        register: 'Share CV: Реєстрація',
        verify: 'Share CV: Підтвердження користувача',
        admin: 'Share CV: Головна',
        profile: 'Share CV: Профіль',
        landing: 'Share CV: Додаток для швидкого створення і розміщення резюме',
        createCV: 'Share CV: Створити резюме',
        previewCV: 'Share CV: Переглянути резюме'
    },
    copyright: {
        copyText: 'Авторські права',
        author: 'Костянтин Песчанов',
        rightsText: 'Всі права захищені'
    },
    buttons: {
        cancel: 'Відмінити',
        logout: 'Вихід',
        loginSubmit: 'Увійти',
        registerSubmit: 'Зареєструватись',
        restorePasswordModal: 'Забули пароль?',
        restorePasswordSubmit: 'Скинути пароль'
    },
    forms: {
        titles: {
            login: 'Увійти',
            register: 'Зареєструватись',
            verify: 'Перевірка email',
            restorePassword: 'Забули пароль?'
        },
        emailField: {
            label: 'Ел. пошта',
            placeholder: 'Введіть вашу ел. пошту'
        },
        secretField: {
            label: 'Пароль',
            placeholder: 'Введіть ваш пароль'
        },
        confirmSecretField: {
            label: 'Підтвердження паролю',
            placeholder: 'Введіть підтверждення паролю'
        }
    },
    links: {
        registerPage: 'Створити новий аккаунт?',
        loginPage: 'Увійти в аккаунт'
    },
    tooltips: {
        writeEmail: 'Написати на email'
    },
    validator: {
        email: {
            format: 'Некоректний формат поля "Email"',
            require: 'Email обов\'язковий'
        },
        pass: {
            lowerCase: 'Пароль повинен містити хоча б 1 букву латиниці в нижньому регістрі',
            upperCase: 'Пароль повинен містити хоча б 1 букву латиниці в верхньому регістрі',
            digit: 'Пароль повинен містити хоча б 1 цифру',
            format: 'Некоректний формат поля "Пароль"',
            length: 'Пароль повинен бути довжиною від 6 до 14 символів',
            match: 'Пароль і підтверждення пароля не співпадають',
            require: 'Пароль обов\'язковий',
            requireMatch: 'Підтвердження паролю обов\'язкове'
        },
        name: {
            format: 'Поле може містити тільки букви латиниці і кирилиці, пробіл і тире',
            requireFirst: 'Ім\'я обов\'язковe',
            requireLast: 'Прізвище обов\'язкове',
            length: 'Довжина повинна бути від 4 до 20 символів'
        },
        gender: 'Поле "Стать" обов\'язковe',
        phone: {
            format: 'Некоректний формат номера',
            require: 'Номер телефону обов\'язковий',
            length: 'Довжина номера повинна бути 12 цифр'
        }
    }
}