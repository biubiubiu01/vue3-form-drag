/*
 * @Author: lzy
 * @Date: 2023-06-16 11:03:40
 * @LastEditors: lzy
 * @LastEditTime: 2023-06-19 14:37:20
 * @FilePath: \vue3-form-drag\src\constant\date.ts
 *
 */
export const dateOption = [
    {
        label: "日(date)",
        value: "date",
        format: "YYYY/MM/DD",
        valueFormat: "YYYY-MM-DD"
    },
    {
        label: "月(month)",
        value: "month",
        format: "YYYY-MM",
        valueFormat: "YYYY-MM"
    },
    {
        label: "年(year)",
        value: "year",
        format: "YYYY",
        valueFormat: "YYYY"
    },
    {
        label: "日期时间(datetime)",
        value: "datetime",
        format: "YYYY-MM-DD HH:mm:ss",
        valueFormat: "YYYY-MM-DD HH:mm:ss"
    }
];

export const dateRangeOption = [
    {
        label: "日期范围(daterange)",
        value: "daterange",
        format: "YYYY/MM/DD",
        valueFormat: "YYYY-MM-DD"
    },
    {
        label: "月份范围(monthrange)",
        value: "monthrange",
        format: "YYYY-MM",
        valueFormat: "YYYY-MM"
    },
    {
        label: "日期时间范围(datetimerange)",
        value: "datetimerange",
        format: "YYYY-MM-DD HH:mm:ss",
        valueFormat: "YYYY-MM-DD HH:mm:ss"
    }
];
