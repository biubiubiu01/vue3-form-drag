<template>
    <el-popover ref="quarterPopover" trigger="click" :visible="pickerVisible" popper-class="el-date-picker base-quarter-popover" :width="width">
        <template #reference>
            <el-input
                class="el-date-editor"
                :disabled="disabled"
                :size="size"
                :prefix-icon="prefixIcon"
                :placeholder="placeholder"
                v-model="displayValue"
                :validate-event="false"
                :clearable="clearable"
                @click="pickerVisible = true"
                @clear="handleClickIcon"
            />
        </template>
        <div v-click-outside="closePopover" class="el-date-picker">
            <div class="el-date-picker__header el-date-picker__header--bordered">
                <span role="button" class="el-date-picker__prev-btn">
                    <button type="button" aria-label="前一年" class="el-picker-panel__icon-btn" @click="getPrevYear">
                        <base-icon icon="DArrowLeft" />
                    </button>
                </span>
                <span role="button" class="el-date-picker__header-label">{{ year }}年</span>
                <span role="button" class="el-date-picker__next-btn">
                    <button type="button" aria-label="后一年" class="el-picker-panel__icon-btn" @click="getNextYear">
                        <base-icon icon="DArrowRight" />
                    </button>
                </span>
            </div>
            <div class="el-picker-panel__content" style="margin: 10px 15px">
                <table class="base-quarter-table" @click="handleTableClick">
                    <tbody>
                        <tr>
                            <td class="available" :class="getCellStyle(0)">
                                <a class="cell">第一季度</a>
                            </td>
                            <td class="available" :class="getCellStyle(1)">
                                <a class="cell">第二季度</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="available" :class="getCellStyle(2)">
                                <a class="cell">第三季度</a>
                            </td>
                            <td class="available" :class="getCellStyle(3)">
                                <a class="cell">第四季度</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </el-popover>
</template>

<script lang="ts" setup>
import { dayjs, ClickOutside as vClickOutside } from "element-plus";
import { hasClass } from "element-plus/es/utils/dom/style";

const props = defineProps({
    size: {
        type: String
    },
    width: {
        type: String,
        default: "324px"
    },
    format: {
        type: String,
        default: "YYYY-第q季度"
    },
    placeholder: {
        type: String,
        default: "请选择季度"
    },
    disabled: Boolean,
    clearable: {
        type: Boolean,
        default: true
    },
    disabledDate: {
        type: [Date, Function]
    }, // 不可用的日期
    modelValue: {
        type: [String, Date],
        default: ""
    },
    prefixIcon: {
        type: String,
        default: "Calendar"
    }
});

const emit = defineEmits(["update:modelValue"]);

const pickerVisible = ref(false);

const date = ref();

const quarter = ref();

const quarterText = ["一", "二", "三", "四"];

const parsedValue = computed(() => {
    if (!props.modelValue) {
        return new Date();
    }
    return new Date(props.modelValue);
});

const displayValue = computed(() => {
    if (!props.modelValue) return null;
    // 季度，从0开始
    const quarter = ~~(parsedValue.value.getMonth() / 3);

    let fDate = formatDate(parsedValue.value, props.format);
    fDate = fDate.replace(/q/, quarter + 1 + "").replace(/Q/, quarterText[quarter]);
    return fDate;
});

const year = computed(() => date.value.getFullYear());

const range = function (n: number) {
    return Array.from({ length: n }).map((_, n: number) => n);
};

const formatDate = function (date: Date, format: string) {
    if (!date) return "";
    return dayjs(date).format(format);
};

const handleClickIcon = () => {
    emit("update:modelValue", "");
};

const handleTableClick = (event: MouseEvent) => {
    let target = event.target as HTMLElement;
    if (target.tagName === "A") {
        target = target.parentNode as HTMLTableCellElement;
    }
    if (target.tagName !== "TD") return;
    if (hasClass(target, "disabled")) return;
    const column = (target as HTMLTableCellElement).cellIndex;
    const row = (target.parentNode as HTMLTableRowElement).rowIndex;
    // 季度，从0开始
    const currentQuarter = row * 2 + column;
    // 季度开始月份，从0开始
    const month = currentQuarter * 3;
    const newDate: Date | string = new Date(year.value, month, 1);
    quarter.value = currentQuarter + 1;
    emit("update:modelValue", newDate.toString());
    pickerVisible.value = false;
};

/**
 * 获取指定年份和季度的所有日期
 * @param year
 * @param quarter
 */
const datesInYearAndQuarter = (year: number, quarter: number): any => {
    const numOfDays = getDayCountOfQuarter(year, quarter);
    const firstDay = new Date(year, quarter * 3, 1);
    return range(numOfDays).map((n: number) => nextDate(firstDay, n));
};

const nextDate = function (date: Date, amount = 1) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
};

const getPrevYear = () => {
    date.value = prevYear(date.value);
};
const getNextYear = () => {
    date.value = nextYear(date.value);
};

const prevYear = function (date: any, amount = 1) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return changeYearMonthAndClampDate(date, year - amount, month);
};
const nextYear = function (date: any, amount = 1) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return changeYearMonthAndClampDate(date, year + amount, month);
};

const changeYearMonthAndClampDate = function (date: Date, year: number, month: number) {
    const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
    return modifyDate(date, year, month, monthDate);
};

const getDayCountOfMonth = function (year: number, month: number) {
    if (isNaN(+month)) return 31;
    return new Date(year, +month + 1, 0).getDate();
};
const modifyDate = function (date: Date, y: number, m: number, d: number) {
    return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};

const closePopover = () => {
    pickerVisible.value = false;
};

/**
 * 获取指定年份和季度总天数
 * @param year
 * @param quarter
 */
const getDayCountOfQuarter = (year: number, quarter: number) => {
    switch (quarter) {
        case 0: // 第一季度包含二月，需要对是否闰年进行判断处理
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                return 91;
            } else {
                return 90;
            }
        case 1:
            return 91;
        default:
            return 92;
    }
};

const getCellStyle = (quarter: number) => {
    const today = new Date();
    const date = parsedValue.value;

    return {
        disabled: typeof props.disabledDate === "function" ? datesInYearAndQuarter(year.value, quarter).every(props.disabledDate) : false,
        // 当前选中的季度样式
        current: date.getFullYear() === year.value && ~~(date.getMonth() / 3) === quarter
    };
};

watch(
    () => props.modelValue,
    (val) => {
        date.value = val ? parsedValue.value : new Date();
    },
    {
        immediate: true
    }
);
</script>

<style lang="scss">
.base-quarter-popover {
    padding: 0 !important;
    .base-quarter-table {
        font-size: 12px;
        margin: -1px;
        border-collapse: collapse;
        width: 100%;
        td {
            text-align: center;
            padding: 10px 3px;
            cursor: pointer;
            .cell {
                height: 32px;
                display: block;
                line-height: 32px;
                color: #606266;
                margin: 0 auto;
            }
            &:hover {
                color: #1890ff;
            }
            &.current:not(.disabled) {
                .cell {
                    color: #409eff;
                }
            }
            &.quarter {
                .cell {
                    color: #409eff;
                    font-weight: 700;
                }
            }
            &.disabled {
                .cell {
                    background-color: #f5f7fa;
                    cursor: not-allowed;
                    color: #c0c4cc;
                }
            }
        }
    }
}
</style>
