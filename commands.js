"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
var ansi_colors_1 = require("ansi-colors");
exports.commands = {
    ls: {
        command: ["app", "react", "vue"],
        help: "list directory contents.",
    },
    cd: {
        command: ["".concat(ansi_colors_1.default.red("不得进入未备案的目录"), ": $1"),],
        help: "Change the shell working directory.",
        args: ["/home/justjavac"]
    },
    gcc: {
        command: [
            "$1:4:12: ".concat(ansi_colors_1.default.red("error"), ": \u4E0D\u5F97\u4F7F\u7528 printf \u8F93\u51FA\u672A\u5907\u6848\u5B57\u7B26\u4E32"),
            "",
            "    printf(\"Hello\uFF0Cworld\\n'):",
            "           ^",
            "1 error generated.",
        ],
        help: "GNU project C and C++ compile",
        args: ["unnamed.c"]
    },
    tsc: {
        command: [
            "".concat(ansi_colors_1.default.bgCyan("$1"), ":").concat(ansi_colors_1.default.yellow("43:7"), " - ").concat(ansi_colors_1.default.red("error"), " TS2322: \u4E0D\u80FD\u4F7F\u7528\u672A\u5907\u6848\u7684\u7C7B\u578B 'string'."),
            "",
            "  const str: string = \"hello world\";",
            "             ^",
            "Found 1 errors in the same file, starting at: commands.ts:1",
        ],
        help: "The TypeScript Compilere",
        args: ["index.ts"]
    },
};
var str = "hello world";
