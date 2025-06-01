#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 清除旧内容
rm -rf docs/.vitepress/dist

# 构建
npm run docs:build

# 进入构建输出目录
cd docs/.vitepress/dist

# 如果发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 替换为你的 GitHub 用户名和仓库名
git push -f git@github.com:Wuyule123/SDUCSGuide_test.git master

cd -
