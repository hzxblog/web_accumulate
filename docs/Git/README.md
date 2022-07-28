---
sidebar: auto
---

# 常见场景

[Git官方文档](https://git-scm.com/)

## Git删除远程已经删除的分支缓存

整理本地项目分支，删除了10多个无用分支，但vscode依然显示有已删除的分支，去代码仓库确认了下，分支的确已删除成功，所以怀疑应该是缓存数据。

使用下面命令可以查看远程和本地的分支数据，其中状态是`stale`代表远程已删除的分支。

```git
git remote show origin
```
这时候可是通过一下命令，删除缓存数据

```cmd
git remote prune origin
```

