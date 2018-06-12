运行AntFormDesign.exe文件后,访问地址http://127.0.0.1:8082/formdesign/formdesign#

git remote add origin 

git remote add origin git@github.com:JackHighBlack/antDesignFormBuilder.git

https://blog.csdn.net/aishangyutian12/article/details/52761051 

二、将新建工程代码文件提交到本地仓库中：

第一步：新建一个本地仓库（Repository）文件夹：

第二步：利用安装好的Git Bash终端进入到创建的本地仓库目录下；

第三步：将需要Push到Github上的代码文件以及其他所有文件均拷贝到新建的本地仓库目录下；

第四步：在Git Bash终端下使用命令：“git init”生成“本地仓库”。

第五步：在Git Bash终端下使用命令：“git add .”将所有文件添加到缓存区中；利用命令：“git status -s”查看文件添加状态；

第六步：在Git Bash终端下使用命令：“git commit -m '第一次版本提交'”将提交到缓存区的所有文件添加到本地仓库中；

四、将本地仓库传到GitHub上去：


第一步：设置username和email，因为GitHub每次commit都会记录它们：

-------设置命令：git config --global user.name "your name"

-------设置命令：git config --global user.email "your_email@youremail.com"

第二步：进入要上传的仓库，添加远程地址：

-------设置命令：git remote add origin SSH连接地址（如以上拷贝的：git@github.com:Github用户名/仓库名.git）

第三步：将本地仓库上传到GitHub上：

-------使用命令：git push -u origin master
