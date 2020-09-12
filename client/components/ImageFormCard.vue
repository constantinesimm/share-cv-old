<template>
    <div class="card">
        <div class="card-image-side image-side">
            <div class="image-side-header">{{ $t('card.image-side-title') }}</div>
            <div class="image-side-text">
                {{ imageText }}
            </div>
        </div>
        <div class="card-form-side form-side">
            <div class="form-side-header">
                <router-link class="form-side-header__link" to="/app">
                    <span class="form-side-header__title">Share</span>
                    <img class="form-side-header__img" src="@/assets/img/share-logo.png" />
                </router-link>
            </div>
            <div class="form-side-body">
                <slot name="default"></slot>
            </div>
            <div class="form-side-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ImageFormCard',
        props: {
            imageText: String
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        width: 60%;

        .image-side {
            width: 40%;
            padding: 80px 40px;
            background: url('../assets/img/air-baloon.jpg');
            background-size: cover;
            border-bottom-left-radius: 15px;
            border-top-left-radius: 15px;

            &-header {
                color: #ffffff;
                font-size: 36px;
            }

            &-text {
                color: #ffffff;
                font-size: 18px;
            }
        }
        .form-side {
            width: 60%;
            padding: 80px;
            background: #ffffff;
            border-bottom-right-radius: 15px;
            border-top-right-radius: 15px;

            &-header {
                display: flex;
                justify-content: start;

                &__link {
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    color: #409EFF;
                    margin-bottom: 60px;

                    &:visited {
                        color: #409EFF;
                    }
                }
                &__title {
                    font-size: 36px;
                    font-weight: 500;
                    font-style: italic;
                    margin-right: 5px;
                }

                &__img {
                    width: 50px;
                }
            }

            &-footer {
                display: flex;
                justify-content: center;
            }
        }
    }
</style>
