# blog
##  先搭个架子

# router 路由
allowedMethods
例如这种写法装载路由层级，这里的router相当于父级：
```
router.use(‘/page’, page.routes(), page.allowedMethods())。
```