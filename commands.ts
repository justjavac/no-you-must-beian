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
};
