/*
 * @Author: lzy
 * @Date: 2023-05-18 17:29:34
 * @LastEditors: lzy
 * @LastEditTime: 2023-05-18 18:07:00
 * @FilePath: \vue3-form-drag\.cz-config.js
 *
 */
module.exports = {
    // 可选类型
    types: [
        { value: "feat", name: "✨ feat:     新功能" },
        { value: "test", name: "✅ test:     增加测试" },
        { value: "fix", name: "🐛 fix:      修复" },
        { value: "docs", name: "📝 docs:     文档变更" },
        { value: "style", name: "💄 style:    代码格式(不影响代码运行的变动)" },
        { value: "refactor", name: "♻️  refactor: 重构(既不是增加feature，也不是修复bug)" },
        { value: "perf", name: "⚡️ perf:     性能优化" },
        { value: "chore", name: "🔧 chore:    改变构建流程、或者增加依赖库、工具等" },
        { value: "revert", name: "⏪️ revert:   回退" }
    ],
    // 消息步骤
    messages: {
        type: "请选择提交类型(必填):",
        customScope: "请输入修改范围(可选):"
    },
    // 关闭scope关键词（我倒是关不掉...））
    scopes: [],
    allowCustomScopes: false,
    // 跳过问题
    skipQuestions: ["customScope", "footer"],
    // subject文字长度限制默认是72
    subjectLimit: 72
};