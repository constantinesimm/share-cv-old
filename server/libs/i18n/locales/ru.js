module.exports = {
    error: {
        accountAlreadyActive: 'Аккаунт пользователя уже активирован',
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
    },
    success: {
        accountActivated: 'Пользователь успешно активирован',
        accountUpdated: 'Пользователь обновлён',
        accountRemoved: 'Пользователь удалён',
        sentEmailInvite: 'Пользователю отправлено приглашение на email',
        sentPassRecoveryInviteLink: 'Ссылка на восстановление пароля отправлена на email',
        passwordRestored: 'Пароль успешно восстановлен. Для авторизации используйте ваш email и новый пароль'
    }
}