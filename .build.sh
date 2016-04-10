#!/bin/bash

if test "cnpm -v 2>/dev/null" ;then
  echo "run cnpm install"
else
  echo "npm install cnpm --registry https://registry.npm.taobao.org -g"
  npm install cnpm --registry https://registry.npm.taobao.org -g
fi

cnpm install

folderName=`git remote -v | grep push`
if [ "$?" != "0" ]; then
  echo "必须先初始化 git 仓库才能执行, 请初始化后重新运行脚手架"
  exit 1
fi

echo $folderName

if [[ "$folderName" =~ ^.*\/([^\/]+)\.git ]]; then 
  folderName=${BASH_REMATCH[1]}
  echo "检测到 git 仓库名为 $folderName"

  svn info https://svn.baidu.com/app/search/forum/trunk/fe/react/$folderName
  error=$?
  if [ $error -ne 0 ]; then
      svn mkdir https://svn.baidu.com/app/search/forum/trunk/fe/react/$folderName -m "add sub folder"
      echo "svn dir create success"
  else
      echo "svn dir exist"
  fi
  echo "scm_svn_url: https://svn.baidu.com/app/search/forum/trunk/fe/react/$folderName\nhi_group_id: 1493692\n" > fis.yml
  
else
  echo "检查错误"
  exit 1
fi