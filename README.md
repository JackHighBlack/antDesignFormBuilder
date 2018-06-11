运行AntFormDesign.exe文件后,访问地址http://127.0.0.1:8082/formdesign/formdesign#

git remote add origin 

git remote add origin git@github.com:JackHighBlack/antDesignFormBuilder.git

https://blog.csdn.net/aishangyutian12/article/details/52761051 

四、将本地仓库传到GitHub上去：

第一步：设置username和email，因为GitHub每次commit都会记录它们：

-------设置命令：git config --global user.name "your name"

-------设置命令：git config --global user.email "your_email@youremail.com"

第二步：进入要上传的仓库，添加远程地址：

-------设置命令：git remote add origin SSH连接地址（如以上拷贝的：git@github.com:Github用户名/仓库名.git）

第三步：将本地仓库上传到GitHub上：

-------使用命令：git push -u origin master