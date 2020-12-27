#### 版本控制软件

1. 本地版本控制软件
2. 集中化版本控制系统 svn
3. 分布式版本控制系统 git

#### git 的三个区域

1. 工作区: 已修改 `modified`
2. 暂存区: 已暂存 `staged`
3. git 仓库: 已提交 `committed`

#### 第一次配置用户信息

- `git config --global user.name "itheima"' 'git config --global user.email "itheima@itcast.cn"`

#### 查看配置信息

11

- git config user.name
- git config user.email

#### git 的基本操作

- `git init`初始化 git 仓库

- `git add .`提交文件到暂存区

- `git commit -m "提交信息"`

- `git status -s`更精简的方式查看 git 状态

- `git reset --hard commitID` 回退到指定版本

- `git log` 查看提交历史

- `git log -2` 查看最近提交两条记录

- `git log -2 --pretty=oneline` 美化记录输出方式

- `git reflog` 查看提交所有记录
