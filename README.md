# blog
##  先搭个架子

# router 路由
allowedMethods
例如这种写法装载路由层级，这里的router相当于父级：
```
router.use(‘/page’, page.routes(), page.allowedMethods())。
```

## sql 语句 增删改查

SELECT - 从数据库表中获取数据
UPDATE - 更新数据库表中的数据
DELETE - 从数据库表中删除数据
INSERT INTO - 向数据库表中插入数据