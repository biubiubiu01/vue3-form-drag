/*
 * @Author: lzy
 * @Date: 2023-05-18 17:11:36
 * @LastEditors: lzy
 * @LastEditTime: 2023-05-19 11:43:27
 * @FilePath: \vue3-form-drag\commitlint.config.cjs
 *
 */
module.exports = {
    extends: ["@commitlint/config-conventional", "cz"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "feat", // 新功能
                "fix", // 修复bug
                "refactor", // 重构
                "docs", // 文档
                "chore", // 增加依赖或库
                "style", // 格式（不影响代码变动）
                "revert", // 撤销commit 回滚上一版本
                "perf", // 性能优化
                "test" // 测试单元
            ]
        ],
        "type-case": [0],
        "type-empty": [0],
        "scope-empty": [0],
        "scope-case": [0],
        "subject-full-stop": [0, "never"],
        "subject-case": [0, "never"],
        "header-max-length": [0, "always", 72]
    }
};
