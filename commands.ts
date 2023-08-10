import c from "ansi-colors";

export interface Command {
  help: string;
  command: string[];
  args?: string[];  // 默认参数
}

export const commands: Record<string, Command> = {
  ls: {
    command: ["app", "react", "vue"],
    help: "list directory contents.",
  },
  cd: {
    command: [`${c.red("不得进入未备案的目录")}: $1`,],
    help: "Change the shell working directory.",
    args: ["/home/justjavac"]
  },
  rm: {
    command: [`${c.yellow("🎉 恭喜你，所有没有备案的目录都已经全部删除")}`,],
    help: "remove directory entries.",
  },
  npm: {
    command: [
      `npm ${c.red("ERR!")} ${c.cyan("code E250")}`,
      `npm ${c.red("ERR!")} ${c.cyan("250")} GET https://registry.npmjs.org/$2`,
      `npm ${c.red("ERR!")} ${c.cyan("250")}`,
      `npm ${c.red("ERR!")} ${c.cyan("250")}`,
      `npm ${c.red("ERR!")} ${c.cyan("250")} ${c.red("不得安装未备案的包 `$2@*`")}`,
      ``,
      `npm ${c.red("ERR!")} A complete log of this run can be found in: /Users/justjavac/.npm/_logs/unbeianed.log`,
    ],
    help: "add the <foo> dependency to your project.",
    args: ['', "foo"]
  },
  gcc: {
    command: [
      `$1:4:12: ${c.red("error")}: 不得使用 printf 输出未备案字符串`,
      "",
      `    printf("Hello，world\\n'):`,
      `           ^`,
      `1 error generated.`,
    ],
    help: "GNU project C and C++ compile",
    args: ["unnamed.c"]
  },
  tsc: {
    command: [
      `${c.cyan("$1")}:${c.yellow("43:7")} - ${c.red("error")} TS2322: 不能使用未备案的类型 'string'.`,
      "",
      `${c.bgCyan("43")}  const str: string = "hello world";`,
      `               ~~~~~~`,
      `Found 1 error in $1:43`,
    ],
    help: "The TypeScript Compiler.",
    args: ["index.ts"]
  },
};

const str: string = "hello world";

