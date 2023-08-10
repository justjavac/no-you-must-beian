"use client";

import { useEffect, useRef } from "react";
import { ITheme, Terminal } from "xterm";
import c from "ansi-colors";
import { WebLinksAddon } from "xterm-addon-web-links";
import { FitAddon } from "xterm-addon-fit";
import { commands } from "../commands";

let command = "";

function termPprompt(term: Terminal) {
  command = "";
  term.write("\r\n$ ");
}

function runCommand(term: Terminal, text: string) {
  const [command, ...args] = text.trim().split(" ");

  if (command === "help") {
    term.writeln("");
    term.writeln(
      `可用命令：${c.cyan("(只列出了部分命令，如需查看所有命令请备案)")}`,
    );
    term.writeln("");
    Object.entries(commands).forEach(([key, command]) => {
      term.writeln(`${key} - ${command.help}`);
    });
  } else if (command.length > 0) {
    term.writeln("");
    if (command in commands) {
      term.writeln(
        commands[command].command
          .join("\n\r")
          .replace(/\$(\d+)/g, (match, group) => {
            const index = parseInt(group) - 1;
            return args[index] ?? commands[command].args?.[index];
          }),
      );
    } else {
      term.writeln(`${command}: command not found`);
    }
  }
  termPprompt(term);
}

const baseTheme: ITheme = {
  foreground: "#F8F8F8",
  background: "#2D2E2C",
  black: "#1E1E1D",
  brightBlack: "#262625",
  red: "#CE5C5C",
  brightRed: "#FF7272",
  green: "#5BCC5B",
  brightGreen: "#72FF72",
  yellow: "#CCCC5B",
  brightYellow: "#FFFF72",
  blue: "#5D5DD3",
  brightBlue: "#7279FF",
  magenta: "#BC5ED1",
  brightMagenta: "#E572FF",
  cyan: "#5DA5D5",
  brightCyan: "#72F0FF",
  white: "#F8F8F8",
  brightWhite: "#FFFFFF",
};

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const term = new Terminal({
      fontFamily: '"Cascadia Code", Menlo, monospace',
      theme: baseTheme,
      cursorBlink: true,
      allowProposedApi: true,
    });
    const fitAddon = new FitAddon();
    const webLinksAddon = new WebLinksAddon();
    term.loadAddon(fitAddon);
    term.loadAddon(webLinksAddon);
    term.open(ref.current!);
    fitAddon.fit();

    term.writeln(
      [
        "",
        "                                 \x1b[31;1m未备案\x1b[0m",
        ` ┌─ ${c.red("No!")} ${c.magenta("You Must")} ${
          c.bold(
            c.magenta("BeiAn"),
          )
        } ───────────────────────────────────────────────────────┐`,
        " │                                                                            │",
        ` │                         ${c.white("富强")}    ${
          c.red(
            "民主",
          )
        }    ${c.green("文明")}    ${
          c.yellow(
            "和谐",
          )
        }                       │`,
        " │                                                                            │",
        ` │                         ${c.blue("自由")}    ${
          c.magenta(
            "平等",
          )
        }    ${c.cyan("公正")}    ${c.white("法治")}                       │`,
        " │                                                                            │",
        ` │                         ${c.white("爱国")}    ${
          c.red(
            "敬业",
          )
        }    ${c.green("诚信")}    ${
          c.yellow(
            "友善",
          )
        }                       │`,
        " │                                                                            │",
        " └────────────────────────────────────────────────────────────────────────────┘",
        "",
      ].join("\n\r"),
    );

    term.writeln(
      `这是一个\x1b[31;1m未备案\x1b[0m模拟器，获取帮助请输入 \`help\``,
    );
    termPprompt(term);

    term.onData((e) => {
      switch (e) {
        case "\u0003": // Ctrl+C
          term.write("^C");
          termPprompt(term);
          break;
        case "\r": // Enter
          runCommand(term, command);
          command = "";
          break;
        case "\u007F": // Backspace (DEL)
          // Do not delete the prompt
          if ((term as any)._core.buffer.x > 2) {
            term.write("\b \b");
            if (command.length > 0) {
              command = command.substr(0, command.length - 1);
            }
          }
          break;
        default: // Print all other characters for demo
          if (
            (e >= String.fromCharCode(0x20) &&
              e <= String.fromCharCode(0x7e)) ||
            e >= "\u00a0"
          ) {
            command += e;
            term.write(e);
          }
      }
    });
  }, [ref]);

  return <div style={{ height: "100vh" }} ref={ref}></div>;
}
