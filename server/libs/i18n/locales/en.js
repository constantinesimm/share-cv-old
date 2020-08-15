module.exports = {
    error: {
        accountAlreadyActive: 'User account is already activated',
        incorrectRegisterLink: 'Access is denied. Incorrect registration link. Use the password recovery functionality',
        incorrectLinkNotFound: 'Incorrect registration link. User is not found',
        incorrectSessionToken: 'Invalid session token. Re-authorize',
        incorrectTokenData: 'Invalid token data',
        linkExpired: 'The link has expired. Use the password recovery functionality',
        resourceForbidden: 'Access to this resource is prohibited!',
        sessionExpired: 'The session has expired. Re-authorize',
        userEmailExists: 'User with this email exists',
        userNotFound: 'Пользователь не найден',
        userAlreadyRegister: 'User is already registered',
        userNotAuthenticated: 'Authorization is required to access this resource',
        onlyNotAuthUsers: 'The resource is available only to new visitors',
    },
    success: {
        accountActivated: 'User successfully activated',
        accountUpdated: 'User successfully updated',
        accountRemoved: 'User successfully removed',
        sentEmailInvite: 'Invite successfully sent to user email',
        sentPassRecoveryInviteLink: 'Password recovery link has been successfully sent to your email',
        passwordRestored: 'The password was successfully recovered. For authorization use your email and new password'
    }
}