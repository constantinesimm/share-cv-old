module.exports = {
    error: {
        accountAlreadyActive: 'Аккаунт пользователя уже активирован',
        accountNotActive: 'Аккаунт не подтверждён. Нужно завершить регистрацию!',
        incorrectRegisterLink: 'Доступ запрещён. Некорректная ссылка регистрации. Воспользуйтесь функционалом восстановления пароля',
        incorrectLinkNotFound: 'Некорректная ссылка регистрации. Пользователь не найден',
        incorrectSessionToken: 'Некорректный токен сессии. Пройдите авторизацию повторно',
        incorrectTokenData: 'Некорректные данные токена',
        linkExpired: 'Срок действия ссылки истёк. Воспользуйтесь функционалом восстановления пароля',
        resourceForbidden: 'Доступ к данному ресурсу запрещён!',
        sessionExpired: 'Срок действия сессии истёк. Пройдите авторизацию повторно',
        userEmailExists: 'Пользователь с таким email существует',
        userNotFound: 'Пользователь не найден',
        userAlreadyRegister: 'Пользователь уже зарегистрирован',
        userNotAuthenticated: 'Для доступа к этому ресурсу необходима авторизация',
        onlyNotAuthUsers: 'Ресурс доступен только новым посетителям',
        incorrectCredentials: 'Не правильный логин или пароль'
    },
    success: {
        accountActivated: 'Пользователь успешно активирован',
        accountUpdated: 'Пользователь обновлён',
        accountRemoved: 'Пользователь удалён',
        sentEmailInvite: 'Пользователю отправлено приглашение на email',
        sentPassRecoveryInviteLink: 'Ссылка на восстановление пароля отправлена на email',
        passwordRestored: 'Пароль успешно восстановлен. Для авторизации используйте ваш email и новый пароль'
    },
    validate: {
        // email
        emailRegexp: 'Некорректный формат эл. почты',
        emailRequired: 'Необходимо указать email пользователя',

        // secret
        secretMinLength: 'Длина пароля должна быть минимум 6 символов',
        secretMaxLength: 'Длина пароля должна быть не более 14 символов',
        secretRegexp: 'Пароль должен длинной от 6 до 14 символов и содержать хотя бы 1 цифру, 1 заглавную и 1 строчную буквы латинского алфавита!',
        secretRequired: 'Необходимо указать пароль пользователя',

        // token
        tokenMinLength: 'Некорректный формат токена',
        tokenRequired: 'Токен обязателен к передаче',

        //firstname
        firstNameMinLength: 'Длина имени должна быть не менее 4 символов',
        firstNameMaxLength: 'Длина имени должна быть не более 20 символов',
        firstNameRegexp: 'Имя может состоять только из кириллических букв (Укр/Рус)',
        firstNameRequired: 'Необходимо указать имя пользователя',

        // lastname
        lastNameMinLength: 'Длина фамилии должна быть не менее 4 символов',
        lastNameMaxLength: 'Длина фамилии должна быть не более 20 символов',
        lastNameRegexp: 'Фамилия может состоять только из кириллических букв (Укр/Рус)',
        lastNameRequired: 'Необходимо указать фамилию пользователя',

        // sex
        sexEnum: 'Нужно выбрать корректное значение поля "Пол"',
        sexRequired: 'Необходимо выбрать пол пользователя',

        // phone number
        phoneNumberRegexp: 'Некорректный формат номера телефона',
        phoneNumberRequired: 'Необходимо указать номер телефона пользователя',
        birthdayFormat: 'Некорректный формат даты рождения',
    },
    email: {
        recipient: 'Пользователь',
        subjects: {
            registerConfirm: 'Share CV | Подтверждение email',
		    registerComplete: 'Share CV | Аккаунт успешно активирован',
		    passwordRestore: 'Share CV | Восстановление пароля',
		    passwordRestoreComplete: 'Share CV | Пароль успешно восстановлен'
        },
        register: {
            greetings: 'Добро пожаловать!',
            headerText: 'Благодарим вас за регистрацию и искринне надеемся, что наш сервис поможет вам достигнуть поставленной цели :)',
            bodyContent: 'Для завершения регистрации и активации аккаунта, перейдите по ссылке.',
            bodyWarning: 'Обратите внимание!',
            bodyLinkExpiresText: 'Ссылка действительна в течении 24 часов!',
            buttonText: 'Подтвердить email'
        },
        activated: {
            greetings: 'Здраствуйте, !',
            headerText: 'Ваш аккаунт успешно активирован.',
            bodyContent: 'Для входа в админпанель сервиса используйте ваш email и пароль.',
            bodyLoginLink: 'Страница авторизации доступна по ссылке ниже.',
            buttonText: 'Переход в админпанель'
        },
        passRecovery: {
            greetings: 'Здраствуйте, !',
            headerText: 'Мы получили запрос на восстановление пароля к вашему аккаунту.',
            bodyContent: 'Для сброса пароля и реактивации аккаунта, перейдите по ссылке.',
            bodyWarning: 'Обратите внимание!',
            bodyLinkExpiresText: 'Ссылка действительна в течении 24 часов!',
            buttonText: 'Сбросить пароль'
        },
        passRecoveryComplete: {
            greetings: 'Здраствуйте, !',
            headerText: 'Пароль успешно восстановлен, аккаунт активирован.',
            bodyContent: 'Можете пройти авторизацию используя ваш email и новый пароль.',
            bodyLoginLink: 'Страница авторизации доступна по ссылке ниже.',
            buttonText: 'Переход в админпанель'
        }
    }
}