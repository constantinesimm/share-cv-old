export default {
    pageTitles: {
        login: 'Share CV: Войти',
        register: 'Share CV: Регистрация',
        verify: 'Share CV: Подтверждение пользователя',
        admin: 'Share CV: Главная',
        profile: 'Share CV: Профиль',
        landing: 'Share CV: Приложение для быстрого создания и размещения резюме',
        createCV: 'Share CV: Создать резюме',
        previewCV: 'Share CV: Просмотреть резюме'
    },
    copyright: {
        copyText: 'Авторские права',
        author: 'Константин Песчанов',
        rightsText: 'Все права защищены'
    },
    buttons: {
        cancel: 'Отмена',
        logout: 'Выход',
        loginSubmit: 'Войти',
        registerSubmit: 'Зарегистрироваться',
        restorePasswordModal: 'Забыли пароль?',
        restorePasswordSubmit: 'Сбросить пароль',
    },
    forms: {
        titles: {
            login: 'Войти',
            register: 'Зарегистрироваться',
            verify: 'Подтверждение email',
            restorePassword: 'Забыли пароль?'
        },
        emailField: {
            label: 'Эл. почта',
            placeholder: 'Введите вашу эл. почту'
        },
        secretField: {
            label: 'Пароль',
            placeholder: 'Введите ваш пароль'
        },
        confirmSecretField: {
            label: 'Подтверждение пароля',
            placeholder: 'Введите ваше подтверждение пароля'
        }
    },
    links: {
        registerPage: 'Создать новый аккаунт',
        loginPage: 'Войти в аккаунт'
    },
    tooltips: {
        writeEmail: 'Написать на email'
    },
    validator: {
        email: {
            format: 'Некорректный формат поля "Email"',
            require: 'Email обязателен'
        },
        pass: {
            lowerCase: 'Пароль должен содержать хотя бы 1 букву латиницы в нижнем регистре',
            upperCase: 'Пароль должен содержать хотя бы 1 букву латиницы в верхнем регистре',
            digit: 'Пароль должен содержать хотя бы 1 цифру',
            format: 'Некорректный формат поля "Пароль"',
            length: 'Пароль должен быть длиной от 6 до 14 символов',
            match: 'Пароль и подтверждение пароля не совпадают',
            require: 'Пароль обязателен',
            requireMatch: 'Подтверждение пароля обязательно'
        },
        name: {
            format: 'Поле может содержать только буквы латиницы и кириллицы, пробел и тире',
            requireFirst: 'Имя обязательно',
            requireLast: 'Фамилия обязательна',
            length: 'Длина должна быть от 4 до 20 символов'
        },
        gender: 'Поле "Пол" обязательно',
        phone: {
            format: 'Некорректный формат номера',
            require: 'Номер телефона обязателен',
            length: 'Длина номера должна быть 12 цифр'
        }
    }
}