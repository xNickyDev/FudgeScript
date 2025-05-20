# Creating your first Extension

## Before you start...
Make sure you have `node` installed on your machine, you can verify this by using `node -v` on a terminal like Windows CMD.

> If you don't have `node` installed, you can get it [here](https://nodejs.org/en/download).

## Creating a Workspace
Create a new folder, somewhere in your machine, let's name it `my-first-extension`, now let's open it with an IDE like Visual Studio Code.

Once opened, open a terminal, and run the following commands:
1.  ```bash
    npm i --g typescript
    ```
2.  ```bash
    npm init --y
    ```
3.  ```bash
    npm i typescript github:tryforge/ForgeScript#dev --save-dev
    ```
4.  ```bash
    tsc --init --target es2022 --rootdir src --outdir dist
    ```

Now then, let's create a folder called `src`, which is where all our code will reside.

## Compiling your Changes
Before you push your changes to GitHub, make sure to compile them. We use TypeScript therefore compiling is a mandatory step in the development of an extension.

After you are done with your changes, run the following command in the terminal:
```bash
tsc
```

Technically, after the process has finished, everything is now ready to be pushed to your repository on GitHub.

If you want to generate metadata and docs for your extension, **do not** push your changes already after compiling. Instead, read [the next step](#generating-metadata--docs).

## Generating Metadata & Docs


```bash
npm run docgen
```
**or**
```bash
npm run commit
```
