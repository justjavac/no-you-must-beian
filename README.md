# 请备案

收集关于备案引发的梗。

![](./public/screen.png)

## 项目介绍

### gcc

```bash
$ gcc hello.c
hello.c:4:12: error: 不得使用 printf 输出未备案字符串

    printf("Hello，world\n'):
           ^
1 error generated.
```

### cd

```bash
$ cd  
不得进入未备案的目录: /home/justjavac
```

### tsc

```bash
$ tsc
index.ts:43:7 - error TS2322: 不能使用未备案的类型 'string'.

43  const str: string = "hello world";
               ~~~~~~
Found 1 error in index.ts:43
```

### npm

```bash
$ npm i react
npm ERR! code E250
npm ERR! 250 GET https://registry.npmjs.org/react
npm ERR! 250
npm ERR! 250
npm ERR! 250 不得安装未备案的包 react@*

npm ERR! A complete log of this run can be found in: /Users/justjavac/.npm/_logs/unbeianed.log
```

### License

内容来自网友、群友、推友的分享，如有侵权请联系我删除。
