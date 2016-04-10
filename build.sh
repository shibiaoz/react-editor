#!/bin/bash
# add path
export PATH=/home/fis/npm/bin:$PATH

# 如果 useNpm 为 true,执行 cnpm install
while read CONFLINE
do
    # 找到useNpm那一行
    if [[ $CONFLINE == *useNpm* ]]
    then
        # 如果有 true ,执行 cnpm install
        if [[ $CONFLINE == *true* ]]
        then
            cnpm install --production
        fi

    fi
done < fis-conf.js

# show fis-plus version
fis3 --version --no-color

# 通过 fis3 命令进行构建，构建的 media 为 prod ，这个可以根据用户具体配置修改
fis3 release production -u --no-color

# 进入output目录
cd output

# 将 .tar.gz 文件md5算出存放到 .tar.gz.md5
fileList=`ls ./`;
for item in $fileList;
do  
  if [ "${item:0-2:2}" == "gz"  ]  ;then
    md5sum $item > ${item}".md5"
  fi
done

echo "build end"