## 与模块的关系

- 模块与业务功能和数据有关，提出需要哪些数据和返回什么数据，与展示无关。
- 模板属于客户端展示部分，与模块的划分无关。一个模板中可以同时获取/展示任意模块的数据。


## 模板文件

- 模板文件是存储模板节点（`tpl-name`）的地方，支持子模板引用语法（`tpl-node`, `tpl-source`）。
- 模板文件路径相对于程序的模板根目录，可以存在于子目录中。
- 子模板文件让展示代码从页面中独立出来，便于逻辑分解和整合设计。


## ID命名约定

- `g-` 全局前缀。
- `b-` 图标按钮前缀（`<i>`）。
- `main-` 主功能区前缀。
- `xx-` [xx]板块前缀。
- `xxx` 无前缀，顶级大版。
