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
        customScope: "请输入修改范围(可选):",
        subject: "请输入简要描述(必填)：\n",
        body: '长描述，使用"|"换行(可选)：\n',
        confirmCommit: "确定提交?"
    },
    scopes: [
        ["components", "组件相关"],
        ["hooks", "hook 相关"],
        ["utils", "utils 相关"],
        ["views", "页面相关"],
        ["element-ui", "对 element-ui 的调整"],
        ["styles", "样式相关"],
        ["deps", "项目依赖"],
        ["config", "配置相关"],
        ["other", "其他修改"]
    ],
    allowCustomScopes: true,
    // 跳过问题
    skipQuestions: ["body", "footer"],
    // subject文字长度限制默认是72
    subjectLimit: 100
};
