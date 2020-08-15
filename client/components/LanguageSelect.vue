<template>
    <el-select v-model="currentLang" value-key="value" size="mini" @change="changeLocale">
        <template slot="prefix">
            <img class="el-select__prefix-img" :src="currentLocale.flag" />
        </template>
        <el-option v-for="lang in languages" :key="lang.value" :value="lang">
            <img class="el-select__suffix-img" :src="lang.flag" />
        </el-option>
    </el-select>
</template>

<script>
import SetDefaultLocale from '@/mixins/SetDefaultLocale';
import enFlag from '../../public/img/flags/en.png';
import uaFlag from '../../public/img/flags/ua.png';
import ruFlag from '../../public/img/flags/ru.png';

export default {
    name: 'LanguageSelect',
    mixins: [SetDefaultLocale],
    data() {
        return {
            currentLang: null,
            languages: [
                {
                    value: 'en',
                    label: 'English',
                    flag: enFlag
                },
                {
                    value: 'uk',
                    label: 'Українська',
                    flag: uaFlag
                },
                {
                    value: 'ru',
                    label: 'Русский',
                    flag: ruFlag
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .el-select__suffix-img,
    .el-select__prefix-img {
        height: 20px;
        width: 20px;
    }
    .el-input__prefix {
        margin-top: 5px;
        left: 12px!important;
        cursor: pointer;
    }
    .el-input__suffix {
        right: -8px!important;
    }
    .el-select {
        width: 50px;
    }
    .el-select-dropdown__item {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        span {
            margin-left: 5px;
        }
    }
</style>