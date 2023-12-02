## This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

## Prerequisites:

- [Node Js](https://nodejs.org/en/)
- [Linux or WSL](https://learn.microsoft.com/en-us/windows/wsl/install)
- [Git LFS Plugin](https://git-lfs.com/)

It is recommended to install Git Large File Storage plugin (WSL also):
- [Download for Ubuntu/Debian](https://github.com/git-lfs/git-lfs/blob/main/INSTALLING.md)
- [Download for Windows](https://github.com/git-lfs/git-lfs/releases/download/v3.4.0/git-lfs-windows-v3.4.0.exe)
  
Then setup git-lfs with the command:
```bash
git lfs install
```
Then check if git-lfs is installed correctly by running:
```bash
git lfs
```

## Getting Started

First, run the development pocketbase server:

```bash
cd /pocketbase_linux_amd64
# then
./pocketbase serve
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Pocketbase admin UI: [http://127.0.0.1:8090/\_/](http://127.0.0.1:8090/_/) .
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
