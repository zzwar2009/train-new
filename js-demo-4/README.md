## git  && github


### git 基本操作
    1. git fetch 
    2. git rebase 
    3. git log 
    4. git reset
    5. git revert 
    6. git remote 
    7. git stash

### git 图形化工具
    1. sourcetree
### GitHub 开源贡献代码流程
    1. fork 到自己的库 -> 提交代码 -> push到自己的库 -> 提pullrequest -> master merge

### gitflow规范
![image](https://user-images.githubusercontent.com/2322990/43703410-4f865120-998f-11e8-8c0b-305aea12fe52.png)
### 版本号管理（我们从1.2.0开始执行此规范）

主版本号 . 子版本号 [ 修正版本号 [. 编译版本号 ]]
英文对照 : Major_Version_Number.Minor_Version_Number[Revision_Number[.Build_Number]]
示例：1.2.0.1234

版本号管理策略
- 项目初版，版本号为 1.0 或 1.00;
- 当项目在进行了局部修改或 bug 修正时，主版本号和子版本号都不变，修正版本号加 1;
- 当项目在原有的基础上增加了部分功能时，主版本号不变，子版本号加 1，修正版本号复位为 0，因而可以被忽略掉 ;
- 当项目在进行了重大修改或局部修正累积较多，而导致项目整体发生全局变化时，主版本号加 1;
另外，编译版本号一般是编译器在编译过程中自动生成的，我们只定义其格式，并不进行人为控制 .
另外，还可以在版本号后面加入 Alpha,Beta,Gamma,Current,RC (Release Candidate),Release,Stable 等后缀，在这些后缀后面还可以加入 1 位数字的版本号 .

###  如何接受新知识
    1. 大v:0阮一峰 尤雨溪 张云龙 育伯
    2. 参加业内会议 
    3. github trending ，掘金
